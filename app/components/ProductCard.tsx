import Image from "next/image";

interface ProductCardProps {
  image: string;
  name: string;
  seller?: string;
  price?: number;
}

export default function ProductCard({ image, name, seller, price }: ProductCardProps) {
  return (
    <div className="bg-white shadow-md rounded-xl overflow-hidden hover:shadow-lg transition-all">
      <Image
        src={image}
        alt={name}
        width={300}
        height={300}
        className="object-cover w-full h-64"
      />
      <div className="p-4">
        <h3 className="text-lg font-semibold">{name}</h3>
        {seller && <p className="text-sm text-gray-500">By {seller}</p>}
        {price !== undefined && (
          <p className="mt-2 text-blue-600 font-medium">${price.toFixed(2)}</p>
        )}
      </div>
    </div>
  );
}
