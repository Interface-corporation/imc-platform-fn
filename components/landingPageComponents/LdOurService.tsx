import React, { useState, useEffect, useRef, useCallback } from 'react';
import {
    Rocket,
    CloudCog,
    Layers,
    ChevronDown,
    ChevronUp,
    ChevronLeft,
    ChevronRight,
    Eye,
    Home
} from 'lucide-react';

// Import images
import logisticsImage from '@/public/flyers/Shipping.png';
import softwareImage from '@/public/flyers/techService.png';
import propertyImage from '@/public/flyers/reale.png';
import mushirarungu from '@/public/flyers/mushirarungu.png';
import blindGlass from '@/public/cover/blindglass.jpeg';
import Image, { StaticImageData } from 'next/image';

// Define types for our service objects
interface ServiceItem {
    icon: React.ElementType;
    title: string;
    shortDescription: string;
    longDescription: string;
    image: StaticImageData; // For imported image
    color: string;
    keyServices: string[];
}

// Service card data
const services: ServiceItem[] = [
    {
        icon: Rocket,
        title: 'Global Logistics & Shipping',
        shortDescription: 'IMC ensures timely delivery of goods locally and internationally, specializing in export and import of all types of orders tailored to our clients\' specific needs.',
        longDescription: 'Our comprehensive logistics solutions cover end-to-end supply chain management. We offer:\n- International and local shipping services\n- Custom clearance and documentation\n- Specialized handling for diverse cargo types\n- Real-time tracking and logistics optimization\n- Competitive pricing and reliable delivery',
        image: logisticsImage,
        color: 'text-blue-600',
        keyServices: [
            'Cargo Tracking',
            'Airline Ticketing',
            'International Shipping',
            'Custom Clearance',
            'Supply Chain Management',
        ]
    },
    {
        icon: CloudCog,
        title: 'Software Dev & Graphic Design',
        shortDescription: 'IMC provides tailored web and mobile app development, along with creative graphic design services, using advanced technologies like AI and IoT to bring digital ideas to life.',
        longDescription: 'Our technology services encompass cutting-edge digital solutions:\n- Custom web and mobile app development\n- AI-powered design and development\n- IoT integration\n- Creative graphic design\n- User experience (UX) optimization\n- Digital transformation consulting',
        image: softwareImage,
        color: 'text-green-600',
        keyServices: [
            'Web & Mobile Development',
            'AI Design Solutions',
            'IoT Integration',
            'UX/UI Design',
            'Graphic Design',
            'Professional Photography'
        ]
    },
    {
        icon: Eye,
        title: 'Smart White Glass for Vision Impaired',
        shortDescription: 'Smart white glass for vision impaired people which allows the blind to detect and recognize objects in front of them and read written text through AI computer vision.',
        longDescription: 'Our cutting-edge assistive technology empowers visually impaired individuals:\n- Object detection and recognition using AI computer vision\n- Text-to-speech functionality for reading written text\n- Navigation assistance for independent mobility\n- Environmental awareness through spatial audio feedback\n- Lightweight, comfortable design for all-day wear\n- Long battery life with quick charging capabilities',
        image: blindGlass,
        color: 'text-indigo-600',
        keyServices: [
            'Object Recognition',
            'Text Reading',
            'Navigation Assistance',
            'Environmental Awareness'
        ]
    },
    {
        icon: Layers,
        title: 'Property Rental & Sales',
        shortDescription: 'IMC connects clients with comprehensive home rental and property selling services, streamlining real estate transactions for buyers and renters.',
        longDescription: 'Our real estate services provide end-to-end property solutions:\n- Comprehensive property listings\n- Rental and sales management\n- Virtual property tours\n- Legal and documentation support\n- Investment property consultation\n- Personalized client matching',
        image: propertyImage,
        color: 'text-purple-600',
        keyServices: [
            'Property Listings',
            'Rental Management',
            'Sales Brokerage',
            'Investment Consulting'
        ]
    },
    {
        icon: Home,
        title: 'Mushirarungu Guest House',
        shortDescription: 'Your luxury haven of comfort & relaxation with premium accommodations, dining services, and relaxation amenities at affordable rates.',
        longDescription: 'Experience luxury and comfort at Mushirarungu Guest House:\n- Premium accommodations designed for both solo travelers and groups\n- Private wellness facilities including sauna and jacuzzi\n- State-of-the-art full body massage chair\n- Quick service dining with vibrant café serving fresh food and artisanal coffee\n- Perfect environment to relax in comfort\n- Special 20% discount available for new guests',
        image: mushirarungu,
        color: 'text-orange-500',
        keyServices: [
            'Cozy Single Rooms & Elegant Double-Room Suites',
            'Private Sauna Experience',
            'Luxurious Personal Jacuzzi',
            'Full Body Massage Chair',
            'Fresh Food & Artisanal Coffee',
            '20% OFF for New Guests'
        ]
    }
];

