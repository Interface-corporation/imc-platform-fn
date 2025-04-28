import { CartItem } from '@/states/cartSlice';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { ShoppingBag, Package } from 'lucide-react';

interface PaymentSummaryProps {
    items: CartItem[];
}

export default function PaymentSummary({ items }: PaymentSummaryProps) {
    const subtotal = items.reduce((acc, item) => acc + (Number(item.price) * item.quantity), 0);
    const shipping = 10; // Fixed shipping cost
    const tax = subtotal * 0.1; // 10% tax
    const total = subtotal + shipping + tax;

    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="bg-white rounded-2xl shadow-xl p-6 h-full"
        >
            <div className="flex items-center justify-between mb-8">
                <h2 className="text-2xl font-bold text-gray-800">Order Summary</h2>
                <ShoppingBag className="w-6 h-6 text-primary" />
            </div>

            <div className="space-y-6 mb-8">
                {items.map((item, index) => (
                    <motion.div
                        key={item.id}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.1 }}
                        className="flex items-center space-x-4 bg-gray-50 p-4 rounded-xl"
                    >
                        <div className="relative w-20 h-20 rounded-lg overflow-hidden flex-shrink-0">
                          <Image
  src={Array.isArray(item.image) ? item.image[0] : item.image}
  alt={item.name}
  fill
  className="object-cover"
/>
                        </div>
                        <div className="flex-1 min-w-0">
                            <h3 className="text-sm  text-gray-800 truncate font-bold">{item.name}</h3>
                            <p className="text-sm text-gray-500">Qty: {item.quantity}</p>
                            <p className="text-sm font-medium text-primary mt-1">
                                  ${(Number(item.price) * Number(item.quantity)).toFixed(2)}
                            </p>
                        </div>
                    </motion.div>
                ))}
            </div>

            <div className="border-t border-gray-200 pt-6 space-y-4">
                <div className="flex justify-between text-sm">
                    <span className="text-gray-600">Subtotal</span>
                    <span className="font-medium">${subtotal.toFixed(2)}</span>
                </div>
                <div className="flex justify-between text-sm">
                    <span className="text-gray-600">Shipping</span>
                    <span className="font-medium">${shipping.toFixed(2)}</span>
                </div>
                <div className="flex justify-between text-sm">
                    <span className="text-gray-600">Tax (10%)</span>
                    <span className="font-medium">${tax.toFixed(2)}</span>
                </div>
                <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5 }}
                    className="flex justify-between text-lg font-bold pt-4 border-t"
                >
                    <span>Total</span>
                    <span className="text-primary">${total.toFixed(2)}</span>
                </motion.div>
            </div>

            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.6 }}
                className="mt-8 p-4 bg-gray-50 rounded-xl flex items-center space-x-3"
            >
                <Package className="w-5 h-5 text-primary" />
                <p className="text-sm text-gray-600">
                    Estimated delivery: <span className="font-medium">3-5 business days</span>
                </p>
            </motion.div>
        </motion.div>
    );
}