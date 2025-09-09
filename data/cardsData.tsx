// src/data/cardsData.ts

import { Globe, Package, Wrench, Activity, Droplet, Car,  Truck, Monitor, Cpu, Megaphone, PenTool, Brain } from "lucide-react";
import { Code, ShoppingCart, Flower2, Hotel, Home } from 'lucide-react';

import { ReactNode } from "react";

// 🎨 Color definitions
export interface CardColors {
  bg: string;
  iconBg: string;
  iconText: string;
  textAccent: string;
  hoverBg: string;
  checkIcon: string;
  badgeBg: string;
  badgeText: string;
  hoverText: string;
}

export const colorMap: Record<"blue" | "green" | "pink", CardColors> = {
  blue: {
    bg: "bg-blue-600",
    iconBg: "bg-blue-100",
    iconText: "text-blue-600",
    textAccent: "text-blue-600",
    hoverBg: "hover:bg-blue-50",
    checkIcon: "text-blue-500",
    badgeBg: "bg-blue-100",
    badgeText: "text-blue-700",
    hoverText: "hover:text-blue-800",
  },
  green: {
    bg: "bg-green-600",
    iconBg: "bg-green-100",
    iconText: "text-green-600",
    textAccent: "text-green-600",
    hoverBg: "hover:bg-green-50",
    checkIcon: "text-green-500",
    badgeBg: "bg-green-100",
    badgeText: "text-green-700",
    hoverText: "hover:text-green-800",
  },
  pink: {
    bg: "bg-pink-600",
    iconBg: "bg-pink-100",
    iconText: "text-pink-600",
    textAccent: "text-pink-600",
    hoverBg: "hover:bg-pink-50",
    checkIcon: "text-pink-500",
    badgeBg: "bg-pink-100",
    badgeText: "text-pink-700",
    hoverText: "hover:text-pink-800",
  },
};

// 📦 Card Data
export interface CardFeature {
  title: string;
  icon: React.ReactNode;
  color: 'blue' | 'green' | 'pink';
  badge: string;
  description: string;
  features: string[];
  cta: {
    text: string;
    link: string;
  };
}



export const AutospacecardData: CardFeature[] = [
  {
    title: "Buy & Rent Cars",
    icon: <Car className="h-8 w-8" />,
    color: "pink",
    badge: "Certified",
    description:
      "Browse a wide range of top-quality vehicles for sale or rent. Whether you need a daily ride, a luxury car for special occasions, or a business fleet, we provide affordable deals, transparent pricing, and easy booking.",
    features: ["Luxury & economy cars", "Flexible rental plans", "Transparent pricing", "Easy online booking"],
    cta: {
      text: "Explore Cars",
      link: "/autospace"
    }
  },
  {
    title: "Car Services & Repairs",
    icon: <Wrench className="h-8 w-8" />,
    color: "blue",
    badge: "Advanced",
    description:
      "Keep your vehicle in peak condition with our certified maintenance and repair services. From engine overhauls to routine check-ups, our expert mechanics ensure safety, performance, and peace of mind.",
    features: ["Engine repairs", "Oil change", "Tire replacement", "Brake inspections", "Battery services"],
    cta: {
      text: "Book Service",
      link: "/autospace"
    }
  },
  {
    title: "Car Diagnostics",
    icon: <Activity className="h-8 w-8" />,
    color: "green",
    badge: "Seamless",
    description:
      "Identify issues before they become costly problems. Our advanced computer diagnostics detect faults quickly and accurately, helping you make informed decisions and avoid unexpected breakdowns.",
    features: ["Computerized checks", "Error code reading", "Preventive maintenance", "Detailed reports"],
    cta: {
      text: "Run Diagnostics",
      link: "/autospace"
    }
  },
  {
    title: "Car Wash & Detailing",
    icon: <Droplet className="h-8 w-8" />,
    color: "pink",
    badge: "Premium",
    description:
      "Give your car a showroom shine with our premium wash and detailing services. We also offer **mobile car wash delivery**, bringing professional cleaning to your doorstep.",
    features: [
      "Mobile car wash service",
      "Exterior polishing",
      "Interior deep cleaning",
      "Wax & shine",
      "Upholstery treatment"
    ],
    cta: {
      text: "Book Mobile Wash",
      link: "/autospace"
    }
  },
  {
    title: "Roadside Assistance",
    icon: <Truck className="h-8 w-8" />,
    color: "blue",
    badge: "Emergency",
    description:
      "Stranded on the road? Our 24/7 roadside assistance team will be there fast. We provide towing, jump-starts, tire changes, and emergency fuel delivery anytime, anywhere.",
    features: ["24/7 towing", "Jump-starts & battery support", "Flat tire service", "Fuel delivery", "Lockout assistance"],
    cta: {
      text: "Get Help Now",
      link: "/autospace"
    }
  },
  {
    title: "Spare Parts Delivery",
    icon: <Package className="h-8 w-8" />,
    color: "green",
    badge: "Reliable",
    description:
      "Get genuine spare parts for all types of vehicles delivered right to your doorstep. We offer fast shipping, easy online orders, and a wide selection of high-quality parts for cars, trucks, and motorcycles.",
    features: [
      "All vehicle types covered",
      "Fast & secure shipping",
      "Genuine parts guaranteed",
      "Online ordering & tracking",
      "Affordable pricing"
    ],
    cta: {
      text: "Shop Spare Parts",
      link: "/autospace"
    }
  }
];

