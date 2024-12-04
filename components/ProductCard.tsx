import { HeartIcon } from "@heroicons/react/24/solid";
import Image from "next/image";
import Link from "next/link";

interface Product {
    id: number;
    name: string;
    description: string;
    price: string;
    image: string;
    rating: number;
    reviews: number;
  }
  

const ProductCard = ({ product }: { product: Product }) => (
    <div className="bg-white shadow-lg rounded-xl p-4 relative group hover:shadow-xl transition-shadow duration-300">
      {/* Wishlist Icon */}
      <button
        className="absolute top-4 right-4 bg-white p-2 rounded-full shadow-md text-gray-400 hover:text-red-500 transition"
        aria-label="Add to Wishlist"
      >
        <HeartIcon className="w-5 h-5" />
      </button>
  
      {/* Product Image */}
      <div className="relative w-full h-52 mb-4 overflow-hidden rounded-lg">
        <Image
          src={product.image}
          alt={product.name}
          fill
          className="object-cover"
        />
      </div>
  
      {/* Product Details */}
      <h3 className="text-lg font-medium text-center sm:text-left">
        {product.name}
      </h3>
      <p className="text-gray-500 text-sm text-center sm:text-left">
        {product.description}
      </p>
  
      {/* Rating Section */}
      <div className="flex items-center justify-center sm:justify-start space-x-1 my-2">
        <div className="text-yellow-500">
          {"⭐".repeat(Math.floor(product.rating))}
          {product.rating % 1 !== 0 ? "⭐" : ""}
        </div>
        <p className="text-gray-500 text-sm">({product.reviews})</p>
      </div>
  
      {/* Price */}
      <div className="text-[#1E3A5F] font-bold mt-2 text-lg text-center sm:text-left">
        {product.price}
      </div>
  
      {/* Add to Cart Button */}
      <Link href="/cart">
      <button className="mt-4 w-full px-4 py-2 text-xl font-medium text-white rounded-lg bg-[#1E3A5F] hover:bg-[#16415F] transition-colors duration-300">
        Add to Cart
      </button>
      </Link>
    </div>
  );

  export default ProductCard;