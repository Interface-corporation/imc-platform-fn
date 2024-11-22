import Image from "next/image";
import { HeartIcon } from "@heroicons/react/24/solid";

interface Product {
  id: number;
  name: string;
  description: string;
  price: string;
  image: string;
  rating: number;
  reviews: number;
}

const products: Product[] = [
  {
    id: 1,
    name: "Laptop Sleeve MacBook",
    description: "Organic Cotton, fairtrade certified",
    price: "$59.00",
    image: "/images/prod1.jpg",
    rating: 5,
    reviews: 121,
  },
  {
    id: 2,
    name: "Wireless Headphones",
    description: "Noise-cancelling, high fidelity",
    price: "$99.00",
    image: "/images/prod3.jpg",
    rating: 4.5,
    reviews: 89,
  },
  {
    id: 3,
    name: "Smartphone Case",
    description: "Shockproof and lightweight",
    price: "$19.00",
    image: "/images/prod4.jpg",
    rating: 4,
    reviews: 45,
  },
  {
    id: 4,
    name: "Portable Charger",
    description: "10,000mAh, fast charging",
    price: "$39.00",
    image: "/images/prod2.jpg",
    rating: 4.8,
    reviews: 250,
  },
];

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
    <button className="mt-4 w-full px-4 py-2 text-xl font-medium text-white rounded-lg bg-[#1E3A5F] hover:bg-[#16415F] transition-colors duration-300">
      Add to Cart
    </button>
  </div>
);

const Product = () => {
  return (
    <div id="product">
      <div className="container mx-auto px-4 py-10">
        <h2 className="text-2xl sm:text-3xl font-bold mb-6 text-center sm:text-left">
          Grab the Best Deal on Smart Accessories
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Product;
