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
    description:
      "Experience high-fidelity audio with industry-leading Active Noise Cancellation and incredible sound.",
    price: "$186",
    images: [
      "/images/headeset.png", // Front view
      "/images/headeset.png", // Side view
      "/images/headeset.png", // Back view
      "/images/headeset.png", // Top view
    ],
    rating: 5,
    reviews: 101,
  },
  {
    id: 2,
    name: "P47 Green Headsets",
    description: "Organic Cotton, fairtrade certified.",
    price: "$59.00",
    images: ["/images/headeset.png"],
    rating: 4.5,
    reviews: 89,
  },
  {
    id: 3,
    name: "Wireless Headphones",
    description: "Noise-cancelling, high fidelity sound for music lovers.",
    price: "$99.00",
    images: ["/images/headeset.png"],
    rating: 4,
    reviews: 75,
  },
  {
    id: 4,
    name: "Bluetooth Over-Ear Headphones",
    description: "Premium design with up to 20 hours of playback.",
    price: "$129.00",
    images: ["/images/headeset.png"],
    rating: 4.2,
    reviews: 65,
  },
  {
    id: 5,
    name: "Noise-Cancelling Headphones",
    description: "Compact, lightweight, and immersive sound quality.",
    price: "$89.00",
    images: ["/images/headeset.png"],
    rating: 4.7,
    reviews: 58,
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
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Product Image Gallery */}
          <div>
            <div className="relative w-full h-96 mb-4">
              <Image
                src={selectedImage}
                alt={product.name}
                fill
                className="object-cover rounded-lg shadow-md"
              />
            </div>
            <div className="flex space-x-2 justify-center">
              {product.images.map((image, index) => (
                <button
                  key={index}
                  onClick={() => setSelectedImage(image)}
                  className={`border-2 rounded-md p-1 transition-all duration-300 ${
                    selectedImage === image ? "border-blue-500" : "border-gray-300"
                  }`}
                >
                  <Image
                    src={image}
                    alt={`${product.name} - Variant ${index + 1}`}
                    width={60}
                    height={60}
                    className="rounded-md object-cover"
                  />
                </button>
              ))}
            </div>
          </div>

          {/* Product Details */}
          <div>
            <h1 className="text-3xl font-bold text-[#1E3A5F]">
              {product.name}
              <span className="ml-4 text-2xl text-[#25aae1]">{product.price}</span>
            </h1>
            <p className="text-gray-500 mt-4">{product.description}</p>

            <div className="flex items-center space-x-2 mt-4">
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
              <span className="text-lg font-semibold">{quantity}</span>
              <button
                onClick={() => setQuantity((prev) => prev + 1)}
                className="px-4 py-2 border rounded-md hover:bg-gray-100"
              >
                +
              </button>
            </div>

            <div className="mt-6 flex space-x-4">
              <button className="px-6 py-3 bg-[#1E3A5F] text-white rounded-full hover:bg-[#25aae1]">
                Buy Now
              </button>
              <button className="px-6 py-3 text-lg font-medium text-black bg-white border border-black rounded-full hover:bg-[#16415F] hover:text-white transition-all">
                Add to Cart
              </button>
            </div>
          </div>
        </div>

        {/* Similar Products in Row */}
        <div className="mt-12">
          <h2 className="text-2xl font-bold mb-4">Other Similar Products</h2>
          <div className="flex space-x-6 overflow-x-auto">
            {products
              .filter((p) => p.id !== product.id)
              .map((similarProduct) => (
                <div
                  key={similarProduct.id}
                  className="border rounded-lg p-4 w-64 flex-shrink-0 text-center"
                >
                  <Image
                    src={similarProduct.images[0]}
                    alt={similarProduct.name}
                    width={150}
                    height={150}
                    className="object-cover rounded-md mx-auto"
                  />
                  <h3 className="text-md font-semibold mt-2">
                    {similarProduct.name}
                  </h3>
                  <p className="text-gray-500">{similarProduct.price}</p>
                  <button className="mt-4 px-4 py-2 bg-[#1E3A5F] text-white rounded-md hover:bg-[#25aae1]">
                    Add to Cart
                  </button>
                </div>
              ))}
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default SingleProductPage;
