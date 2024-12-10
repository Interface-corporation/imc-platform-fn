import Image from "next/image";
import { ArrowRightCircleIcon } from "@heroicons/react/24/solid";

// Define an interface for the service data
interface Service {
  title: string;
  description: string;
}

// Define the service data
const servicesData: Service[] = [
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
];

// Define props for the ServiceCard component
interface ServiceCardProps {
  title: string;
  description: string;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ title, description }) => (
  <div className="p-6 bg-white shadow-lg rounded-xl transform hover:scale-105 transition-transform duration-300">
    <div className="flex items-center space-x-4 mb-4">
      <div className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center overflow-hidden">
        <Image
          src="/images/prod1.jpg"
          alt={title}
          width={48}
          height={48}
          className="object-cover"
        />
      </div>
      <h3 className="text-lg font-semibold text-[#25aae1]">{title}</h3>
    </div>
    <p className="text-sm text-gray-500 leading-relaxed mb-4">{description}</p>
    <ArrowRightCircleIcon className="w-6 h-6 text-[#25aae1] hover:text-[#25aae1] transition-colors duration-300 cursor-pointer" />
  </div>
);

const Services: React.FC = () => (
  <div id="services">
    <div className="container mx-auto px-4 py-10">
      <div className="grid md:grid-cols-2 gap-8">
        <div className="flex flex-col space-y-6">
          <h2 className="text-3xl font-bold text-[#25aae1]">Our Services</h2>
          <p className="text-[#25aae1] text-md lg:text-3xl lg:w-[50%] font-light leading-relaxed">
            We are your one-stop-shop talent platform to access and manage all
            types of workforce, on-demand.
          </p>
          <button className="px-6 py-3 bg-[#1E3A5F] text-white text-xl rounded-full shadow-md hover:bg-[#25aae1] transition-colors duration-300 w-max">
            Find Qualified Individuals
          </button>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {servicesData.map((service, index) => (
            <ServiceCard
              key={index}
              title={service.title}
              description={service.description}
            />
          ))}
        </div>
      </div>
    </div>
  </div>
);


export default Services;
