"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { HeartIcon, StarIcon } from "@heroicons/react/24/solid";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Link from "next/link";

interface Product {
  id: number;
  name: string;
  description: string;
  price: string;
  images: string[];
  rating: number;
  reviews: number;
  features: string[];
  coupons: string[];
  colors: string[];
  badge: string;
}
const ProductCard2 = ({ product }: { product: Product }) => {
  return (
    <Link href={`/Products/${product.id}`}>
      <div className="bg-white shadow-md hover:shadow-lg rounded-lg p-4 relative group transition duration-300 flex flex-col">
        {/* Header Section (Badge & Wishlist Icon) */}
        <div className="flex items-center justify-between mb-4">
          {/* Badge */}
          {product.badge && (
            <span
              className={`px-3 py-1 text-xs font-bold rounded-full ${product.badge === "For Sale"
                  ? "bg-blue-500 text-white"
                  : product.badge === "For Rent"
                    ? "bg-green-500 text-white"
                    : "bg-gray-500 text-white"
                }`}
            >
              {product.badge}
            </span>
          )}

          {/* Wishlist Icon */}
          <button
            className="bg-white p-2 rounded-full shadow-md text-gray-400 hover:text-red-500 transition transform hover:scale-110"
            aria-label="Add to Wishlist"
          >
            <HeartIcon className="w-5 h-5" />
          </button>
        </div>

        {/* Product Image */}
        <div className="relative w-full h-52 mb-4 overflow-hidden rounded-lg flex-shrink-0">
          <Image
            src={product.images[0]}
            alt={product.name}
            fill
            className="object-cover group-hover:scale-105 transition-transform duration-300"
          />
        </div>

        {/* Product Details */}
        <div className="flex-grow flex flex-col text-center sm:text-left">
          {/* Product Name */}
          <h3 className="text-lg font-semibold text-gray-800 line-clamp-2">
            {product.name}
          </h3>

          {/* Product Description */}
          <p className="text-gray-500 text-sm mt-2 line-clamp-2">
            {product.description}
          </p>

          {/* Price */}
          <p className="text-lg font-bold text-blue-600 mt-4">
            {product.price}
          </p>
        </div>

        {/* Add to Cart Button */}
        <button className="mt-6 w-full bg-blue-500 text-white py-2 rounded-lg text-sm font-semibold hover:bg-blue-700 transition duration-300">
          Add to Cart
        </button>
      </div>
    </Link>
  );
};



const products: Product[] = [
  {
    id: 1,
    name: "Minimalist Baseball Cap",
    description: "Heavy-duty, trendy streetwear style with worn-out edges.",
    price: "12,308 RWF",
    images: [
      "/images/prod1.jpg",
      "/images/prod2.jpg",
      "/images/prod3.jpg",
      "/images/prod4.jpg",
    ],
    rating: 4.5,
    reviews: 53,
    features: [
      "Adjustable size for a perfect fit.",
      "Breathable fabric for all seasons.",
      "Stylish curved brim and durable build.",
    ],
    coupons: [
      "1,360 RWF",
      "2,040 RWF",
      "3,400 RWF",
      "5,100 RWF",
      "8,500 RWF",
    ],
    colors: ["Black", "Red", "Grey", "Coffee"],
    badge: "For Sale",
  },
  {
    id: 2,
    name: "Minimalist Baseball Cap",
    description: "Heavy-duty, trendy streetwear style with worn-out edges.",
    price: "12,308 RWF",
    images: [
      "/images/prod1.jpg",
      "/images/prod2.jpg",
      "/images/prod3.jpg",
      "/images/prod4.jpg",
    ],
    rating: 4.5,
    reviews: 53,
    features: [
      "Adjustable size for a perfect fit.",
      "Breathable fabric for all seasons.",
      "Stylish curved brim and durable build.",
    ],
    coupons: [
      "1,360 RWF",
      "2,040 RWF",
      "3,400 RWF",
      "5,100 RWF",
      "8,500 RWF",
    ],
    colors: ["Black", "Red", "Grey", "Coffee"],
    badge: "For Sale",
  },
  {
    id: 3,
    name: "Minimalist Baseball Cap",
    description: "Heavy-duty, trendy streetwear style with worn-out edges.",
    price: "12,308 RWF",
    images: [
      "/images/prod1.jpg",
      "/images/prod2.jpg",
      "/images/prod3.jpg",
      "/images/prod4.jpg",
    ],
    rating: 4.5,
    reviews: 53,
    features: [
      "Adjustable size for a perfect fit.",
      "Breathable fabric for all seasons.",
      "Stylish curved brim and durable build.",
    ],
    coupons: [
      "1,360 RWF",
      "2,040 RWF",
      "3,400 RWF",
      "5,100 RWF",
      "8,500 RWF",
    ],
    colors: ["Black", "Red", "Grey", "Coffee"],
    badge: "For Sale",
  },
  {
    id: 4,
    name: "Minimalist Baseball Cap",
    description: "Heavy-duty, trendy streetwear style with worn-out edges.",
    price: "12,308 RWF",
    images: [
      "/images/prod1.jpg",
      "/images/prod2.jpg",
      "/images/prod3.jpg",
      "/images/prod4.jpg",
    ],
    rating: 4.5,
    reviews: 53,
    features: [
      "Adjustable size for a perfect fit.",
      "Breathable fabric for all seasons.",
      "Stylish curved brim and durable build.",
    ],
    coupons: [
      "1,360 RWF",
      "2,040 RWF",
      "3,400 RWF",
      "5,100 RWF",
      "8,500 RWF",
    ],
    colors: ["Black", "Red", "Grey", "Coffee"],
    badge: "For Sale",
  },
];
 
