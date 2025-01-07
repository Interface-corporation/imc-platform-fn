import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { useDropzone } from "react-dropzone";
import { useAddProductMutation } from "@/states/productSlice";
import { toast } from "react-toastify";
import Image from "next/image";

interface ProductFormData {
    name: string;
    price: number;
    description: string;
    ratings: number;
    category: string;
    productionType: string;
    location: string;
    seller: string;
    stock: number;
    images: File[];
}

interface ProductModalProps {
    isOpen: boolean;
    onClose: () => void;
    onSubmit: (data: ProductFormData) => void;
    initialData?: ProductFormData | null;
}

export const ProductModal: React.FC<ProductModalProps> = ({
    isOpen,
    onClose,
    onSubmit,
    initialData = null,
}) => {
    const { register, handleSubmit, reset } = useForm<ProductFormData>({
        defaultValues: initialData || {
            name: "",
            price: 0,
            description: "",
            ratings: 0,
            category: "",
            productionType: "",
            location: "",
            seller: "",
            stock: 0,
            images: [],
        },
    });

    const [addProduct, { isLoading }] = useAddProductMutation();
    const [uploadedImages, setUploadedImages] = useState<File[]>([]);

    const onDrop = (acceptedFiles: File[]) => {
        setUploadedImages((prev) => [...prev, ...acceptedFiles]);
    };

    const { getRootProps, getInputProps, isDragActive } = useDropzone({
        onDrop,
        accept: { "image/*": [] },
    });

    const handleFormSubmit = async (data: ProductFormData) => {
        try {
            const formData = new FormData();
            for (const key in data) {
                if (key === "images") {
                    uploadedImages.forEach((file) => formData.append("images", file));
                } else {
                    formData.append(key, data[key as keyof ProductFormData].toString());
                }
            }

            await addProduct(formData).unwrap();
            onSubmit(data); // Notify parent component
            onClose();
            reset();
            setUploadedImages([]);
        } catch (error: any) {
            console.error("Failed to add product:", error);
            // Display toast error
            toast.error(error?.error || "Failed to add product");
        }
    };

    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
            <div className="bg-white rounded-lg shadow-lg p-6 w-full max-w-lg">
                <h2 className="text-2xl font-semibold mb-4 text-center">
                    {initialData ? "Edit Product" : "Add Product"}
                </h2>
                <form onSubmit={handleSubmit(handleFormSubmit)} className="space-y-6">
                    <input
                        type="text"
                        placeholder="Product Name"
                        {...register("name", { required: true })}
                        className="w-full p-3 border rounded-lg focus:ring focus:ring-blue-500"
                    />
                    <input
                        type="number"
                        placeholder="Price"
                        {...register("price", { required: true })}
                        className="w-full p-3 border rounded-lg focus:ring focus:ring-blue-500"
                    />
                    <textarea
                        placeholder="Description"
                        {...register("description", { required: true })}
                        className="w-full p-3 border rounded-lg focus:ring focus:ring-blue-500"
                    />
                    <div className="grid grid-cols-2 gap-4">
                        <input
                            type="number"
                            placeholder="Ratings"
                            {...register("ratings")}
                            className="w-full p-3 border rounded-lg focus:ring focus:ring-blue-500"
                        />
                        <input
                            type="text"
                            placeholder="Category"
                            {...register("category", { required: true })}
                            className="w-full p-3 border rounded-lg focus:ring focus:ring-blue-500"
                        />
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                        <input
                            type="text"
                            placeholder="Production Type"
                            {...register("productionType", { required: true })}
                            className="w-full p-3 border rounded-lg focus:ring focus:ring-blue-500"
                        />
                        <input
                            type="text"
                            placeholder="Location"
                            {...register("location", { required: true })}
                            className="w-full p-3 border rounded-lg focus:ring focus:ring-blue-500"
                        />
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                        <input
                            type="text"
                            placeholder="Seller"
                            {...register("seller", { required: true })}
                            className="w-full p-3 border rounded-lg focus:ring focus:ring-blue-500"
                        />
                        <input
                            type="number"
                            placeholder="Stock"
                            {...register("stock", { required: true })}
                            className="w-full p-3 border rounded-lg focus:ring focus:ring-blue-500"
                        />
                    </div>
                    <div
                        {...getRootProps()}
                        className={`p-4 border-2 border-dashed rounded-lg cursor-pointer ${isDragActive ? "border-blue-500" : "border-gray-300"
                            }`}
                    >
                        <input {...getInputProps()} />
                        {isDragActive ? (
                            <p className="text-center text-blue-500">Drop the files here...</p>
                        ) : (
                            <p className="text-center text-gray-500">
                                Drag and drop images here, or click to select files
                            </p>
                        )}
                    </div>
                    <div className="grid grid-cols-3 gap-2 mt-2">
                        {uploadedImages.map((file, index) => (
                            <div
                                key={index}
                                className="relative flex items-center justify-center h-24 bg-gray-100 border rounded-lg"
                            >
                                <Image
                                    src={URL.createObjectURL(file)}
                                    alt="Preview"
                                    className="object-cover h-full w-full rounded-lg"
                                />
                            </div>
                        ))}
                    </div>
                    <div className="flex justify-end space-x-4">
                        <button
                            type="button"
                            onClick={onClose}
                            className="px-4 py-2 bg-gray-300 rounded-lg hover:bg-gray-400"
                        >
                            Cancel
                        </button>
                        <button
                            type="submit"
                            className={`px-4 py-2 text-white rounded-lg ${isLoading
                                ? "bg-gray-500 cursor-not-allowed"
                                : "bg-blue-600 hover:bg-blue-700"
                                }`}
                            disabled={isLoading}
                        >
                            {isLoading ? "Saving..." : initialData ? "Update" : "Save"}
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};
