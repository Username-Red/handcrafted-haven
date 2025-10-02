import bcrypt from 'bcrypt';
import postgres from 'postgres';
import { items, users, tags} from '../lib/placeholder-data';

const sql = postgres(process.env.POSTGRES_URL!, { ssl: 'require' });

async function seedUsers() {
  await sql`CREATE EXTENSION IF NOT EXISTS "uuid-ossp"`;

  await sql`
    CREATE TABLE IF NOT EXISTS users (
      id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
      name VARCHAR(255) NOT NULL,
      email TEXT NOT NULL UNIQUE,
      password TEXT NOT NULL,
      favorites UUID ARRAY
    );
  `;

  const insertedUsers = await Promise.all(
    users.map(async (user) => {
      const hashedPassword = await bcrypt.hash(user.password, 10);
      if (user.favorites != null) {
        return sql`
            INSERT INTO users (id, name, email, password, favorites)
            VALUES (${user.id}, ${user.name}, ${user.email}, ${hashedPassword}, ${user.favorites})
            ON CONFLICT (id) DO NOTHING;
        `;
      } else {
        return sql`
            INSERT INTO users (id, name, email, password)
            VALUES (${user.id}, ${user.name}, ${user.email}, ${hashedPassword})
            ON CONFLICT (id) DO NOTHING;
        `;
      }
    }),
  );

  return insertedUsers;
}

async function seedItems() {
  await sql`CREATE EXTENSION IF NOT EXISTS "uuid-ossp"`;

  await sql`
    CREATE TABLE IF NOT EXISTS items (
      product_id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
      creator_id UUID NOT NULL,
      name TEXT NOT NULL,
      price INT NOT NULL,
      image TEXT NOT NULL,
      tags UUID ARRAY
    );
  `;

  const insertedItems = await Promise.all(
    items.map(
      async (item) => {
        if (item.tags != null) {
        return sql`
        INSERT INTO items (product_id, creator_id, name, price, image, tags)
        VALUES (${item.product_id}, ${item.creator_id}, ${item.name}, ${item.price}, ${item.image}, ARRAY[${item.tags}]::uuid[])
        ON CONFLICT (id) DO NOTHING;`} else {
        return sql`
        INSERT INTO items (product_id, creator_id, name, price, image)
        VALUES (${item.product_id}, ${item.creator_id}, ${item.name}, ${item.price}, ${item.image})
        ON CONFLICT (id) DO NOTHING;`
      }}
    ),
  );

  return insertedItems;
}

async function seedTags() {
  await sql`CREATE EXTENSION IF NOT EXISTS "uuid-ossp"`;

  await sql`
    CREATE TABLE IF NOT EXISTS tags (
      id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
      tag_name TEXT NOT NULL
    );
  `;

  const insertedTags = await Promise.all(
    tags.map(
      (tag) => sql`
        INSERT INTO tags (id, tag_name)
        VALUES (${tag.id}, ${tag.tag_name})
        ON CONFLICT (id) DO NOTHING;
      `,
    ),
  );

  return insertedTags
}

export async function GET() {
  try {
    const result = await sql.begin((sql) => [
      seedUsers(),
      seedItems(),
      seedTags(),
    ]);

    return Response.json({ message: 'Database seeded successfully' });
  } catch (error) {
    return Response.json({ error }, { status: 500 });
  }
}