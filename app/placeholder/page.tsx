import React from "react";
import { PrismaClient } from "../../app/generated/prisma";

const prisma = new PrismaClient();

export default async function PlaceHolder() {
  const users = await prisma.user.findMany();
  const products = await prisma.product.findMany();
  const reviews = await prisma.review.findMany();

  return (
    <div className="p-10 space-y-10">
      {/* Users Section */}
      <div>
        <h2 className="text-2xl font-bold mb-3">Users</h2>
        <ul className="list-disc pl-6">
          {users.map((user) => (
            <li key={user.id}>
              <span className="font-semibold">{user.name}</span> –{" "}
              <span className="text-gray-600">{user.email}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* Products Section */}
      <div>
        <h2 className="text-2xl font-bold mb-3">Products</h2>
        <ul className="list-disc pl-6">
          {products.map((product) => (
            <li key={product.id}>
              <span className="font-semibold">{product.name}</span> – $
              {product.price.toFixed(2)}{" "}
              <span className="text-gray-500">(Seller ID: {product.sellerId})</span>
            </li>
          ))}
        </ul>
      </div>

      {/* Reviews Section */}
      <div>
        <h2 className="text-2xl font-bold mb-3">Reviews</h2>
        <ul className="list-disc pl-6">
          {reviews.map((review) => (
            <li key={review.id}>
              <span className="font-semibold">Rating: {review.rating}</span> –{" "}
              {review.comment || "No comment"} (User ID: {review.userId}, Product ID: {review.productId})
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
