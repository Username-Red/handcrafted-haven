'use client';

import React, { useState } from "react";

interface AddToCartProps {
  productId: string;
}

const AddToCart: React.FC<AddToCartProps> = ({ productId }) => {
  const [isAdding, setIsAdding] = useState(false);
  const [message, setMessage] = useState("");

  const handleAddToCart = async () => {
    setIsAdding(true);
    setMessage("");

    try {
      const res = await fetch("/api/cart", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ productId }),
      });

      if (!res.ok) throw new Error("Failed to add to cart");

      setMessage("✅ Added to cart!");
    } catch (error) {
      console.error(error);
      setMessage("❌ Error adding to cart.");
    } finally {
      setIsAdding(false);
      setTimeout(() => setMessage(""), 2000); // clear message after 2s
    }
  };

  return (
    <div className="mt-4">
      <button
        onClick={handleAddToCart}
        disabled={isAdding}
        className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg shadow-md transition disabled:opacity-50"
      >
        {isAdding ? "Adding..." : "Add to Cart"}
      </button>
      {message && <p className="text-sm mt-2">{message}</p>}
    </div>
  );
};

export default AddToCart;
