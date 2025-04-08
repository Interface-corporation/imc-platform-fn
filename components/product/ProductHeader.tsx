"use client";

import { Heart, Share2, Sparkles } from "lucide-react";
import { Product } from "@/types/product";
import { ProductRating } from "./ProductRating";
import { motion } from "framer-motion";

interface ProductHeaderProps {
    product: Product;
    isWishlisted: boolean;
    onWishlistToggle: () => void;
}

export function ProductHeader({ product, isWishlisted, onWishlistToggle }: ProductHeaderProps) {
    return (
        <div className="space-y-4">
            <div className="flex items-start justify-between">
                <div className="space-y-1">
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        className={`inline-flex items-center px-3 py-1 rounded-full text-sm font-medium text-white
              ${product.type === 'rent'
                                ? 'bg-gradient-to-r from-[#25aae1] to-[#1e90ff]'
                                : 'bg-gradient-to-r from-[#1E3A5F] to-[#2c5282]'
                            }`}
                    >
                        <Sparkles className="w-3 h-3 mr-1" />
                        {product.type === 'rent' ? 'For Rent' : 'For Sale'}
                    </motion.div>

                    <motion.h1
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.2 }}
                        className="text-3xl font-bold text-gray-900"
                    >
                        {product.name}
                    </motion.h1>
                </div>

                <div className="flex space-x-2">
                    <motion.button
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.95 }}
                        onClick={onWishlistToggle}
                        className={`p-3 rounded-full backdrop-blur-md transition-all duration-300
              ${isWishlisted
                                ? 'bg-red-500/90 hover:bg-red-600/90'
                                : 'bg-white shadow-md hover:shadow-lg'
                            }`}
                    >
                        <Heart
                            className={`w-5 h-5 transition-colors ${isWishlisted ? "text-white" : "text-gray-700 hover:text-red-500"
                                }`}
                            fill={isWishlisted ? "white" : "none"}
                        />
                    </motion.button>

                    <motion.button
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.95 }}
                        className="p-3 rounded-full bg-white shadow-md hover:shadow-lg transition-all duration-300"
                    >
                        <Share2 className="w-5 h-5 text-gray-700" />
                    </motion.button>
                </div>
            </div>

            <div className="flex items-center justify-between">
                <div className="space-y-1">
                    <div className="flex items-baseline gap-3">
                        <span className="text-2xl font-bold bg-gradient-to-r from-[#1E3A5F] to-[#25aae1] bg-clip-text text-transparent">
                            ${product.price}
                        </span>
                        {product.originalPrice && (
                            <span className="text-lg text-gray-400 line-through">
                                {product.originalPrice}
                            </span>
                        )}
                    </div>
                    <ProductRating rating={product.rating} reviews={product.reviews} />
                </div>

                <div className="px-4 py-2 bg-green-50 rounded-lg">
                    <span className="text-green-600 font-medium">
                        {product.stock} in stock
                    </span>
                </div>
            </div>
        </div>
    );
}