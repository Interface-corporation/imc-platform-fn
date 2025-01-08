import { apiSlice } from "./apiSlice";

export const productApiSlice = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        fetchProducts: builder.query({
            query: () => ({
                url: "/products",
                method: "GET",
                // credentials: "include",
            })
        }),
        addProduct: builder.mutation({
            query: (newProduct) => ({
                url: "/products",
                method: "POST",
                body: newProduct,
                credentials: "include"
            }),
        }),
    })
})


export const { useFetchProductsQuery, useAddProductMutation } = productApiSlice;