import Image from "next/image";
import Link from "next/link";

const Categories = () => {
  return (
    <div id="categories" className="py-6">
      <div className="container mx-auto px-4">
        {/* Top Categories Section */}
        <section className="my-6">
          <div className="flex justify-between items-center">
            <h2 className="text-xl font-semibold">
              Shop From <span className="text-[#25AAE1]">Top Categories</span>
            </h2>
            <Link href="/categories" className="text-[#25AAE1] text-sm">
              View All
            </Link>
          </div>
          <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-7 gap-4 mt-4">
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
                    width={60}
                    height={60}
                    style={{ objectFit: "contain" }}
                    className="object-contain"
                  />
                </div>
                <p className="text-xl font-medium">{category.name}</p>
              </div>
            ))}
          </div>
        </section>

        {/* New Arrivals Section */}
        <div className="flex justify-between items-center">
            <h2 className="text-xl font-semibold text-[#25AAE1]">
              NEW ARRIVAL
            </h2>
            <Link href="/categories" className="text-[#25AAE1] text-sm">
              View All
            </Link>
          </div>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mt-6">
          {/* Large Featured Product */}
          <div className="md:col-span-2 relative">
            <Image
              src="/images/ps5.jpg"
              alt="PlayStation 5"
              width={600}
              height={400}
              className="w-full h-80 rounded-xl object-cover shadow-lg"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent p-4 flex flex-col justify-end rounded-xl">
              <h3 className="text-lg font-semibold text-white">
                PlayStation 5
              </h3>
              <p className="text-sm text-gray-300 mt-1">
                Black and White version of the PS5 coming out on sale.
              </p>
              <Link
                href="/product/ps5"
                className="mt-2 px-3 py-1 bg-white text-black text-xl font-medium rounded-lg shadow-md hover:bg-gray-300"
              >
                Shop Now
              </Link>
            </div>
          </div>

          {/* Two Smaller Featured Products */}
          <div className="grid grid-rows-2 gap-4">
            {/* Women's Collection */}
            <div className="relative p-4 bg-gradient-to-r from-pink-500 to-red-500 text-white rounded-xl shadow-lg flex flex-col justify-between">
              <div>
                <h3 className="text-base font-semibold">
                  Women&apos;s Collection
                </h3>
                <p className="text-sm mt-1">
                  Featured women’s collections that give you another vibe.
                </p>
              </div>
              <Link
                href="/category/womens-collection"
                className="mt-2 px-3 py-1 bg-white text-black text-xl font-medium rounded-lg shadow-md hover:bg-gray-300"
              >
                Shop Now
              </Link>
            </div>

            {/* Speakers */}
            <div className="relative flex flex-col rounded-xl shadow-lg h-full">
              <Image
                src="/images/speakers.jpg"
                alt="Speakers"
                width={300}
                height={200}
                className="rounded-t-xl object-cover h-24 w-full"
              />
              <div className="p-4 flex flex-col justify-between bg-white rounded-b-xl">
                <div>
                  <h3 className="text-base font-semibold">Speakers</h3>
                  <p className="text-sm text-gray-600">
                    Amazon wireless speakers.
                  </p>
                </div>
                <Link
                  href="/product/speakers"
                  className="mt-2 px-3 py-1 bg-[#25AAE1] text-white text-xl font-medium rounded-lg hover:bg-[#1a82b2]"
                >
                  Shop Now
                </Link>
              </div>
            </div>
          </div>

          {/* Single Small Featured Product */}
          <div className="relative flex flex-col rounded-xl shadow-lg h-full">
            <Image
              src="/images/perfume.jpg"
              alt="Perfume"
              width={300}
              height={200}
              className="rounded-t-xl object-cover h-80 w-full"
            />
            <div className="p-4 flex flex-col justify-between bg-white rounded-b-xl">
              <div>
                <h3 className="text-base font-semibold">Perfume</h3>
                <p className="text-sm text-gray-600">GUCCI INTENSE OUD EDP</p>
              </div>
              <Link
                href="/product/perfume"
                className="mt-2 px-3 py-1 bg-[#25AAE1] text-white text-xl font-medium rounded-lg hover:bg-[#1a82b2]"
              >
                Shop Now
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Categories;
