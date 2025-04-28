"use client";

import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";

import { products } from "@/data/products";
import { Product } from "@/types/product";
import { ImageGallery } from "@/components/product/ImageGallery";
import { ColorSelector } from "@/components/product/ColorSeclector";
import { QuantitySelector } from "@/components/product/QuantitySelector";
import { ProductActions } from "@/components/product/ProductActions";
import { ProductTabs } from "@/components/product/ProductTabs";
import { SimilarProducts } from "@/components/product/SimilarProducts";
import { ProductHeader } from "@/components/product/ProductHeader";
import { addToCart } from "@/states/cartSlice"; // Assuming your action is here

export default function SingleProductPage({ params }: { params: { id: string } }) {
  const [product, setProduct] = useState<Product | null>(null);
  const [selectedColor, setSelectedColor] = useState<string>("");
  const [quantity, setQuantity] = useState<number>(1);
  const [isWishlisted, setIsWishlisted] = useState(false);

  const dispatch = useDispatch();
  const router = useRouter();

  useEffect(() => {
    if (params.id) {
      const foundProduct = products.find((p) => p.id === Number(params.id));
      if (foundProduct) {
        setProduct(foundProduct);
        setSelectedColor(foundProduct.colors[0]);
      }
    }
  }, [params.id]);

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="text-center space-y-4">
          <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-[#25aae1] mx-auto"></div>
          <p className="text-gray-600">Loading product details...</p>
        </div>
      </div>
    );
  }

  const handleAddToCart = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    dispatch(addToCart({
      id: product.id.toString(),
      name: product.name,
      price: parseFloat(product.price),
      originalPrice: product.originalPrice ? parseFloat(product.originalPrice) : undefined,
      quantity: 1,
      image: product?.images[0],
      type: product.type,
    }));

    // setShowBanner(true);
    // setTimeout(() => setShowBanner(false), 5000);
  };


  const handleBuyNow = () => {
    if (product) {
      router.push(`/checkout?buyNow=true&productId=${product.id}`);
    }
  };
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      <main className="max-w-7xl mx-auto px-4 py-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="bg-white rounded-xl shadow-lg p-8"
        >
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Left Side - Image Gallery */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2, duration: 0.5 }}
            >
              <ImageGallery images={product.images} productName={product.name} />
            </motion.div>

            {/* Right Side - Product Info */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              className="space-y-8"
            >
              <ProductHeader
                product={product}
                isWishlisted={isWishlisted}
                onWishlistToggle={() => setIsWishlisted(!isWishlisted)}
              />

              <div className="space-y-6">
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4, duration: 0.5 }}
                >
                  <ColorSelector
                    colors={product.colors}
                    selectedColor={selectedColor}
                    onColorSelect={setSelectedColor}
                  />
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5, duration: 0.5 }}
                >
                  <QuantitySelector
                    quantity={quantity}
                    onQuantityChange={setQuantity}
                  />
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.6, duration: 0.5 }}
                >
                  
<ProductActions 
  product={product}
  type="cart"
  onAddToCart={handleAddToCart}
  onBuyNow={handleBuyNow}
/>
                </motion.div>
              </div>

              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.7, duration: 0.5 }}
              >
                <ProductTabs
                  description={product.description}
                  features={product.features}
                  specifications={product.specifications}
                />
              </motion.div>
            </motion.div>
          </div>
        </motion.div>

        {/* Similar Products */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.5 }}
          className="mt-12"
        >
          <SimilarProducts
            currentProductId={product.id}
            products={products}
          />
        </motion.div>
      </main>
    </div>
  );
}
