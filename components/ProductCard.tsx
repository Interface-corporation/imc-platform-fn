'use client';

import { useCart } from '@/context/CartContext';
import { Product } from '@/types/product';
import Image from 'next/image'; 

interface ProductCardProps {
  product: Product;
}

export function ProductCard({ product }: ProductCardProps) {
  const { addToCart } = useCart();

  const handleAddToCart = () => {
    addToCart(product, 1);
  };

  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
      <div className="relative aspect-square">
        <Image
          src={product.images[0]} // Path to the image
          alt={product.name}       // Alt text for accessibility
          width={500}               // Provide a width (adjust as necessary)
          height={500}              // Provide a height (adjust as necessary)
          className="w-full h-full object-cover" // Maintain the object-fit behavior
          priority                 // Optional: Use `priority` if the image is above the fold
        />
      </div>
      <div className="p-4">
        <h3 className="text-lg font-semibold text-gray-900">{product.name}</h3>
        <p className="text-gray-600 mt-1">${Number(product.price).toFixed(2)}</p>

        <button
          onClick={handleAddToCart}
          className="mt-4 w-full bg-primary text-white py-2 px-4 rounded-lg hover:bg-primary/90 transition-colors"
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
}