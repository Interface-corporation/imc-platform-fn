import Image from "next/image";
import { HeartIcon, StarIcon } from "@heroicons/react/24/solid";
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

const ProductCard = ({ product }: { product: Product }) => {
  const renderStars = (rating: number) => {
    const fullStars = Math.floor(rating);
    const halfStars = rating % 1 !== 0 ? 1 : 0;
    const emptyStars = 5 - fullStars - halfStars;

    return (
      <>
        {/* Full stars */}
        {Array.from({ length: fullStars }).map((_, index) => (
          <StarIcon key={`full-${index}`} className="w-5 h-5 text-[#25aae1]" />
        ))}
        {/* Half star */}
        {halfStars > 0 && <StarIcon key="half" className="w-5 h-5 text-[#25aae1]" />}
        {/* Empty stars */}
        {Array.from({ length: emptyStars }).map((_, index) => (
          <StarIcon key={`empty-${index}`} className="w-5 h-5 text-gray-300" />
        ))}
      </>
    );
  };

  return (
    <Link href={`/Products/${product.id}`}>
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
        <div className="flex text-[#25aae1]">{renderStars(product.rating)}</div>
        <p className="text-gray-500 text-sm">({product.reviews})</p>
      </div>

      {/* Price */}
      <div className="text-[#1E3A5F] font-bold mt-2 text-lg text-center sm:text-left">
        {product.price}
      </div>

      {/* Add to Cart Button */}
      <button className="mt-4 w-1/2 px-4 py-2 text-lg font-medium text-black rounded-full bg-white border hover:bg-[#25aae1] hover:text-white transition-colors duration-300">
        Add to Cart
      </button>
    </div>
    </Link>
  );
};

export default ProductCard;
