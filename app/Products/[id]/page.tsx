"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { StarIcon } from "@heroicons/react/24/solid";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

interface Product {
  id: number;
  name: string;
  description: string;
  price: string;
  images: string[]; // Array of images for product variants
  rating: number;
  reviews: number;
}

const products: Product[] = [
  {
    id: 1,
    name: "AirPods - Max",
    description: "High-fidelity audio with active noise cancellation",
    price: "$186",
    images: [
      "/images/prod1.jpg", // Green version
      "/images/prod2.jpg", // Blue version
      "/images/prod3.jpg", // Red version
    ],
    rating: 5,
    reviews: 101,
  },
  {
    id: 2,
    name: "P47 Green Headsets",
    description: "Organic Cotton, fairtrade certified",
    price: "$59.00",
    images: ["/images/prod2.jpg"], // Single image
    rating: 4.5,
    reviews: 89,
  },
  {
    id: 3,
    name: "Wireless Headphones",
    description: "Noise-cancelling, high fidelity",
    price: "$99.00",
    images: ["/images/prod2.jpg"], // Single image
    rating: 4,
    reviews: 75, 
  },
];

const SingleProductPage = ({ params }: { params: { id: string } }) => {
  const { id } = params;
  const [product, setProduct] = useState<Product | null>(null);
  const [selectedImage, setSelectedImage] = useState<string>(""); // Main displayed image
  const [quantity, setQuantity] = useState<number>(1);

  useEffect(() => {
    if (id) {
      const foundProduct = products.find((p) => p.id === Number(id));
      if (foundProduct) {
        setProduct(foundProduct);
        setSelectedImage(foundProduct.images[0]); // Default to the first image
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
          <StarIcon key={`full-${index}`} className="w-5 h-5 text-[#25aae1]" />
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
        {/* Product Page Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Product Gallery */}
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
                  className={`border-2 rounded-md ${selectedImage === image ? "border-blue-500" : "border-gray-300"
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

          {/* Product Details */}
          <div>
            {/* Header */}
            <div className="">
              <h1 className="text-3xl font-bold text-[#1E3A5F]">{product.name} <span className="text-2xl font-bold text-[#25aae1] mt-4">{product.price}</span></h1>
            </div>
            <p className="text-gray-500 mt-2">{product.description}</p>
            {/* Rating */}
            <div className="flex items-center space-x-2 mt-2">
              <div className="flex">{renderStars(product.rating)}</div>
              <span className="text-gray-500 text-sm">({product.reviews} reviews)</span>
            </div>

            {/* Quantity Selector */}
            <div className="flex items-center mt-6 space-x-4">
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
               {/* Stock Warning */}
            <p className="text-sm text-red-500 mt-4">
              Only 12 items left! Don&apos;t miss it.
            </p>
            </div>

            {/* Add to Cart and Buy Buttons */}
            <div className="mt-6 flex space-x-4">
              <button className="px-6 py-3 bg-[#1E3A5F] text-white rounded-lg hover:bg-[#25aae1]">
                Buy Now
              </button>
              <button className="px-6 py-3 text-lg font-medium text-black bg-white border border-black rounded-lg hover:bg-[#16415F] hover:text-white transition-colors duration-300">
                Add to Cart
              </button>

            </div>

           
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default SingleProductPage;
