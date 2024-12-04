"use client"
import Image from "next/image";
import { useState } from "react";

interface CartItemProps {
  id: number;
  name: string;
  description: string;
  price: string;
  quantity: number;
  stock: number;
  imageUrl: string;
  onUpdate: (id: number, quantity: number) => void;
  onDelete: (id: number) => void;
}

const CartItem: React.FC<CartItemProps> = ({
  id,
  name,
  description,
  price,
  quantity,
  stock,
  imageUrl,
  onUpdate,
  onDelete,
}) => {
  const [inputQuantity, setInputQuantity] = useState(quantity);

  const handleUpdate = () => {
    if (inputQuantity > 0 && inputQuantity <= stock) {
      onUpdate(id, inputQuantity);
    } else {
      alert("Invalid quantity. Please enter a value within the stock range.");
    }
  };

  return (
    <div className="flex items-start space-x-6 p-4 bg-white rounded-lg shadow-md">
      {/* Product Image */}
      <div className="w-24 h-24">
        <Image
          src={imageUrl}
          alt={name}
          width={96}
          height={96}
          className="rounded-md object-cover"
        />
      </div>

      {/* Product Details */}
      <div className="flex-1">
        <h3 className="text-lg font-semibold">{name}</h3>
        <p className="text-gray-600 text-sm mt-1">{description}</p>
        <p className="text-green-600 text-sm font-medium mt-2">In Stock</p>

        <div className="flex items-center space-x-2 mt-4">
          <span className="font-semibold">Qty:</span>
          {/* Quantity Input */}
          <input
            type="number"
            min={1}
            max={stock}
            value={inputQuantity}
            onChange={(e) => setInputQuantity(Number(e.target.value))}
            className="w-16 border rounded-md text-center focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <button
            className="px-4 py-1 bg-blue-500 text-white rounded-md hover:bg-blue-600"
            onClick={handleUpdate}
            title="Update quantity"
          >
            Update
          </button>
          <button
            className="px-4 py-1 bg-red-500 text-white rounded-md hover:bg-red-600"
            onClick={() => onDelete(id)}
            title="Remove item"
          >
            Delete
          </button>
        </div>
      </div>

      {/* Price */}
      <div className="text-right">
        <p className="text-xl font-bold text-gray-800">{price}</p>
      </div>
    </div>
  );
};

export default CartItem;
