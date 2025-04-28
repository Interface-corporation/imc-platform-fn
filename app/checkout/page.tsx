'use client';

import { useSelector, useDispatch } from 'react-redux';
import { clearCart } from '@/states/cartSlice';
import { RootState } from '@/lib/redux-store';
import PaymentForm from '@/components/PaymentForm';
import PaymentSummary from '@/components/PaymentSummary';
import { useRouter } from 'next/navigation';
import Header from '@/components/Header';
import Footer from '@/components/footer/Footer';
import { PaymentFormData } from '@/types';

export default function CheckoutPage() {
    // Get cart items from Redux store instead of context
    const cartItems = useSelector((state: RootState) => state.cart.items);
    const dispatch = useDispatch();
    const router = useRouter();

    const handlePaymentSubmit = async (formData: PaymentFormData) => {
        try {
            // Here you would typically:
            // 1. Validate the form data
            // 2. Send payment details to your payment processor
            // 3. Create order in your database
            // 4. Clear the cart
            console.log('Payment submitted:', formData);

            // For now, we'll just simulate a successful payment
            dispatch(clearCart()); // Use Redux action to clear cart
            router.push('/Products'); // Redirect after successful payment
            console.log("product paid successfully");

        } catch (error) {
            console.error('Payment failed:', error);
        }
    };

    if (cartItems.length === 0) {
        return (
            <div className="min-h-screen bg-gray-50 flex items-center justify-center">
                <div className="text-center">
                    <h1 className="text-2xl font-bold text-gray-900 mb-4">Your cart is empty</h1>
                    <button
                        onClick={() => router.push('/')}
                        className="text-primary hover:text-primary/80"
                    >
                        Continue Shopping
                    </button>
                </div>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-gray-50">
            <Header />
            <div className="max-w-7xl mx-auto px-4 py-8">
                <h1 className="text-3xl font-bold text-gray-900 mb-8">Checkout</h1>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                    <div className="order-2 lg:order-1">
                        <PaymentForm onSubmit={handlePaymentSubmit} />
                    </div>

                    <div className="order-1 lg:order-2">
                        <PaymentSummary items={cartItems} />
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
} 
