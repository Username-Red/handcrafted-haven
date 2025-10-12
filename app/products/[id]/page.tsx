import { PrismaClient } from "@/app/generated/prisma";
import AddToCart from "@/app/components/AddToCart";
import Link from "next/link";

const prisma = new PrismaClient();

type ProductPageProps = {
  params: Promise<{ id: string }>;
};

export default async function ProductPage({ params }: ProductPageProps) {
  const { id } = await params;

  // Fetch product by ID
  const product = await prisma.product.findFirst({
    where: { id },
    include: {
      reviews: {
        include: {
          user: true, // include reviewer name
        },
      },
      seller: true,
    },
  });

  if (!product) {
    return <div className="p-10 text-center text-xl">Product not found</div>;
  }

  return (
    <div className="bg-base-300 min-h-screen flex items-center justify-center p-6">
      <div className="bg-white w-full max-w-6xl rounded-2xl shadow-2xl flex flex-col lg:flex-row overflow-hidden">
        <img
          src={product.imageUrl || "/images/placeholder.webp"}
          className="w-full lg:w-1/2 object-cover"
          alt={product.name}
        />
        <div className="p-10 flex flex-col justify-center lg:w-1/2">
          <h1 className="text-5xl font-bold capitalize">{product.name}</h1>
          <p className="text-2xl font-semibold mt-4">${product.price.toFixed(2)}</p>
          <p className="py-6 text-lg">{product.description}</p>

          {/* Seller Info */}
          <Link 
            href={`/seller/${product.seller.id}`} 
            className="text-sm text-gray-600 mt-2 hover:text-blue-600 transition-colors"
          >
            Sold by:{" "}
            <span className="font-semibold underline hover:no-underline">
              {product.seller.name || "Unknown Seller"}
            </span>
          </Link>


          {/* Add to Cart Button */}
          <div className="mt-8">
            <AddToCart productId={product.id} />
          </div>

          {/* Reviews Section */}
          {product.reviews.length > 0 && (
            <div className="mt-10">
              <h2 className="text-2xl font-semibold mb-4">Customer Reviews</h2>
              <div className="space-y-4">
                {product.reviews.map((r) => (
                  <div key={r.id} className="border-t pt-4">
                    <p className="font-medium">⭐ {r.rating}/5</p>
                    <p>{r.comment}</p>
                    <p className="text-sm text-gray-500 mt-1">
                      — {r.user?.name || "Anonymous"}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
