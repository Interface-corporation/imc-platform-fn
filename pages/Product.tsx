import Image from "next/image";

const Product = () => {
  return (
    <div>
      {/* Product Section */}
      <div className="container mx-auto px-4 py-10">
        <h2 className="text-2xl sm:text-3xl font-bold mb-6 text-center sm:text-left">
          Grab the Best Deal on Smartphones
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* Product Card */}
          {Array.from({ length: 4 }).map((_, index) => (
            <div
              key={index}
              className="bg-white shadow-lg rounded-xl p-4 relative group hover:shadow-xl transition-shadow duration-300"
            >
              {/* Wishlist Icon */}
              <button
                className="absolute top-4 right-4 text-gray-400 hover:text-red-500 transition"
                aria-label="Add to Wishlist"
              >
                ♥
              </button>

              {/* Product Image */}
              <Image
                src="/images/prod1.jpg"
                alt="Laptop Sleeve MacBook"
                width={200}
                height={200}
                className="mx-auto mb-4 rounded-lg transition-transform duration-300 group-hover:scale-105"
              />

              {/* Product Details */}
              <h3 className="text-lg font-medium text-center sm:text-left">
                Laptop Sleeve MacBook
              </h3>
              <p className="text-gray-500 text-sm text-center sm:text-left">
                Organic Cotton, fairtrade certified
              </p>

              {/* Rating Section */}
              <div className="flex items-center justify-center sm:justify-start space-x-1 my-2">
                <div className="text-yellow-500">⭐⭐⭐⭐⭐</div>
                <p className="text-gray-500 text-sm">(121)</p>
              </div>

              {/* Price */}
              <div className="text-[#1E3A5F] font-bold mt-2 text-lg text-center sm:text-left">
                $59.00
              </div>

              {/* Add to Cart Button */}
              <button className="mt-4 w-full px-4 py-2 text-sm font-medium text-white rounded-lg bg-[#1E3A5F] hover:bg-[#16415F] transition-colors duration-300">
                Add to Cart
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Product;
