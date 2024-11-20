import Image from "next/image";
import { ArrowRightCircleIcon } from "@heroicons/react/24/solid";

const Services = () => {
  return (
    <div>
      {/* Our Services Section */}
      <section className="my-10 grid md:grid-cols-2 gap-8 p-4 md:p-10">
        {/* Text Section */}
        <div className="flex flex-col space-y-6">
          <h2 className="text-2xl font-bold text-[#1E3A5F]">Our Services</h2>
          <p className="text-gray-600 text-lg leading-relaxed">
            We are your one-stop-shop talent platform to access and manage all
            types of workforce, on-demand.
          </p>
          <button className="px-6 py-3 bg-[#1E3A5F] text-white rounded-lg shadow-md hover:bg-blue-700 transition-colors duration-300 w-max">
            Find Qualified Individuals
          </button>
        </div>

        {/* Services Cards Section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {[
            {
              title: "Freelance Team",
              description:
                "Get on-demand freelance teams to deliver projects and services efficiently.",
            },
            {
              title: "Maintenance Team",
              description:
                "Access reliable maintenance teams for hassle-free operations.",
            },
            {
              title: "Expert Consultation",
              description:
                "Receive guidance from seasoned experts to grow your business.",
            },
            {
              title: "Custom Solutions",
              description:
                "Tailored services to meet the unique needs of your organization.",
            },
          ].map((service, index) => (
            <div
              key={index}
              className={`p-6 bg-white shadow-lg rounded-xl transform hover:scale-105 transition-transform duration-300 ${
                index === 3 ? "col-span-1 md:col-span-2" : ""
              }`}
            >
              {/* Icon and Title */}
              <div className="flex items-center space-x-4 mb-4">
                <div className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center">
                  <Image
                    src="/images/prod1.jpg"
                    alt={service.title}
                    width={30}
                    height={30}
                    className="rounded-lg"
                  />
                </div>
                <h3 className="text-lg font-semibold text-[#1E3A5F]">
                  {service.title}
                </h3>
              </div>

              {/* Description */}
              <p className="text-sm text-gray-500 leading-relaxed mb-4">
                {service.description}
              </p>

              {/* Icon for navigation */}
              <ArrowRightCircleIcon className="w-6 h-6 text-[#1E3A5F] hover:text-blue-700 transition-colors duration-300 cursor-pointer" />
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Services;
