'use client';

import { useCart } from '@/context/CartContext';
import { Product } from '@/types/product';

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
        <img
          src={product.images[0]}
          alt={product.name}
          className="w-full h-full object-cover"
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