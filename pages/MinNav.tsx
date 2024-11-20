import { ChevronDownIcon } from "@heroicons/react/24/solid";

const MinNav = () => {
  return (
    <div className="p-2">
      {/* categories */}
      <div className="flex flex-wrap items-center justify-center gap-2 overflow-x-auto sm:justify-start">
        {/* Category Buttons */}
        <div className="flex rounded-full bg-[#1E3A5F] text-white p-2 whitespace-nowrap">
          <div className="bg-transparent outline-none border-none text-sm">
            Groceries
          </div>
          <ChevronDownIcon className="w-5 h-5 cursor-pointer ml-2" />
        </div>
        <div className="flex bg-[#CDEDF8] rounded-full p-2 whitespace-nowrap">
          <div className="bg-transparent outline-none border-none text-sm text-gray-500">
            Premium Fruits
          </div>
          <ChevronDownIcon className="w-5 h-5 cursor-pointer ml-2" />
        </div>
        <div className="flex bg-[#CDEDF8] rounded-full p-2 whitespace-nowrap">
          <div className="bg-transparent outline-none border-none text-sm text-gray-500">
            Home & Kitchen
          </div>
          <ChevronDownIcon className="w-5 h-5 cursor-pointer ml-2" />
        </div>
        <div className="flex bg-[#CDEDF8] rounded-full p-2 whitespace-nowrap">
          <div className="bg-transparent outline-none border-none text-sm text-gray-500">
            Fashion
          </div>
          <ChevronDownIcon className="w-5 h-5 cursor-pointer ml-2" />
        </div>
        <div className="flex bg-[#CDEDF8] rounded-full p-2 whitespace-nowrap">
          <div className="bg-transparent outline-none border-none text-sm text-gray-500">
            Electronics
          </div>
          <ChevronDownIcon className="w-5 h-5 cursor-pointer ml-2" />
        </div>
        <div className="flex bg-[#CDEDF8] rounded-full p-2 whitespace-nowrap">
          <div className="bg-transparent outline-none border-none text-sm text-gray-500">
            Beauty
          </div>
          <ChevronDownIcon className="w-5 h-5 cursor-pointer ml-2" />
        </div>
        <div className="flex bg-[#CDEDF8] rounded-full p-2 whitespace-nowrap">
          <div className="bg-transparent outline-none border-none text-sm text-gray-500">
            Home Improvement
          </div>
          <ChevronDownIcon className="w-5 h-5 cursor-pointer ml-2" />
        </div>
        <div className="flex bg-[#CDEDF8] rounded-full p-2 whitespace-nowrap">
          <div className="bg-transparent outline-none border-none text-sm text-gray-500">
            Sports, Toys & Luggage
          </div>
          <ChevronDownIcon className="w-5 h-5 cursor-pointer ml-2" />
        </div>
      </div>
    </div>
  );
};

export default MinNav;
