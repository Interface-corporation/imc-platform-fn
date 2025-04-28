'use client';

export const dynamic = 'force-dynamic';

import { useSelector, useDispatch } from 'react-redux';
import { clearCart } from '@/states/cartSlice';
import { RootState } from '@/lib/redux-store';
import PaymentForm from '@/components/PaymentForm';
import PaymentSummary from '@/components/PaymentSummary';
import { useRouter, useSearchParams } from 'next/navigation'; // 👈 Added useSearchParams
import Header from '@/components/Header';
import Footer from '@/components/footer/Footer';
import { PaymentFormData } from '@/types';
import { products } from '@/data/products'; // 👈 Import your product data to find product by id

export default function CheckoutPage() {
    const cartItems = useSelector((state: RootState) => state.cart.items);
    const dispatch = useDispatch();
    const router = useRouter();
    const searchParams = useSearchParams(); // 👈 Read query params

    // Detect if it's a 'Buy Now' flow
    const isBuyNow = searchParams.get('buyNow') === 'true';
    const productId = searchParams.get('productId');

    let itemsToCheckout = cartItems; // default: cart items

    if (isBuyNow && productId) {
        const singleProduct = products.find(p => p.id === Number(productId));
        if (singleProduct) {
            itemsToCheckout = [
                {
                    id: singleProduct.id.toString(),
                    name: singleProduct.name,
                    price: parseFloat(singleProduct.price),
                    quantity: 1,
                    image: singleProduct.images[0],
                    type: singleProduct.type,
                }
            ];
        }
    }

    const handlePaymentSubmit = async (formData: PaymentFormData) => {
        try {
            console.log('Payment submitted:', formData);

            if (!isBuyNow) {
                dispatch(clearCart()); // Clear cart only if not a direct buy now
            }
            router.push('/Products');
            console.log("product paid successfully");
        } catch (error) {
            console.error('Payment failed:', error);
        }
    };

    if (itemsToCheckout.length === 0) {
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
                        <PaymentSummary items={itemsToCheckout} />
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
}
