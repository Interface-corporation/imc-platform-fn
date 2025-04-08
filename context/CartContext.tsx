'use client';

import { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { Product } from '@/types/product';

interface CartItem extends Product {
    quantity: number;
    selectedColor?: string;
    
}

interface CartContextType {
    items: CartItem[];
    addToCart: (product: Product, quantity: number, selectedColor?: string) => void;
    removeFromCart: (productId: number) => void;
    updateQuantity: (productId: number, quantity: number) => void;
    clearCart: () => void;
    totalItems: number;
    totalAmount: number;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export function CartProvider({ children }: { children: ReactNode }) {
    const [items, setItems] = useState<CartItem[]>([]);

    // Calculate totals
    const totalItems = items.reduce((sum, item) => sum + item.quantity, 0);
    const totalAmount = items.reduce((sum, item) => sum + (Number(item.price) * item.quantity), 0);

    const addToCart = (product: Product, quantity: number, selectedColor?: string) => {
        setItems(currentItems => {
            const existingItem = currentItems.find(
                item => item.id === product.id && item.selectedColor === selectedColor
            );

            if (existingItem) {
                return currentItems.map(item =>
                    item.id === product.id && item.selectedColor === selectedColor
                        ? { ...item, quantity: item.quantity + quantity }
                        : item
                );
            }

            return [...currentItems, { ...product, quantity, selectedColor }];
        });
    };

    const removeFromCart = (productId: number) => {
        setItems(currentItems => currentItems.filter(item => item.id !== productId));
    };

    const updateQuantity = (productId: number, quantity: number) => {
        setItems(currentItems =>
            currentItems.map(item =>
                item.id === productId ? { ...item, quantity } : item
            )
        );
    };

    const clearCart = () => {
        setItems([]);
    };

    return (
        <CartContext.Provider value={{
            items,
            addToCart,
            removeFromCart,
            updateQuantity,
            clearCart,
            totalItems,
            totalAmount,
        }}>
            {children}
        </CartContext.Provider>
    );
}

export function useCart() {
    const context = useContext(CartContext);
    if (context === undefined) {
        throw new Error('useCart must be used within a CartProvider');
    }
    return context;
}