// Create our own Card components instead of importing from shadcn
const Card: React.FC<{ className?: string; children: React.ReactNode }> = ({ className = "", children }) => (
    <div className={`rounded-lg border border-gray-200 bg-white shadow-sm ${className}`}>
        {children}
    </div>
);

const CardHeader: React.FC<{ className?: string; children: React.ReactNode }> = ({ className = "", children }) => (
    <div className={`px-6 pt-6 ${className}`}>
        {children}
    </div>
);

const CardTitle: React.FC<{ className?: string; children: React.ReactNode }> = ({ className = "", children }) => (
    <h3 className={`text-lg font-semibold ${className}`}>
        {children}
    </h3>
);

const CardContent: React.FC<{ className?: string; children: React.ReactNode }> = ({ className = "", children }) => (
    <div className={`px-6 py-4 ${className}`}>
        {children}
    </div>
);

const ServiceCard: React.FC<{ service: ServiceItem }> = ({ service }) => {
    const [isExpanded, setIsExpanded] = useState(false);

    return (
        <div className="flex-shrink-0 w-96 transform transition-all duration-300 hover:scale-105">
            <Card className={`h-full border-2 border-gray-100 shadow-lg hover:shadow-xl transition-shadow ${isExpanded ? 'h-auto' : ''}`}>
                <CardHeader className="pb-4">
                    <div className="flex items-center space-x-4">
                        <service.icon
                            className={`w-12 h-12 ${service.color}`}
                            strokeWidth={1.5}
                        />
                        <CardTitle className="text-2xl font-semibold text-gray-800">
                            {service.title}
                        </CardTitle>
                    </div>
                </CardHeader>
                <CardContent>
                    {/* Service Image */}
                    <div className="mb-4 overflow-hidden rounded-lg">
                        <Image
                            src={service.image.src}
                            alt={service.title}
                            width={500}
                            height={300}
                            className="w-full h-48 object-cover"
                        />
                    </div>

                    {/* Short Description */}
                    <p className="text-gray-600 text-base mb-4">
                        {service.shortDescription}
                    </p>

                    {/* Expandable Content */}
                    {isExpanded && (
                        <div className="mt-4 space-y-4">
                            <div className="bg-gray-50 p-4 rounded-lg">
                                <h4 className="font-semibold text-gray-800 mb-2">Key Services</h4>
                                <ul className="list-disc list-inside text-gray-700">
                                    {service.keyServices.map((serv: string, index: number) => (
                                        <li key={index}>{serv}</li>
                                    ))}
                                </ul>
                            </div>
                            <p className="text-gray-600 whitespace-pre-line">
                                {service.longDescription}
                            </p>
                        </div>
                    )}

                    {/* Learn More Button */}
                    <button
                        onClick={() => setIsExpanded(!isExpanded)}
                        className="mt-6 w-full py-2 px-4 bg-gray-100 text-gray-800 rounded-lg hover:bg-gray-200 transition-colors font-medium flex items-center justify-center"
                    >
                        {isExpanded ? (
                            <>
                                <ChevronUp className="mr-2 w-5 h-5" /> Collapse
                            </>
                        ) : (
                            <>
                                <ChevronDown className="mr-2 w-5 h-5" /> Learn More
                            </>
                        )}
                    </button>
                </CardContent>
            </Card>
        </div>
    );
};

