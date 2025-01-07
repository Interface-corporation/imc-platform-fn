"use client";

import React, { useState, useCallback } from "react";
import { MoreVertical, Upload, ChevronLeft, ChevronRight, X, Pencil, Trash2 } from "lucide-react";
import { useDropzone } from "react-dropzone";

interface ProductModalProps {
    isOpen: boolean;
    onClose: () => void;
    onSubmit: (formData: any) => void;
    initialData?: {
        name: string;
        price: string;
        stock: string;
        category: string;
        image: File | null;
    } | null;
}

const ProductModal: React.FC<ProductModalProps> = ({ isOpen, onClose, onSubmit, initialData = null }) => {
    const [formData, setFormData] = useState(initialData || {
        name: "",
        price: "",
        stock: "",
        category: "",
        image: null
    });

    const onDrop = useCallback((acceptedFiles: File[]) => {
        setFormData(prev => ({ ...prev, image: acceptedFiles[0] }));
    }, []);

    const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop });

    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
            <div className="bg-white p-6 rounded-lg w-96">
                <div className="flex justify-between items-center mb-4">
                    <h2 className="text-xl font-bold">{initialData ? 'Edit' : 'Add'} Product</h2>
                    <button onClick={onClose}><X className="w-6 h-6" /></button>
                </div>

                <div {...getRootProps()} className="border-2 border-dashed border-gray-300 rounded-lg p-6 mb-4 text-center">
                    <input {...getInputProps()} />
                    {formData.image ? (
                        <div>
                            <p>{formData.image.name}</p>
                            <button onClick={() => setFormData(prev => ({ ...prev, image: null }))}>Remove</button>
                        </div>
                    ) : (
                        <p>{isDragActive ? "Drop the image here" : "Drag & drop product image here"}</p>
                    )}
                </div>

                <input
                    type="text"
                    placeholder="Name"
                    value={formData.name}
                    onChange={e => setFormData({ ...formData, name: e.target.value })}
                    className="block w-full mb-3 p-2 border rounded"
                />
                <input
                    type="number"
                    placeholder="Price"
                    value={formData.price}
                    onChange={e => setFormData({ ...formData, price: e.target.value })}
                    className="block w-full mb-3 p-2 border rounded"
                />
                <input
                    type="number"
                    placeholder="Stock"
                    value={formData.stock}
                    onChange={e => setFormData({ ...formData, stock: e.target.value })}
                    className="block w-full mb-3 p-2 border rounded"
                />
                <input
                    type="text"
                    placeholder="Category"
                    value={formData.category}
                    onChange={e => setFormData({ ...formData, category: e.target.value })}
                    className="block w-full mb-3 p-2 border rounded"
                />
                <div className="flex gap-2">
                    <button
                        onClick={() => onSubmit(formData)}
                        className="px-4 py-2 bg-[#1E3A5F] text-white rounded-lg hover:bg-[#183964]"
                    >
                        {initialData ? 'Update' : 'Save'}
                    </button>
                    <button
                        onClick={onClose}
                        className="px-4 py-2 bg-gray-300 text-gray-700 rounded-lg"
                    >
                        Cancel
                    </button>
                </div>
            </div>
        </div>
    );
};

interface ActionMenuProps {
    onEdit: () => void;
    onDelete: () => void;
}

const ActionMenu: React.FC<ActionMenuProps> = ({ onEdit, onDelete }) => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="relative">
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="px-1 py-1 text-gray-500 transition-colors duration-200 rounded-lg hover:bg-gray-100"
            >
                <MoreVertical className="w-6 h-6" />
            </button>

            {isOpen && (
                <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg z-10 border">
                    <button
                        onClick={() => {
                            onEdit();
                            setIsOpen(false);
                        }}
                        className="flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 w-full"
                    >
                        <Pencil className="w-4 h-4 mr-2" /> Edit
                    </button>
                    <button
                        onClick={() => {
                            onDelete();
                            setIsOpen(false);
                        }}
                        className="flex items-center px-4 py-2 text-sm text-red-600 hover:bg-gray-100 w-full"
                    >
                        <Trash2 className="w-4 h-4 mr-2" /> Delete
                    </button>
                </div>
            )}
        </div>
    );
};

export const ProductContent = () => {
    const [products, setProducts] = useState([
        { id: 1, name: "Laptop", price: 1000, stock: 10, category: "Electronics" },
        { id: 2, name: "Shoes", price: 50, stock: 30, category: "Fashion" },
    ]);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [editingProduct, setEditingProduct] = useState<{ id: number; name: string; price: number; stock: number; category: string; image: File | null } | null>(null);
    // const [currentPage, setCurrentPage] = useState(1);
    // const itemsPerPage = 5;

    const handleSubmit = (formData: { name: string; price: string; stock: string; category: string; image: File | null }) => {
        if (editingProduct) {
            setProducts(products.map(p => p.id === editingProduct.id ? { ...formData, id: p.id, price: Number(formData.price), stock: Number(formData.stock) } : p));
        } else {
            setProducts([...products, { ...formData, id: products.length + 1, price: Number(formData.price), stock: Number(formData.stock) }]);
        }
        setIsModalOpen(false);
        setEditingProduct(null);
    };

    const handleEdit = (product: { id: number; name: string; price: number; stock: number; category: string }) => {
        setEditingProduct({ ...product, image: null });
        setIsModalOpen(true);
    };

    const handleDelete = (id: number) => {
        setProducts(products.filter(p => p.id !== id));
    };

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
                                    {products.map((product) => (
                                        <tr key={product.id}>
                                            <td className="px-4 py-4 text-sm font-medium text-gray-700 whitespace-nowrap">
                                                <div className="inline-flex items-center gap-x-3">
                                                    <input type="checkbox" className="text-blue-500 border-gray-300 rounded" />
                                                    <div className="flex items-center gap-x-2">
                                                        <div className="flex items-center justify-center w-8 h-8 text-blue-500 bg-blue-100 rounded-full">
                                                            <div className="w-5 h-5">{product.name[0]}</div>
                                                        </div>
                                                        <div>
                                                            <h2 className="font-normal text-gray-800">{product.name}</h2>
                                                            <p className="text-xs font-normal text-gray-500">${product.price}</p>
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

            <div className="flex items-center justify-between mt-6">
                <button className="flex items-center px-5 py-2 text-sm text-gray-700 capitalize transition-colors duration-200 bg-white border rounded-md gap-x-2 hover:bg-gray-100">
                    <ChevronLeft className="w-5 h-5" />
                    <span>Previous</span>
                </button>

                <div className="items-center hidden md:flex gap-x-3">
                    <button className="px-2 py-1 text-sm text-blue-500 rounded-md bg-blue-100/60">1</button>
                    <button className="px-2 py-1 text-sm text-gray-500 rounded-md hover:bg-gray-100">2</button>
                    <button className="px-2 py-1 text-sm text-gray-500 rounded-md hover:bg-gray-100">3</button>
                </div>

                <button className="flex items-center px-5 py-2 text-sm text-gray-700 capitalize transition-colors duration-200 bg-white border rounded-md gap-x-2 hover:bg-gray-100">
                    <span>Next</span>
                    <ChevronRight className="w-5 h-5" />
                </button>
            </div>

            <ProductModal
                isOpen={isModalOpen}
                onClose={() => {
                    setIsModalOpen(false);
                    setEditingProduct(null);
                }}
                onSubmit={handleSubmit}
            // initialData={editingProduct}
            />
        </section>
    );
};
