"use client";

import Image from "next/image";
import Link from "next/link";
import { ShoppingCart, CheckCircle } from "lucide-react";
import { useState } from "react";
import { Product } from "@/types/product";
import { ProductBadge } from "./ProductBadge";
import { ProductPrice } from "./ProductPrice";
import { ProductRating } from "./ProductRating";
import { motion, AnimatePresence } from "framer-motion";
import { WishlistButton } from "./WishlistButton";
import { useDispatch } from "react-redux";
import { addToCart } from "@/states/cartSlice";

interface ProductCardProps {
    product: Product;
}

export function ProductCard({ product }: ProductCardProps) {
    const [isWishlisted, setIsWishlisted] = useState(false);
    const [isHovered, setIsHovered] = useState(false);
    const [showBanner, setShowBanner] = useState(false);
    const dispatch = useDispatch();


    const handleAddToCart = (e: React.MouseEvent) => {
        e.preventDefault();
        e.stopPropagation();
        dispatch(addToCart({
            id: product.id.toString(),
            name: product.name,
            price: parseFloat(product.price),
            originalPrice: product.originalPrice ? parseFloat(product.originalPrice) : undefined,
            quantity: 1,
            image: product?.images[0] ,
            type: product.type,
        }));

        setShowBanner(true);
        setTimeout(() => setShowBanner(false), 5000);
    };

    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            whileHover={{ y: -4 }}
            className="group relative"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            <Link href={`/product/${product.id}`} className="block">
                <div className="bg-white rounded-xl shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden max-w-sm mx-auto relative">

                    {/* ✅ Custom Banner */}
                    <AnimatePresence>
                        {showBanner && (
                            <motion.div
                                initial={{ opacity: 0, y: -20 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: -20 }}
                                className="absolute top-2 left-1/2 transform -translate-x-1/2 bg-green-100 text-green-800 border border-green-300 px-4 py-2 rounded-full shadow-md flex items-center gap-2 z-10"
                            >
                                <CheckCircle className="w-4 h-4" />
                                <span>Added to cart!</span>
                            </motion.div>
                        )}
                    </AnimatePresence>

                    {/* Image */}
                    <div className="relative h-48 sm:h-56">
                        <ProductBadge type={product.type} />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                        <Image
                            src={product.images[0]}
                            alt={product.name}
                            fill
                            sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
                            className="object-cover transform transition-transform duration-500 group-hover:scale-110"
                            priority
                        />
                        <WishlistButton isWishlisted={isWishlisted} onClick={() => setIsWishlisted(!isWishlisted)} />
                    </div>

                    {/* Content */}
                    <div className="p-3 sm:p-4">
                        <h3 className="text-base font-semibold text-gray-900 group-hover:text-[#25aae1] transition-colors duration-300 line-clamp-1 mb-1">
                            {product.name}
                        </h3>
                        <p className="text-xs text-gray-600 line-clamp-2 group-hover:text-gray-700 transition-colors duration-300 min-h-[2rem]">
                            {product.description.slice(0, 80)}...
                        </p>

                        <div className="mt-2 space-y-2">
                            <div className="flex flex-col items-start justify-between">
                                <ProductRating rating={product.rating} reviews={product.reviews} />
                                <ProductPrice price={product.price} originalPrice={product.originalPrice} />
                            </div>

                            <motion.button
                                whileHover={{ scale: 1.02 }}
                                whileTap={{ scale: 0.98 }}
                                onClick={handleAddToCart}
                                className="w-full bg-gradient-to-r from-[#1E3A5F] to-[#2c5282] text-white px-4 py-2 rounded-lg
                                    hover:shadow-lg hover:from-[#1e90ff] hover:to-[#25aae1] transform transition-all duration-300
                                    flex items-center justify-center gap-2 font-medium text-sm"
                            >
                                <motion.div
                                    animate={{ rotate: isHovered ? 12 : 0 }}
                                    transition={{ duration: 0.3 }}
                                >
                                    <ShoppingCart className="w-4 h-4" />
                                </motion.div>
                                <span>Add to Cart</span>
                            </motion.button>
                        </div>
                    </div>
                </div>
            </Link>
        </motion.div>
    );
}
