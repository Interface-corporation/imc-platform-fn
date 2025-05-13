import React from "react";
import Image from "next/image";
import { products } from "@/data/products";

const AllProductsPage = () => {
  return (
    <div className="p-6">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-semibold">All Product List</h2>
        <button className="bg-orange-500 hover:bg-orange-600 text-white px-4 py-2 rounded">
          Add Product
        </button>
      </div>

      <table className="w-full border-collapse">
        <thead className="bg-gray-100 text-left text-sm text-gray-600">
          <tr>
            <th className="p-3">Product Name & Size</th>
            <th className="p-3">Price</th>
            <th className="p-3">Stock</th>
            <th className="p-3">Category</th>
            <th className="p-3">Rating</th>
            <th className="p-3">Action</th>
          </tr>
        </thead>
        <tbody>
          {products.map((product) => (
            <tr key={product.id} className="border-b hover:bg-gray-50 text-sm">
              <td className="p-3 flex items-center gap-3">
                <Image
                  src={product.images[0]}
                  alt={product.name}
                  width={40}
                  height={40}
                  className="rounded"
                />
                <div>
                  <div className="font-medium text-gray-800">{product.name}</div>
                  <div className="text-xs text-gray-500">Size: S, M</div>
                </div>
              </td>
              <td className="p-3">${product.price}.00</td>
              <td className="p-3">
                <div>{product.stock} Item Left</div>
                <div className="text-xs text-gray-500">{Math.floor(Math.random() * 800)} Sold</div>
              </td>
              <td className="p-3">{product.type === "buy" ? "Electronics" : "Fashion"}</td>
              <td className="p-3 flex items-center gap-1">
                <span className="text-yellow-500">★</span>
                {product.rating}
                <span className="text-xs text-gray-500">({product.reviews} Review)</span>
              </td>
              <td className="p-3 flex gap-2">
                <button className="text-gray-600 hover:text-black">
                  <i className="fas fa-eye"></i>
                </button>
                <button className="text-orange-500 hover:text-orange-700">
                  <i className="fas fa-edit"></i>
                </button>
                <button className="text-red-500 hover:text-red-700">
                  <i className="fas fa-trash"></i>
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <div className="flex justify-end mt-4 gap-2">
        <button className="px-3 py-1 bg-gray-200 rounded">Previous</button>
        <button className="px-3 py-1 bg-orange-500 text-white rounded">1</button>
        <button className="px-3 py-1 bg-gray-200 rounded">2</button>
        <button className="px-3 py-1 bg-gray-200 rounded">3</button>
        <button className="px-3 py-1 bg-gray-200 rounded">Next</button>
      </div>
    </div>
  );
};

export default AllProductsPage;
