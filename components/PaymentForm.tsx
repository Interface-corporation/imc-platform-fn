import { useState } from 'react';
import { PaymentFormData } from '@/types';
import { motion } from 'framer-motion';
import { CreditCard, Smartphone, GoalIcon as PaypalIcon } from 'lucide-react';

interface PaymentFormProps {
    onSubmit: (data: PaymentFormData) => void;
}

export default function PaymentForm({ onSubmit }: PaymentFormProps) {
    const [paymentMethod, setPaymentMethod] = useState<'mobile' | 'card' | 'paypal'>('card');
    const [formData, setFormData] = useState<PaymentFormData>({
        fullName: '',
        email: '',
        phone: '',
        address: '',
        city: '',
        country: '',
        paymentMethod: 'card',
    });

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        onSubmit({ ...formData, paymentMethod });
    };

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    const getPaymentMethodColor = (method: string) => {
        switch (method) {
            case 'card': return 'bg-amber-700';
            case 'mobile': return 'bg-yellow-500';
            case 'paypal': return 'bg-secondary';
            default: return 'bg-gray-500';
        }
    };

    return (
        <motion.form
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            onSubmit={handleSubmit}
            className="space-y-8 bg-white rounded-2xl shadow-xl p-8"
        >
            <div className="space-y-6">
                <motion.h2
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="text-2xl font-bold text-gray-800 border-b pb-4"
                >
                    Contact Information
                </motion.h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.2 }}
                    >
                        <label className="block text-sm font-medium text-gray-700 mb-2">Full Name</label>
                        <input
                            type="text"
                            name="fullName"
                            required
                            className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all duration-200"
                            onChange={handleInputChange}
                            placeholder="John Doe"
                        />
                    </motion.div>
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.3 }}
                    >
                        <label className="block text-sm font-medium text-gray-700 mb-2">Email</label>
                        <input
                            type="email"
                            name="email"
                            required
                            className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all duration-200"
                            onChange={handleInputChange}
                            placeholder="john@example.com"
                        />
                    </motion.div>
                </div>
            </div>

            <div className="space-y-6">
                <motion.h2
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="text-2xl font-bold text-gray-800 border-b pb-4"
                >
                    Shipping Address
                </motion.h2>
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4 }}
                    className="space-y-4"
                >
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">Address</label>
                        <input
                            type="text"
                            name="address"
                            required
                            className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all duration-200"
                            onChange={handleInputChange}
                            placeholder="123 Main St"
                        />
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2">City</label>
                            <input
                                type="text"
                                name="city"
                                required
                                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all duration-200"
                                onChange={handleInputChange}
                                placeholder="New York"
                            />
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2">Country</label>
                            <input
                                type="text"
                                name="country"
                                required
                                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all duration-200"
                                onChange={handleInputChange}
                                placeholder="United States"
                            />
                        </div>
                    </div>
                </motion.div>
            </div>

            <div className="space-y-6">
                <motion.h2
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="text-2xl font-bold text-gray-800 border-b pb-4"
                >
                    Payment Method
                </motion.h2>
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5 }}
                    className="grid grid-cols-1 md:grid-cols-3 gap-4"
                >
                    {[
                        { id: 'card', icon: CreditCard, label: 'Credit Card', color: 'creditCard' },
                        { id: 'mobile', icon: Smartphone, label: 'Mobile Money', color: 'mtnMomo' },
                        { id: 'paypal', icon: PaypalIcon, label: 'Pay Pal', color: 'secondary' },
                    ].map(({ id, icon: Icon, label, color }) => (
                        <motion.button
                            key={id}
                            type="button"
                            onClick={() => setPaymentMethod(id as any)}
                            whileHover={{ scale: 1.02 }}
                            whileTap={{ scale: 0.98 }}
                            className={`p-6 rounded-xl border-2 flex flex-col items-center justify-center space-y-3 transition-all ${paymentMethod === id
                                    ? `border-${color} bg-${color}/10`
                                    : 'border-gray-200 hover:border-gray-300'
                                }`}
                        >
                            <Icon className={`w-8 h-8 ${paymentMethod === id ? `text-${color}` : 'text-gray-500'}`} />
                            <span className={`text-sm font-medium ${paymentMethod === id ? `text-${color}` : 'text-gray-700'}`}>
                                {label}
                            </span>
                        </motion.button>
                    ))}
                </motion.div>

                {paymentMethod === 'card' && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        className="space-y-4"
                    >
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2">Card Number</label>
                            <input
                                type="text"
                                name="cardNumber"
                                placeholder="1234 5678 9012 3456"
                                required
                                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-amber-700/20 focus:border-amber-700 transition-all duration-200"
                                onChange={handleInputChange}
                            />
                        </div>
                        <div className="grid grid-cols-2 gap-4">
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-2">Expiry Date</label>
                                <input
                                    type="text"
                                    name="expiryDate"
                                    placeholder="MM/YY"
                                    required
                                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-amber-700/20 focus:border-amber-700 transition-all duration-200"
                                    onChange={handleInputChange}
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-2">CVV</label>
                                <input
                                    type="text"
                                    name="cvv"
                                    placeholder="123"
                                    required
                                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-amber-700/20 focus:border-amber-700 transition-all duration-200"
                                    onChange={handleInputChange}
                                />
                            </div>
                        </div>
                    </motion.div>
                )}

                {paymentMethod === 'mobile' && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                    >
                        <label className="block text-sm font-medium text-gray-700 mb-2">Mobile Number</label>
                        <input
                            type="tel"
                            name="mobileNumber"
                            required
                            className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-yellow-500/20 focus:border-yellow-500 transition-all duration-200"
                            onChange={handleInputChange}
                            placeholder="+1 234 567 8900"
                        />
                    </motion.div>
                )}
            </div>

            <motion.button
                type="submit"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className={`w-full py-4 px-6 rounded-xl font-medium text-white transition-colors ${getPaymentMethodColor(paymentMethod)}`}
            >
                Complete Payment
            </motion.button>
        </motion.form>
    );
}