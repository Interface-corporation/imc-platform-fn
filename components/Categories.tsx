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
                <p className="text-sm font-medium">{category.name}</p>
              </div>
            ))}
          </div>
        </section>

        {/* New Arrivals Section */}
        <section className="my-16">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-2xl text-[#25AAE1] font-bold">
              New Arrival
            </h2>
            <Link href="/new-arrivals" className="text-[#25AAE1] text-sm">
              View All
            </Link>
          </div>

          <div className="flex flex-col md:flex-row gap-4">
            {/* Left Half - PlayStation 5 */}
            <div className="w-full md:w-1/2 relative h-[600px] rounded-xl overflow-hidden">
              <Image
                src="/images/ps5.jpg"
                alt="PlayStation 5"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-black bg-opacity-20">
                <div className="absolute bottom-6 left-6 text-white">
                  <h3 className="text-3xl font-semibold mb-2">PlayStation 5</h3>
                  <p className="text-lg mb-4">Black and White version of the PS5 coming out on sale.</p>
                  <button className="text-lg font-medium hover:underline">
                    Shop Now
                  </button>
                </div>
              </div>
            </div>

            {/* Right Half - Other Products */}
            <div className="w-full md:w-1/2 flex flex-col gap-4">
              {/* Women's Collections */}
              <div className="relative h-[292px] rounded-xl overflow-hidden">
                <Image
                  src="/images/women.jpg"
                  alt="Women's Collections"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-black bg-opacity-20 p-6 flex flex-col justify-between">
                  <div className="absolute bottom-6 left-6 text-white">
                    <h3 className="text-2xl font-semibold text-white mb-2">Women's Collections</h3>
                    <p className="text-white">Featured woman collections that give you another vibe.</p>
                    <button className="text-lg font-medium text-white hover:underline">
                      Shop Now
                    </button>
                  </div>
                </div>
              </div>

              {/* Bottom Row - Speakers and Perfume */}
              <div className="flex gap-4 h-[292px]">
                {/* Speakers */}
                <div className="w-1/2 relative rounded-xl overflow-hidden">
                  <Image
                    src="/images/speakers.jpg"
                    alt="Speakers"
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-20 p-6 flex flex-col justify-between">
                    <div className="absolute bottom-6 left-6 text-white">
                      <h3 className="text-2xl font-semibold text-white mb-2">Speakers</h3>
                      <p className="text-white">Amazon wireless speakers</p>
                      <button className="text-lg font-medium text-white hover:underline">
                        Shop Now
                      </button>
                    </div>
                  </div>
                </div>

                {/* Perfume */}
                <div className="w-1/2 relative rounded-xl overflow-hidden">
                  <Image
                    src="/images/perfume.jpg"
                    alt="Perfume"
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-20 p-6 flex flex-col justify-between">
                    <div className="absolute bottom-6 left-6 text-white">
                      <h3 className="text-2xl font-semibold text-white mb-2">Perfume</h3>
                      <p className="text-white">GUCCI INTENSE OUD EDP</p>
                      <button className="text-lg font-medium text-white hover:underline">
                        Shop Now
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Categories;