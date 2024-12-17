import ProductCard from "./ProductCard";

interface Product {
  id: number;
  name: string;
  description: string;
  price: string;
  image: string;
  rating: number;
  reviews: number;
}

const products: Product[] = [
  {
    id: 1,
    name: "Laptop Sleeve MacBook",
    description: "Organic Cotton, fairtrade certified",
    price: "$59.00",
    image: "/images/prod1.jpg",
    rating: 5,
    reviews: 121,
  },
  {
    id: 2,
    name: "Wireless Headphones",
    description: "Noise-cancelling, high fidelity",
    price: "$99.00",
    image: "/images/prod3.jpg",
    rating: 4.5,
    reviews: 89,
  },
  {
    id: 3,
    name: "Smartphone Case",
    description: "Shockproof and lightweight",
    price: "$19.00",
    image: "/images/prod4.jpg",
    rating: 4,
    reviews: 45,
  },
  {
    id: 4,
    name: "Portable Charger",
    description: "10,000mAh, fast charging",
    price: "$39.00",
    image: "/images/prod2.jpg",
    rating: 4.8,
    reviews: 250,
  },
];

const Product = () => {
  return (
    <div id="product">
      <div className="container mx-auto px-4 py-10">
        <h2 className="text-2xl sm:text-3xl font-bold mb-6 text-center sm:text-left">
          Grab the Best Deal on Smart Accessories
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Product;
