"use client";

import React, { useState } from "react";
import { Upload } from "lucide-react";
import { ProductModal } from "../Modals/ProductModal";
import { ActionMenu } from "../Menu/ActionMenu";
import { useFetchProductsQuery } from "@/states/productSlice";
import { ClipLoader } from "react-spinners";

interface Product {
    id: number;
    name: string;
    price: number;
    description: string;
    ratings?: number;
    category: string;
    productionType: string;
    location: string;
    seller: string;
    stock: number;
    images: File[];
}


export const ProductContent = () => {
    const { data: products = [], isLoading, isError } = useFetchProductsQuery({});
    const [isModalOpen, setIsModalOpen] = useState(false);
    // const [editingProduct, setEditingProduct] = useState<Product | null>(null);
    const [currentPage] = useState(1);

    const handleSubmit = (formData: Omit<Product, 'id'>) => {
        // if (editingProduct) {
        //     setProducts(products.map(p => p.id === editingProduct.id ? { ...formData, id: p.id } : p));
        // } else {
        //     setProducts([...products, { ...formData, id: products.length + 1 }]);
        // }
        setIsModalOpen(false);
        // setEditingProduct(null);
    };

    const handleEdit = (product: Product) => {
        // setEditingProduct(product);
        setIsModalOpen(true);
    };
    console.log("Products", products);

    const handleDelete = (id: number) => {
        // setProducts(products.filter(p => p.id !== id));
    };
    if (isLoading) {
        return (
            <div className="flex justify-center items-center h-96">
                <ClipLoader size={50} color="#1E3A5F" />
            </div>
        );
    }
    if (isError) {
        return (
            <div className="text-center text-red-500">
                Failed to load products. Please try again later.
            </div>
        );
    }

    return (
        <section className="container px-4 mx-auto">
            <div className="sm:flex sm:items-center sm:justify-between">
                <h2 className="text-lg font-medium text-gray-800">Products</h2>
                <div className="flex items-center mt-4 gap-x-3">
                    <button
                        onClick={() => setIsModalOpen(true)}
                        className="flex items-center justify-center px-5 py-2 text-sm tracking-wide text-white bg-[#1E3A5F] rounded-lg gap-x-2 hover:bg-[#183964]"
                    >
                        <Upload className="w-5 h-5" />
                        <span>Add Product</span>
                    </button>
                </div>
            </div>

            <div className="flex flex-col mt-6">
                <div className="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
                    <div className="inline-block min-w-full py-2 align-middle md:px-6 lg:px-8">
                        <div className="overflow-hidden border border-gray-200 md:rounded-lg">
                            <table className="min-w-full divide-y divide-gray-200">
                                <thead className="bg-gray-50">
                                    <tr>
                                        <th className="py-3.5 px-4 text-sm font-normal text-left text-gray-500">
                                            <div className="flex items-center gap-x-3">
                                                <input type="checkbox" className="text-blue-500 border-gray-300 rounded" />
                                                <span>Name</span>
                                            </div>
                                        </th>
                                        <th className="px-12 py-3.5 text-sm font-normal text-left text-gray-500">Price</th>
                                        <th className="px-4 py-3.5 text-sm font-normal text-left text-gray-500">Stock</th>
                                        <th className="px-4 py-3.5 text-sm font-normal text-left text-gray-500">Category</th>
                                        <th className="relative py-3.5 px-4">
                                            <span className="sr-only">Actions</span>
                                        </th>
                                    </tr>
                                </thead>
                                <tbody className="bg-white divide-y divide-gray-200">
                                    {products?.responseObject?.map((product: any) => (
                                        <tr key={product.id}>
                                            <td className="px-4 py-4 text-sm font-medium text-gray-700 whitespace-nowrap">
                                                <div className="inline-flex items-center gap-x-3">
                                                    <input type="checkbox" className="text-blue-500 border-gray-300 rounded" />
                                                    <div className="flex items-center gap-x-2">
                                                        <div className="flex items-center justify-center w-8 h-8 bg-gray-200 rounded-full overflow-hidden">
                                                            <img src={product.images[0]?.url} alt={product.name} className="w-full h-full object-cover" />
                                                        </div>
                                                        <div>
                                                            <h2 className="font-normal text-gray-800">{product.name}</h2>
                                                        </div>
                                                    </div>
                                                </div>
                                            </td>
                                            <td className="px-12 py-4 text-sm font-normal text-gray-700 whitespace-nowrap">
                                                ${product.price}
                                            </td>
                                            <td className="px-4 py-4 text-sm text-gray-500 whitespace-nowrap">{product.stock}</td>
                                            <td className="px-4 py-4 text-sm text-gray-500 whitespace-nowrap">{product.category}</td>
                                            <td className="px-4 py-4 text-sm whitespace-nowrap">
                                                <ActionMenu
                                                    onEdit={() => handleEdit(product)}
                                                    onDelete={() => handleDelete(product.id)}
                                                />
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>

            <ProductModal
                isOpen={isModalOpen}
                onClose={() => {
                    setIsModalOpen(false);
                    // setEditingProduct(null);
                }}
                onSubmit={handleSubmit}
            />
        </section>
    );
};