const ServicesShowcase: React.FC = () => {
    const scrollRef = useRef<HTMLDivElement>(null);
    const [currentIndex, setCurrentIndex] = useState(0);
    const totalItems = services.length;
    const cardWidth = 384; // w-96 = 24rem = 384px
    const gap = 24; // space-x-6 = 1.5rem = 24px
    
   
    // Calculate maximum scrollable width
    const maxScrollWidth = (services.length - 1) * (cardWidth + gap);
    
    // Scroll to specific index with proper handling for the last card
    const scrollToIndex = useCallback(
        (index: number) => {
            if (scrollRef.current) {
                const scrollPosition = index * (cardWidth + gap);
                const safeScrollPosition = Math.min(scrollPosition, maxScrollWidth);

                scrollRef.current.scrollTo({
                    left: safeScrollPosition,
                    behavior: 'smooth',
                });

                setCurrentIndex(index % totalItems);
            }
        },
        [cardWidth, gap, maxScrollWidth, totalItems]
    );
    
    // Automatic scrolling with 5-second delay
    useEffect(() => {
        const timer = setInterval(() => {
            const nextIndex = (currentIndex + 1) % totalItems;
            scrollToIndex(nextIndex);
        }, 10000); // 10s

        return () => clearInterval(timer);
    }, [currentIndex, totalItems, scrollToIndex]);
    
    // Manual scrolling with arrow buttons
    const scrollToPrev = () => {
        const prevIndex = (currentIndex - 1 + totalItems) % totalItems;
        scrollToIndex(prevIndex);
    };
    
    const scrollToNext = () => {
        const nextIndex = (currentIndex + 1) % totalItems;
        scrollToIndex(nextIndex);
    };
    
    // Handle scroll events to update currentIndex
    const handleScroll = () => {
        if (scrollRef.current) {
            const scrollLeft = scrollRef.current.scrollLeft;
            const newIndex = Math.round(scrollLeft / (cardWidth + gap));
            
            if (newIndex !== currentIndex && newIndex < totalItems) {
                setCurrentIndex(newIndex);
            }
            
            // If we're near the end of the original content, check if we should loop
            if (scrollLeft > (totalItems - 1.5) * (cardWidth + gap)) {
                // We're at the end or viewing the last card, prepare to loop around smoothly
                // Let the user finish seeing the last card before we reset
            } else if (scrollLeft < 10 && currentIndex === totalItems - 1) {
                // We're at the beginning after having been at the end - we've looped around
                setCurrentIndex(0);
            }
        }
    };
    
    // When the last card finishes displaying and we need to loop
    const handleLoopToStart = useCallback(() => {
        if (currentIndex === totalItems - 1 && scrollRef.current) {
            setTimeout(() => {
                if (scrollRef.current) {
                    scrollRef.current.scrollTo({
                        left: 0,
                        behavior: 'smooth',
                    });
                    setCurrentIndex(0);
                }
            }, 5000); // same delay you had
        }
    }, [currentIndex, totalItems]);
    
    // Effect to handle looping
    useEffect(() => {
        if (currentIndex === totalItems - 1) {
            handleLoopToStart();
        }
    }, [currentIndex, totalItems, handleLoopToStart]);;
    
    return (
        <div className="bg-white py-16 ">
            <div className="max-w-7xl mx-auto">
                <h2 className="text-4xl font-bold text-center mb-4 text-gray-800">
                    Our Latest Services
                </h2>
                
                {/* Section Description */}
                <p className="text-center text-gray-600 max-w-3xl mx-auto mb-12">
                    At Interface Multiservice Corporation, we deliver innovative solutions across multiple industries.
                    From cutting-edge assistive technology to global logistics and digital transformation,
                    our services are designed to meet your diverse needs with excellence and reliability.
                </p>
                
                <div className="relative px-10">
                    {/* Left Arrow */}
                    <button
                        onClick={scrollToPrev}
                        className="absolute left-0 top-1/2 -translate-y-1/2 z-10 p-2 rounded-full bg-white shadow-lg hover:bg-gray-100 transition-colors"
                        aria-label="Previous service"
                    >
                        <ChevronLeft className="w-6 h-6 text-gray-600" />
                    </button>
                    
                    {/* Horizontal Scrollable Container with improved padding */}
                    <div
                        ref={scrollRef}
                        className="flex overflow-x-auto snap-x snap-mandatory hide-scrollbar space-x-6 pb-6 scrollbar-hide scroll-smooth"
                        onScroll={handleScroll}
                        style={{ paddingLeft: '12px', paddingRight: '12px' }}
                    >
                        {services.map((service: ServiceItem, index: number) => (
                            <div key={index} className="snap-center">
                                <ServiceCard service={service} />
                            </div>
                        ))}
                    </div>
                    
                    {/* Right Arrow */}
                    <button
                        onClick={scrollToNext}
                        className="absolute right-0 top-1/2 -translate-y-1/2 z-10 p-2 rounded-full bg-white shadow-lg hover:bg-gray-100 transition-colors"
                        aria-label="Next service"
                    >
                        <ChevronRight className="w-6 h-6 text-gray-600" />
                    </button>
                </div>
                
                {/* Pagination Indicators */}
                <div className="flex justify-center mt-8 space-x-2">
                    {services.map((_, index) => (
                        <button
                            key={index}
                            className={`w-3 h-3 rounded-full transition-colors ${
                                index === currentIndex ? 'bg-blue-500' : 'bg-gray-300'
                            }`}
                            onClick={() => scrollToIndex(index)}
                            aria-label={`Go to slide ${index + 1}`}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default ServicesShowcase;