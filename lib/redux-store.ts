// lib/redux-store.ts
import { configureStore } from "@reduxjs/toolkit";
import { apiSlice } from "@/states/apiSlice";
import cartReducer from "@/states/cartSlice";

// 🛑 Helper: load cart from localStorage
const loadCartState = () => {
  try {
    if (typeof window !== "undefined") {
      const serializedState = localStorage.getItem("cart");
      if (serializedState === null) return undefined;
      return JSON.parse(serializedState);
    }
  } catch (e) {
    console.warn("Could not load cart from localStorage", e);
    return undefined;
  }
};

// 🛑 Helper: save cart to localStorage
const saveCartState = (cartState: RootState["cart"]) => {
  // 👈 properly typed
  try {
    if (typeof window !== "undefined") {
      const serializedState = JSON.stringify(cartState);
      localStorage.setItem("cart", serializedState);
    }
  } catch (e) {
    console.warn("Could not save cart to localStorage", e);
  }
};

// 🟣 Load persisted cart if any
const persistedCartState = loadCartState();

// 🟠 Create store
export const store = configureStore({
  reducer: {
    [apiSlice.reducerPath]: apiSlice.reducer,
    cart: cartReducer,
  },
  preloadedState: {
    cart: persistedCartState,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(apiSlice.middleware),
});

// 🟡 Subscribe to store changes to save cart to localStorage
store.subscribe(() => {
  const state = store.getState();
  saveCartState(state.cart); // 👈 save properly typed cart
});

// ✅ Types
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
