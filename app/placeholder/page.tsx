import React from "react";
import { prisma } from "../lib/prisma";

export default async function PlaceHolder() {
  const users = await prisma.user.findMany();
  const items = await prisma.item.findMany();
  const tags = await prisma.tag.findMany();

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

      {/* Items Section */}
      <div>
        <h2 className="text-2xl font-bold mb-3">Items</h2>
        <ul className="list-disc pl-6">
          {items.map((item) => (
            <li key={item.product_id}>
              <span className="font-semibold">{item.name}</span> – $
              {item.price}{" "}
              <span className="text-gray-500">(Creator ID: {item.creator_id})</span>
            </li>
          ))}
        </ul>
      </div>

      {/* Tags Section */}
      <div>
        <h2 className="text-2xl font-bold mb-3">Tags</h2>
        <ul className="list-disc pl-6">
          {tags.map((tag) => (
            <li key={tag.id}>
              <span className="font-semibold">{tag.tag_name}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
