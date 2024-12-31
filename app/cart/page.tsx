"use client";
import React, { useState } from "react";
import Image from "next/image";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Link from "next/link";

// Define the types for cart items and recently viewed items
interface CartItem {
    id: number;
    name: string;
    description: string;
    price: number;
    quantity: number;
    imageUrl: string;
    stock: number;
}

interface RecentlyViewedItem {
    id: number;
    name: string;
    stock: number;
    imageUrl: string;
}

const ShoppingCart: React.FC = () => {
    const [cartItems, setCartItems] = useState<CartItem[]>([
        {
            id: 1,
            name: "Apple Watch Series 6",
            description:
                "The stainless steel case is durable and polished to a shiny, mirror-like finish. The Sport Band is made from a durable yet surprisingly soft high-performance fluoroelastomer.",
            price: 499.0,
            quantity: 2,
            imageUrl: "/images/prod1.jpg",
            stock: 30,
        },
        {
            id: 2,
            name: "4K Ultra HD Monitor",
            description:
                "10-Core CPU, 16-Core GPU, 16GB Unified Memory, 512GB SSD Storage. Three Thunderbolt 4 ports.",
            price: 1999.0,
            quantity: 1,
            imageUrl: "/images/prod2.jpg",
            stock: 5,
        },
        {
            id: 3,
            name: "MacBook Pro",
            description:
                "10-Core CPU, 16-Core GPU, 16GB Unified Memory, 512GB SSD Storage. Three Thunderbolt 4 ports.",
            price: 1999.0,
            quantity: 1,
            imageUrl: "/images/prod3.jpg",
            stock: 8,
        },
    ]);

    const [recentlyViewed] = useState<RecentlyViewedItem[]>([
        { id: 1, name: "Headphones", stock: 3, imageUrl: "/images/prod1.jpg" },
        { id: 2, name: "Leather Bag", stock: 3, imageUrl: "/images/prod2.jpg" },
        { id: 3, name: "Vintage Camera", stock: 5, imageUrl: "/images/prod3.jpg" },
        { id: 4, name: "Running Shoes", stock: 5, imageUrl: "/images/prod4.jpg" },
    ]);

    // Calculate the total price of items in the cart
    const calculateTotal = (): number => {
        return cartItems.reduce(
            (total, item) => total + item.price * item.quantity,
            0
        );
    };

    const handleUpdateQuantity = (id: number, newQuantity: number): void => {
        setCartItems((prevItems) =>
            prevItems.map((item) =>
                item.id === id ? { ...item, quantity: newQuantity } : item
            )
        );
    };

    const handleDelete = (id: number): void => {
        setCartItems((prevItems) => prevItems.filter((item) => item.id !== id));
    };

    return (
        <>
            <Header />
            <div className="mx-auto px-4 flex flex-col-2 gap-8 mt-20 lg:flex-row container">
    {/* Shopping Cart Section */}
    <div className="w-full lg:w-2/3 p-6 bg-gray-50 rounded-lg shadow-md relative">
        {/* Clear Cart Button */}
        <button
            className="absolute top-0 right-0 mt-4 mr-4 w-1/4 sm:w-1/2 px-6 py-2 bg-red-500 text-white rounded-md hover:bg-red-600 transition"
            onClick={() => setCartItems([])}
        >
            Clear Cart
        </button>
        
        {/* Shopping Cart Title Row */}
        <div className="flex justify-between shadow-md p-4 mt-8 items-center mb-6">
            <h1 className="text-2xl font-bold text-gray-800">Shopping Cart</h1>
            <div className="text-xl font-semibold text-gray-800">
                {/* Total Price */}
                <span className="mr-2">Price</span>
                
            </div>
        </div>

        {/* Cart Items */}
        <div className="space-y-6">
            {cartItems.map((item) => (
                <div
                    key={item.id}
                    className="flex flex-col sm:flex-row items-start sm:items-center bg-white rounded-lg shadow-md p-4 hover:shadow-lg transition"
                >
                    <Image
                        src={item.imageUrl}
                        alt={item.name}
                        width={96}
                        height={96}
                        className="w-24 h-24 rounded-md object-cover"
                    />
                    <div className="flex-1 px-4">
                        <h3 className="text-lg font-semibold text-gray-800">{item.name}</h3>
                        <p className="text-gray-600 text-sm mt-2">{item.description}</p>
                        <p className="text-green-600 text-sm font-medium mt-2">In Stock</p>
                        <div className="flex items-center space-x-4 mt-4">
                            <span className="font-semibold text-gray-800">Qty:</span>
                            <input
                                type="number"
                                min={1}
                                max={item.stock}
                                value={item.quantity}
                                onChange={(e) =>
                                    handleUpdateQuantity(item.id, Number(e.target.value))
                                }
                                className="w-16 border rounded-md text-center focus:outline-none focus:ring-2 focus:ring-blue-500"
                            />
                            <button
                                className="px-4 py-1 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition"
                                onClick={() =>
                                    handleUpdateQuantity(item.id, item.quantity)
                                }
                            >
                                Update
                            </button>
                            <button
                                className="px-4 py-1 bg-red-500 text-white rounded-md hover:bg-red-600 transition"
                                onClick={() => handleDelete(item.id)}
                            >
                                Delete
                            </button>
                        </div>
                    </div>
                    <div className="text-right">
                        <p className="text-xl font-bold text-gray-800">
                            ${(item.price * item.quantity).toFixed(2)}
                        </p>
                    </div>
                </div>
            ))}
        </div>
    </div>

    {/* Recently Viewed Section */}
    <div className="w-full lg:w-1/3 bg-gray-50 rounded-lg shadow-md p-6 h-[300px] overflow-y-auto">
        <div className="text-center mb-4 bg-blue-800">
            <Link href="/">
                <h2 className="text-black bg-blue-600 hover:text-blue-600 transition">
                    Proceed to checkout
                </h2>
            </Link>
        </div>
        <h2 className="text-xl text-center font-semibold mb-4 text-gray-800">Recently Viewed</h2>
        <div className="space-y-2">
            {recentlyViewed.map((item) => (
                <div
                    key={item.id}
                    className="flex items-center space-x-4 bg-white p-4 rounded-lg shadow hover:shadow-lg transition"
                >
                    <Image
                        src={item.imageUrl}
                        alt={item.name}
                        width={64}
                        height={64}
                        className="w-16 h-16 rounded-md object-cover"
                    />
                    <div className="flex-1">
                        <h4 className="text-sm font-medium text-gray-800">{item.name}</h4>
                        <p className="text-gray-600 text-xs mt-1">
                            Only {item.stock} left in stock
                        </p>
                        <button className="px-4 py-2 bg-blue-500 text-white text-sm rounded-md border-2 border-blue-500 hover:bg-blue-600 transition">
                            Add to Cart
                        </button>
                    </div>
                </div>
            ))}
        </div>
    </div>
</div>


            <Footer />
        </>
    );
};

export default ShoppingCart;
