import { PrismaClient } from "@/app/generated/prisma";
import Link from "next/link";
import ProductCard from "./components/ProductCard";
import styles from "./styles/Home.module.css";

const prisma = new PrismaClient();

export default async function Home() {
  // Fetch all products with their seller's basic info
  const products = await prisma.product.findMany({
    include: {
      seller: {
        select: { name: true, email: true },
      },
    },
    orderBy: { createdAt: "desc" },
  });

  return (
    <div className={styles.gridContainer}>
      {products.length === 0 ? (
        <p className="text-center text-gray-500 col-span-full">
          No products found. Add some to your database!
        </p>
      ) : (
        products.map((p) => (
          <Link key={p.id} className={styles.card} href={`/products/${p.id}`}>
            <ProductCard
              image={p.imageUrl || "/images/placeholder.webp"}
              name={p.name}
              seller={p.seller?.name || "Unknown Seller"}
              price={p.price}
            />
          </Link>
        ))
      )}
    </div>
  );
}
