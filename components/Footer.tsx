import Image from "next/image";
import Link from "next/link";
import {
  GiftIcon,
  InformationCircleIcon,
  ShoppingBagIcon
} from "@heroicons/react/24/solid";

const Footer = () => {
  return (
    <div>
      {/* Footer Section */}
      <footer className="bg-gray-100 py-10">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
            {/* Logo & Payment Section */}
            <div className="space-y-6">
              <div className="w-32">
                <Image
                  src="/images/logo.png"
                  alt="IMC Logo"
                  width={100}
                  height={50}
                />
              </div>
              <p className="text-sm text-gray-500">Accepted Payments</p>
              <div className="flex space-x-3">
                <Image
                  src="/images/visa.png"
                  alt="Visa"
                  width={40}
                  height={20}
                  className="rounded"
                />
                <Image
                  src="/images/payPal.png"
                  alt="Paypal"
                  width={40}
                  height={20}
                  className="rounded"
                />
              </div>
            </div>

            {/* Footer Links */}
            {[
              {
                title: "Department",
                links: [
                  "Fashion",
                  "Education Product",
                  "Frozen Food",
                  "Beverages",
                  "Organic Grocery",
                  "Office Supplies",
                  "Beauty Products",
                  "Books",
                  "Electronics & Gadget",
                  "Travel Accessories",
                  "Fitness",
                  "Sneakers",
                  "Toys",
                  "Furniture",
                ],
              },
              {
                title: "About Us",
                links: [
                  "Careers",
                  "News & Blog",
                  "Help",
                  "Press Center",
                  "Shop By Location",
                  "Shopcart Brands",
                  "Affiliate & Partners",
                  "Ideas & Guides",
                ],
              },
              {
                title: "Services",
                links: [
                  "Gift Card",
                  "Mobile App",
                  "Shipping & Delivery",
                  "Order Pickup",
                  "Account Signup",
                ],
              },
              {
                title: "Help",
                links: [
                  "Shopcart Help",
                  "Returns",
                  "Track Orders",
                  "Contact Us",
                  "Feedback",
                  "Security & Fraud",
                ],
              },
            ].map((section, index) => (
              <div key={index}>
                <h3 className="font-semibold text-lg mb-4 text-[#1E3A5F]">
                  {section.title}
                </h3>
                <ul className="space-y-2 text-sm text-gray-600">
                  {section.links.map((link, linkIndex) => (
                    <li key={linkIndex}>
                      <Link
                        href="/"
                        className="hover:text-blue-600 transition-colors duration-300"
                      >
                        {link}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="mt-8 border-t pt-4 text-sm text-gray-500">
          <div className="container mx-auto px-4 flex flex-wrap items-center justify-between">
            <div className="flex flex-wrap space-x-4 justify-center md:justify-start mb-4 md:mb-0">
              <Link
                href="/"
                className="hover:text-blue-600 transition-colors duration-300 flex items-center"
              >
                <ShoppingBagIcon className="w-5 h-5 cursor-pointer text-[#1E3A5F]"/>
                Become Seller
              </Link>
              <Link
                href="/"
                className="hover:text-blue-600 transition-colors duration-300 flex items-center"
              >
                <GiftIcon className="w-5 h-5 cursor-pointer text-[#1E3A5F]"/>
                Gift Cards
              </Link>
              <Link
                href="/"
                className="hover:text-blue-600 transition-colors duration-300 flex items-center"
              >
                <InformationCircleIcon className="w-5 h-5 cursor-pointer text-[#1E3A5F]"/>
                Help Centre
              </Link>
              <Link
                href="/"
                className="hover:text-blue-600 transition-colors duration-300 flex items-center"
              >
                Terms of Use
              </Link>
              <Link
                href="/"
                className="hover:text-blue-600 transition-colors duration-300 flex items-center"
              >
                Privacy Policy
              </Link>
            </div>

            {/* Centering the text on small screens and aligning it right on medium screens */}
            <p className="w-full text-center md:text-right mt-4 md:mt-0">
              © 2024 All rights reserved by IMC
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
