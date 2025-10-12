import { PrismaClient } from "@/app/generated/prisma";
import ProductCard from "@/app/components/ProductCard";
import Link from "next/link";

const prisma = new PrismaClient();

type SellerPageProps = {
  params: { sellerId: string };
};

export default async function SellerPage({ params }: SellerPageProps) {
  const { sellerId } = params;

  // Fetch the seller and their products
  const seller = await prisma.user.findUnique({
    where: { id: sellerId },
    include: { products: true },
  });

  if (!seller) {
    return (
      <div className="p-10 text-center text-xl text-gray-600">
        Seller not found or no longer exists.
      </div>
    );
  }

  return (
    <div className="bg-base-300 min-h-screen p-10">
      {/* Seller Header */}
      <div className="bg-white shadow-xl rounded-2xl p-8 mb-10 max-w-5xl mx-auto text-center">
        <div className="avatar mb-4 flex justify-center">
          <div className="w-24 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2 overflow-hidden">
            <img
              src={
                seller.name
                  ? `https://api.dicebear.com/9.x/identicon/svg?seed=${seller.name}`
                  : "https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
              }
              alt={`${seller.name || "Seller"}'s profile`}
            />
          </div>
        </div>
        <h1 className="text-4xl font-bold mb-2">{seller.name || "Unnamed Seller"}</h1>
        <p className="text-gray-600">Trusted Artisan</p>
        <p className="text-sm mt-2 text-gray-500">
          Member since {new Date(seller.createdAt).getFullYear()}
        </p>
      </div>

      {/* Product Grid */}
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-semibold mb-6 text-center">
          {seller.name || "This Seller"}'s Creations
        </h2>

        {seller.products.length === 0 ? (
          <div className="text-center text-gray-500">
            This seller hasn’t listed any products yet.
          </div>
        ) : (
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {seller.products.map((product) => (
              <Link
                key={product.id}
                href={`/products/${product.id}`}
                className="block hover:scale-[1.02] transition-transform"
              >
                <ProductCard
                  image={product.imageUrl || "/images/placeholder.webp"}
                  name={product.name}
                  price={product.price}
                  seller={seller.name || "Unknown Seller"}
                />
              </Link>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
