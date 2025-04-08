'use client';

import { useCart } from '@/context/CartContext';
import PaymentForm from '@/components/PaymentForm';
import PaymentSummary from '@/components/PaymentSummary';
import { useRouter } from 'next/navigation';
import Header from '@/components/Header';
import Footer from '@/components/footer/Footer';

export default function CheckoutPage() {
    const { items: cartItems, clearCart } = useCart();
    const router = useRouter();

    const handlePaymentSubmit = async (formData: any) => {
        try {
            // Here you would typically:
            // 1. Validate the form data
            // 2. Send payment details to your payment processor
            // 3. Create order in your database
            // 4. Clear the cart
            console.log('Payment submitted:', formData);

            // For now, we'll just simulate a successful payment
            clearCart();
            router.push('/Products'); // You'll need to create this page
            console.log("product payed susssfully");
            
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