export const TechServiceCardData: CardFeature[] = [
  {
    title: "Web & Mobile Development",
    icon: <Code className="h-8 w-8" />,
    color: "pink",
    badge: "Custom",
    description:
      "Build secure, scalable, and user-friendly applications tailored to your business needs. From websites to mobile apps, we deliver seamless digital experiences.",
    features: [
      "Responsive web apps",
      "Cross-platform mobile apps",
      "E-commerce solutions",
      "API integration"
    ],
    cta: {
      text: "Start a Project",
      link: "/technology"
    }
  },
  {
    title: "AI & Data Solutions",
    icon: <Brain className="h-8 w-8" />,
    color: "blue",
    badge: "Intelligent",
    description:
      "Leverage AI and data analytics to automate processes, generate insights, and make smarter business decisions for sustainable growth.",
    features: [
      "Machine learning models",
      "Predictive analytics",
      "Data visualization",
      "Process automation"
    ],
    cta: {
      text: "Explore AI Services",
      link: "/technology"
    }
  },
  {
    title: "UI/UX & Graphic Design",
    icon: <PenTool className="h-8 w-8" />,
    color: "green",
    badge: "Creative",
    description:
      "Deliver visually engaging and user-focused designs that strengthen your brand and improve user experience across platforms.",
    features: [
      "User interface design",
      "User experience research",
      "Brand identity design",
      "Prototyping & wireframes"
    ],
    cta: {
      text: "View Designs",
      link: "/technology"
    }
  },
  {
    title: "Digital Marketing",
    icon: <Megaphone className="h-8 w-8" />,
    color: "pink",
    badge: "Growth",
    description:
      "Boost your online presence and drive measurable results with targeted digital marketing campaigns and SEO strategies.",
    features: [
      "Search engine optimization (SEO)",
      "Social media marketing",
      "Content creation",
      "Paid ads management"
    ],
    cta: {
      text: "Boost My Brand",
      link: "/technology"
    }
  },
  {
    title: "Smart Tech Solutions",
    icon: <Cpu className="h-8 w-8" />,
    color: "blue",
    badge: "Innovative",
    description:
      "Adopt next-gen smart technologies for business automation, IoT integration, and digital transformation that future-proof your operations.",
    features: [
      "IoT & smart devices",
      "Process automation",
      "Cloud integration",
      "Custom tech systems"
    ],
    cta: {
      text: "Discover Smart Tech",
      link: "/technology"
    }
  },
  {
    title: "IT Consultancy",
    icon: <Monitor className="h-8 w-8" />,
    color: "green",
    badge: "Expert",
    description:
      "Get expert advice on IT infrastructure, system integration, and technology strategy to optimize efficiency and cut costs.",
    features: [
      "IT infrastructure planning",
      "System integration",
      "Cybersecurity guidance",
      "Tech adoption strategy"
    ],
    cta: {
      text: "Consult With Us",
      link: "/technology"
    }
  }
];
// Wellness service cards data
export const WellnessCardData = [
  {
    title: "Smart Massage & Spa",
    icon: <Flower2 className="h-8 w-8" />, // Relaxation icon
    color: "pink",
    badge: "Relax",
    description:
      "Unwind at our Interface Relax Corner with smart massage chairs and spa treatments designed to refresh your body and mind.",
    features: [
      "Smart massage chairs",
      "Full-body spa treatments",
      "Wellness lounge access",
      "Stress-relief therapy"
    ],
    cta: { text: "Book a Session", link: "/relax" }
  },
  {
    title: "Hotel & Guest House Booking",
    icon: <Hotel className="h-8 w-8" />, // Accommodation icon
    color: "blue",
    badge: "Comfort",
    description:
      "Seamlessly book hotels, guest houses, and accommodations that suit your comfort, budget, and style.",
    features: [
      "Flexible booking",
      "Budget & luxury stays",
      "Secure online reservations",
      "Exclusive partner discounts"
    ],
    cta: { text: "Book a Stay", link: "/relax" }
  },
  {
    title: "Real Estate Dealership",
    icon: <Home className="h-8 w-8" />, // Real estate icon
    color: "green",
    badge: "Trusted",
    description:
      "Find your dream home or ideal property investment with our reliable real estate dealership services.",
    features: [
      "Residential & commercial properties",
      "Verified listings",
      "Property management",
      "Trusted dealership network"
    ],
    cta: { text: "Explore Properties", link: "/relax" }
  }
];

  export const landingPageCards: CardFeature[] = [
        {
            title: "Global Logistics",
            icon: <Globe className="h-8 w-8" />,
            color: "pink",
            badge: "Certified",
            description: "End-to-end import/export solutions, cargo handling, customs clearance, and airline ticket services.",
            features: [
                "International shipping",
                "Express air freight",
                "Travel booking"
            ],
            
             cta: {
               text: "Explore logistics solutions",
        link: "/"
      }
        },
        {
            title: "Technology Solutions",
            icon: <Code className="h-8 w-8" />,
            color: "blue",
            badge: "Advanced",
            description: "Custom software development, cutting-edge tech implementation, and professional graphic design.",
            features: [
                "Web & mobile development",
                "AI & data solutions",
                "UI/UX & graphic design"
            ],
           
          cta: {
            text: "Discover tech services",
            link: "/"
          }
        },
        {
            title: "E-commerce Platform",
            icon: <ShoppingCart className="h-8 w-8" />,
            color: "green",
            badge: "Seamless",
            description: "Complete online shopping solutions and digital service request systems for modern businesses.",
            features: [
                "Online marketplace",
                "Service booking",
                "Payment processing"
            ],
            
             cta: {
               text: "Shop our solutions",
            link: "/"
          }
        }
    ];
