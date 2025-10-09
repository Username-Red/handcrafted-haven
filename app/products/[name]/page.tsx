import AddToCart from "@/app/components/AddToCart";

type ProductPageProps = {
  params: Promise<{ name: string }>; 
};

const products: Record<string, { image: string; price: number; description: string }> = {
  sebastian: {
    image: "/images/Sebastian.png",
    price: 10,
    description: "A loyal companion, always ready to help.",
  },
  lucy: {
    image: "/images/Lucy.png",
    price: 12,
    description: "Bright and full of energy.",
  },
  kris: {
    image: "/images/Kris.png",
    price: 15,
    description: "Strong and dependable.",
  },
  jethro: {
    image: "/images/Jet.png",
    price: 20,
    description: "Fast and adventurous.",
  },
};

export default async function ProductPage({ params }: ProductPageProps) {
  const { name } = await params; 
  const product = products[name.toLowerCase()];

  if (!product) {
    return <div className="p-10">Product not found</div>;
  }

  return (
    <div className="bg-base-300 min-h-screen flex items-center justify-center p-6">
      <div className="bg-white w-full max-w-6xl rounded-2xl shadow-2xl flex flex-col lg:flex-row overflow-hidden">
        <img
          src={product.image}
          className="w-full lg:w-1/2 object-cover"
          alt={name}
        />
        <div className="p-10 flex flex-col justify-center lg:w-1/2">
          <h1 className="text-5xl font-bold capitalize">{name}</h1>
          <p className="text-2xl font-semibold mt-4">${product.price}</p>
          <p className="py-6 text-lg">{product.description}</p>
          <AddToCart />
        </div>
      </div>
    </div>
  );
}
