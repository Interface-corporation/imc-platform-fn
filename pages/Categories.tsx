import Image from "next/image";
import Link from "next/link"; // Import Link from Next.js

const Categories = () => {
  return (
    <div>
      <div className="container mx-auto px-4">
        {/* Top Categories Section */}
        <section className="my-10">
          <div className="flex justify-between items-center">
            <h2 className="text-lg font-semibold">
              Shop From <span className="text-[#25AAE1]">Top Categories</span>
            </h2>
            <Link href="/categories" className="text-[#25AAE1] text-sm">
              View All
            </Link>
          </div>
          <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-7 gap-6 mt-6">
            {[
              { name: "Mobile", img: "/images/mobile.png" },
              { name: "Cosmetics", img: "/images/cosmetics.png" },
              { name: "Electronics", img: "/images/electronics.png" },
              { name: "Furniture", img: "/images/furniture.png" },
              { name: "Watches", img: "/images/watches.png" },
              { name: "Decor", img: "/images/decor.png" },
              { name: "Accessories", img: "/images/accessories.png" },
            ].map((category, index) => (
              <div
                key={index}
                className="flex flex-col items-center text-center space-y-2"
              >
                <div className="w-20 h-20 rounded-full bg-gray-100 flex items-center justify-center">
                  <Image
                    src={category.img}
                    alt={category.name}
                    width={50}
                    height={50}
                    className="object-contain"
                  />
                </div>
                <p className="text-sm font-medium">{category.name}</p>
              </div>
            ))}
          </div>
        </section>

        {/* New Arrivals Section */}
        <section className="my-10">
          <div className="flex justify-between items-center">
            <h2 className="text-lg font-semibold text-[#25AAE1]">
              New Arrival
            </h2>
            <Link href="/new-arrivals" className="text-[#25AAE1] text-sm">
              View All
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mt-6">
            {/* Left Featured Product */}
            <div className="md:col-span-2">
              <div className="relative">
                <Image
                  src="/images/ps5.jpg"
                  alt="PlayStation 5"
                  width={600}
                  height={400}
                  className="rounded-lg object-cover"
                />
                <div className="absolute bottom-4 left-4 text-white">
                  <h3 className="font-semibold text-xl">PlayStation 5</h3>
                  <p className="text-sm">
                    Black and White version of the PS5 coming out on sale.
                  </p>
                  <Link
                    href="/product/ps5"
                    className="mt-4 px-4 py-2 text-black rounded-lg border border-[#1E3A5F] 
             hover:bg-[#1E3A5F] hover:text-gray-200 transition-colors duration-300"
                  >
                    Shop Now
                  </Link>
                </div>
              </div>
            </div>

            {/* Right Small Featured Products */}
            <div className="grid grid-rows-2 gap-4">
              <div className="relative bg-black text-white rounded-lg p-4">
                <h3 className="font-semibold text-lg">
                  Women&apos;s Collections
                </h3>
                <p className="text-sm">
                  Featured woman collections that give you another vibe.
                </p>
                <Link
                  href="/category/womens-collection"
                  className="mt-2 px-4 py-2 bg-white text-black text-sm rounded-lg inline-block"
                >
                  Shop Now
                </Link>
              </div>
              <div className="relative">
                <Image
                  src="/images/speakers.jpg"
                  alt="Speakers"
                  width={300}
                  height={200}
                  className="rounded-lg object-cover"
                />
                <div className="absolute bottom-4 left-4 text-white">
                  <h3 className="font-semibold text-lg">Speakers</h3>
                  <p className="text-sm">Amazon wireless speakers.</p>
                  <Link
                    href="/product/speakers"
                    className="mt-4 px-4 py-2 text-black rounded-lg border border-[#1E3A5F] 
             hover:bg-[#1E3A5F] hover:text-gray-200 transition-colors duration-300"
                  >
                    Shop Now
                  </Link>
                </div>
              </div>
            </div>

            <div className="relative">
              <Image
                src="/images/perfume.jpg"
                alt="Perfume"
                width={300}
                height={200}
                className="rounded-lg object-cover"
              />
              <div className="absolute bottom-4 left-4 text-white">
                <h3 className="font-semibold text-lg">Perfume</h3>
                <p className="text-sm">GUCCI INTENSE OUD EDP</p>
                <Link
                  href="/product/perfume"
                  className="mt-4 px-4 py-2 text-black rounded-lg border border-[#1E3A5F] 
             hover:bg-[#1E3A5F] hover:text-gray-200 transition-colors duration-300"
                >
                  Shop Now
                </Link>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Categories;
