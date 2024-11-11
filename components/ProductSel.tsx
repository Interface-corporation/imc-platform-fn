"use client";

import { useState } from "react";

const pselection = [
  "Gadgets",
  "Fashion",
  "Toys",
  "Education",
  "Beauty",
  "Fitness",
  "Furniture",
  "Sneakers",
];

const ProductSel = () => {
  const [selectedProductSele, setSelectedProductSele] =
    useState<string>("Gadgets");

  return (
    <div className="p-2 w-full">
      <div className="flex flex-wrap items-center justify-evenly gap-2 w-3/4">
        {pselection.map((ProductSele) => (
          <div
            key={ProductSele}
            onClick={() => setSelectedProductSele(ProductSele)}
            className={`flex-grow flex justify-center rounded-full p-2 whitespace-nowrap cursor-pointer ${
              selectedProductSele === ProductSele
                ? "bg-[#25aae1] text-white"
                : "bg-white border border-black text-black"
            }`}
          >
            <div className="bg-transparent outline-none border-none text-sm">
              {ProductSele}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductSel;
