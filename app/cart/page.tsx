'use client';

import { useDispatch, useSelector } from 'react-redux';
import { useRouter } from 'next/navigation';
import { RootState } from '@/lib/redux-store';
import { removeFromCart, updateQuantity } from '@/states/cartSlice';
import Header from '@/components/Header';
import Footer from '@/components/footer/Footer';
import { Trash2, ShoppingBag, ArrowRight, Minus, Plus } from 'lucide-react';
import Image from 'next/image';
import { AnimatePresence, motion } from 'framer-motion';

export default function CartPage() {
    const dispatch = useDispatch();
    const router = useRouter();
    const items = useSelector((state: RootState) => state.cart.items);
    console.log("product item",items)

    const total = items.reduce((sum, item) => sum + item.price * item.quantity, 0);
    const shipping = 10;
    const tax = total * 0.1;
    const grandTotal = total + shipping + tax;

    if (items.length === 0) {
        return (
            <div className="min-h-screen flex flex-col">
                <Header />
                <div className="flex-1 flex flex-col items-center justify-center bg-white text-center py-20">
                    <ShoppingBag className="w-20 h-20 text-gray-400 mb-6" />
                    <h2 className="text-2xl font-bold text-gray-800">Your cart is empty</h2>
                    <p className="text-gray-500 mt-2">Add items to see them here.</p>
                    <button
                        onClick={() => router.push('/')}
                        className="mt-6 px-6 py-3 bg-black text-white rounded-full hover:bg-black/80 transition"
                    >
                        Continue Shopping
                    </button>
                </div>
                <Footer />
            </div>
        );
    }

    return (
        <div className="min-h-screen flex flex-col bg-gray-50">
            <Header />
            <main className="flex-1 py-20 px-4 ">
                <div className="max-w-7xl mx-auto">
                    <motion.h1
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-3xl font-bold text-gray-900 mb-8 text-center"
                    >
                        Your Shopping Cart
                    </motion.h1>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 lg:gap-10 px-4 sm:px-6 md:px-10 max-w-7xl mx-auto">
                        {/* Cart Items */}
                        <div className="col-span-1 md:col-span-2 space-y-6">

                            <AnimatePresence>
                                {items.map((item, index) =>{
                                    
                                    return (
                                        <motion.div
                                            key={item.id}
                                            initial={{ opacity: 0, y: 20 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            exit={{ opacity: 0, x: -100 }}
                                            transition={{ delay: index * 0.05, type: "spring", stiffness: 100 }}
                                            className="bg-white p-4 sm:p-3 rounded-2xl shadow-md hover:shadow-2xl transition-shadow duration-500"
                                        >
                                            <div className="flex flex-col sm:flex-row gap-4 sm:gap-6">
                                                {/* Product Image */}
                                                <div className="w-full h-40 sm:w-36 sm:h-36 relative rounded-2xl overflow-hidden bg-gray-100 group">
                                                    <Image
                                                        src={item.image}
                                                        alt={item.name}
                                                        fill
                                                        className="object-cover group-hover:scale-110 transition-transform duration-500 ease-in-out"
                                                        sizes="(max-width: 768px) 100vw, 33vw"
                                                    />
                                                </div>

                                                {/* Info & Controls */}
                                                <div className="flex-1 w-full flex flex-col justify-between">
                                                    <div className="text-center sm:text-left">
                                                        <h2 className="text-lg sm:text-xl font-semibold text-gray-800 group-hover:text-indigo-600 transition-colors duration-300">
                                                            {item.name}
                                                        </h2>

                                                        {/* Quantity Controls */}
                                                        <div className="mt-4 flex justify-center sm:justify-start items-center bg-gray-100 rounded-full px-4 py-2 w-fit mx-auto sm:mx-0 animate-fadeIn">
                                                            <button
                                                                onClick={() => dispatch(updateQuantity({ id: item.id, quantity: Math.max(1, item.quantity - 1) }))}
                                                                aria-label="Decrease quantity"
                                                                className="p-2 bg-white rounded-full hover:bg-gray-200 active:scale-90 transition-transform duration-300"
                                                            >
                                                                <Minus className="w-5 h-5 text-gray-700" />
                                                            </button>
                                                            <span className="px-4 text-base font-medium">{item.quantity}</span>
                                                            <button
                                                                onClick={() => dispatch(updateQuantity({ id: item.id, quantity: item.quantity + 1 }))}
                                                                aria-label="Increase quantity"
                                                                className="p-2 bg-white rounded-full hover:bg-gray-200 active:scale-90 transition-transform duration-300"
                                                            >
                                                                <Plus className="w-5 h-5 text-gray-700" />
                                                            </button>
                                                        </div>
                                                    </div>

                                                    {/* Price & Remove */}
                                                    <div className="mt-4 flex justify-between items-center sm:justify-between sm:items-end gap-6">
                                                        <p className="text-lg font-bold text-gray-900 animate-fadeIn">
                                                            ${(item.price * item.quantity).toFixed(2)}
                                                        </p>
                                                        <button
                                                            onClick={() => dispatch(removeFromCart(item.id))}
                                                            className="text-red-500 hover:text-red-600 transition-colors duration-300"
                                                        >
                                                            <Trash2 className="w-6 h-6" />
                                                        </button>
                                                    </div>
                                                </div>
                                            </div>
                                        </motion.div>
                                    )
})}
                            </AnimatePresence>
                        </div>

                        {/* Order Summary */}
                        {/* Order Summary */}
                        <motion.div
                            initial={{ opacity: 0, x: 20 }}
                            animate={{ opacity: 1, x: 0 }}
                            className="bg-white p-6 rounded-xl shadow-md space-y-6 w-full md:w-full lg:w-full mx-auto md:mx-0"
                        >
                            <h2 className="text-2xl font-bold text-gray-900">Order Summary</h2>
                            <div className="space-y-3 text-gray-700">
                                <div className="flex justify-between">
                                    <span>Subtotal</span>
                                    <span>${total.toFixed(2)}</span>
                                </div>
                                <div className="flex justify-between">
                                    <span>Shipping</span>
                                    <span>${shipping.toFixed(2)}</span>
                                </div>
                                <div className="flex justify-between">
                                    <span>Tax</span>
                                    <span>${tax.toFixed(2)}</span>
                                </div>
                                <hr />
                                <div className="flex justify-between font-bold text-lg">
                                    <span>Total</span>
                                    <span>${grandTotal.toFixed(2)}</span>
                                </div>
                            </div>
                            <button
                                onClick={() => router.push('/checkout')}
                                className="w-full py-3 bg-black text-white rounded-full hover:bg-black/90 transition flex items-center justify-center gap-2"
                            >
                                <span>Proceed to Checkout</span>
                                <ArrowRight className="w-5 h-5" />
                            </button>
                        </motion.div>

                    </div>
                </div>
            </main>
            <Footer />
        </div>
    );
}
