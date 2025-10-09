const { PrismaClient } = require('../app/generated/prisma');

const prisma = new PrismaClient();

async function main() {
  console.log('🌱 Seeding database...');

  // 1️⃣ Create Users
  const alice = await prisma.user.create({
    data: {
      name: 'Alice Artisan',
      email: 'alice@example.com',
      password: 'password123',
    },
  });

  const bob = await prisma.user.create({
    data: {
      name: 'Bob Builder',
      email: 'bob@example.com',
      password: 'securepass',
    },
  });

  // 2️⃣ Create Products
  const candle = await prisma.product.create({
    data: {
      name: 'Lavender Candle',
      description: 'A soothing handmade lavender-scented candle.',
      price: 12.99,
      stock: 15,
      category: 'Home Decor',
      sellerId: alice.id,
    },
  });

  const mug = await prisma.product.create({
    data: {
      name: 'Clay Coffee Mug',
      description: 'Rustic clay mug, perfect for morning brews.',
      price: 18.5,
      stock: 8,
      category: 'Kitchenware',
      sellerId: bob.id,
    },
  });

  // 3️⃣ Create an Order
  const order = await prisma.order.create({
    data: {
      userId: alice.id,
      total: candle.price + mug.price,
      items: {
        create: [
          { productId: candle.id, quantity: 1, price: candle.price },
          { productId: mug.id, quantity: 1, price: mug.price },
        ],
      },
    },
  });

  // 4️⃣ Add a Review
  await prisma.review.create({
    data: {
      rating: 5,
      comment: 'Absolutely love this candle!',
      userId: alice.id,
      productId: candle.id,
    },
  });

  console.log('✅ Seeding complete!');
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