const SingleProductPage = ({ params }: { params: { id: string } }) => {
  const { id } = params;
  const [product, setProduct] = useState<Product | null>(null);
  const [selectedImage, setSelectedImage] = useState<string>("");
  const [quantity, setQuantity] = useState<number>(1);

  useEffect(() => {
    if (id) {
      const foundProduct = products.find((p) => p.id === Number(id));
      if (foundProduct) {
        setProduct(foundProduct);
        setSelectedImage(foundProduct.images[0]);
      }
    }
  }, [id]);

  if (!product) return <div className="text-center py-10">Product not found</div>;

  const renderStars = (rating: number) => {
    const fullStars = Math.floor(rating);
    const emptyStars = 5 - fullStars;

    return (
      <>
        {Array.from({ length: fullStars }).map((_, index) => (
          <StarIcon key={`full-${index}`} className="w-5 h-5 text-yellow-500" />
        ))}
        {Array.from({ length: emptyStars }).map((_, index) => (
          <StarIcon key={`empty-${index}`} className="w-5 h-5 text-gray-300" />
        ))}
      </>
    );
  };

  return (
    <>
      <Header />
      <div className="container mx-auto px-6 py-8 mt-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <div className="relative w-full h-80 mb-4 rounded-lg overflow-hidden">
              <Image
                src={selectedImage}
                alt={product.name}
                fill
                className="object-cover"
              />
            </div>
            <div className="flex space-x-4 justify-center">
              {product.images.map((image, index) => (
                <button
                  key={index}
                  onClick={() => setSelectedImage(image)}
                  className={`border-2 rounded-md ${selectedImage === image
                      ? "border-blue-500"
                      : "border-gray-300"
                    }`}
                >
                  <Image
                    src={image}
                    alt={`${product.name} - Variant ${index + 1}`}
                    width={80}
                    height={80}
                    className="rounded-md"
                  />
                </button>
              ))}
            </div>
          </div>

          <div>
            <h1 className="text-3xl font-bold text-gray-800">{product.name}</h1>
            <p className="text-gray-500 mt-2">{product.description}</p>
            <div className="flex items-center space-x-2 mt-2">
              <div className="flex">{renderStars(product.rating)}</div>
              <span className="text-gray-500 text-sm">
                ({product.reviews} reviews)
              </span>
            </div>
            <p className="text-xl font-bold text-blue-600 mt-4">
              {product.price}
            </p>

            <div className="mt-6 flex items-center space-x-4">
              <button
                onClick={() => setQuantity((prev) => Math.max(1, prev - 1))}
                className="px-4 py-2 border rounded-md hover:bg-gray-100"
              >
                -
              </button>
              <span>{quantity}</span>
              <button
                onClick={() => setQuantity((prev) => prev + 1)}
                className="px-4 py-2 border rounded-md hover:bg-gray-100"
              >
                +
              </button>
            </div>

            <div className="mt-6 flex space-x-4">
              <button className="px-6 py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-700">
                Buy Now
              </button>
              <button className="px-6 py-3 bg-gray-100 text-gray-700 rounded-lg border border-gray-300 hover:bg-gray-200">
                Add to Cart
              </button>
            </div>

            {/* Long Product Description Section */}
            <div className="mt-8">
              <h3 className="text-lg font-semibold text-gray-800">
                Product Details
              </h3>
              <p className="text-gray-600 mt-2 leading-relaxed">
                This premium product is crafted with the highest attention to
                detail and quality. Designed for durability and comfort, it
                blends functionality with a sleek, modern aesthetic. Whether
                you&apos;re using it daily or on special occasions, this product
                delivers unparalleled performance and style. Made with
                eco-friendly materials, it is not only a great choice for you
                but also for the environment. Don&apos;t miss the chance to elevate
                your experience with this exceptional product.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="container mx-auto px-4 py-4"><h2 className="text-2xl sm:text-3xl font-bold mb-6 text-center sm:text-left">Similar Products</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.map((product) => (
            <ProductCard2 key={product.id} product={product} />
          ))}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default SingleProductPage;
