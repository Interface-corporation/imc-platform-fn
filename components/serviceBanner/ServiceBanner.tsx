import React, { useState, useEffect, useRef } from 'react';
import Image, { StaticImageData } from "next/image";
import massageChair from '@/public/services/massageChair.jpg'
import calmLogostic from '@/public/services/calmLogostic.jpg'
import technology from '@/public/services/techEmp.jpg'
import eShop from '@/public/services/eshop2.jpg'
import autoService from '@/public/services/autoService.jpg'
import {   FaLaptopCode, FaCouch, FaShoppingBag, FaPlaneDeparture, FaCarSide } from "react-icons/fa";


// Define the props interface for the ServiceBanner component
interface ServiceBannerProps {
    mainTitle?: string;
    subtitle?: string;
    highlightedText?: string;
    description?: string;
    buttonText?: string;
    websiteUrl?: string;
    logoText?: string;
    imageUrl?: string | StaticImageData;
    websiteLink?: string; // ✅ added
    onButtonClick?: () => void;
    backgroundColor?: string;
    accentColor?: string;
    isActive?: boolean;
}

// Define the service configuration type
interface ServiceConfig {
    mainTitle: string;
    subtitle: string;
    highlightedText: string;
    description: string;
    buttonText: string;
    logoText: string;
    backgroundColor?: string;
    accentColor?: string;
    imageUrl: StaticImageData;
    icon: JSX.Element;
    websiteLink?: string; // ✅ added
}

const ServiceBanner: React.FC<ServiceBannerProps> = ({
    mainTitle = "start up",
    subtitle = "online business",
    highlightedText = "STRATEGY",
    description = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat.",
    buttonText = "LEARN MORE",
    websiteUrl = "www.imc.rw",
    logoText = "IMC",
    imageUrl = "https://images.unsplash.com/photo-1494790108755-2616c6d4e6e8?ixlib=rb-4.0.3&auto=format&fit=crop&w=687&q=80",
    onButtonClick = () => { },
    backgroundColor = "from-[#25A4D9] to-blue-600",
    accentColor = "from-blue-600 to-[#25A4D9]",
    isActive = true
}) => {
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
    const [imageMousePos, setImageMousePos] = useState({ x: 50, y: 50 });
    const [isImageHovered, setIsImageHovered] = useState(false);
    const [imageLoaded, setImageLoaded] = useState(false);
    const containerRef = useRef<HTMLDivElement>(null);
    const imageRef = useRef<HTMLDivElement>(null);
    
    

    const handleMouseMove = (e: React.MouseEvent) => {
        if (containerRef.current) {
            const rect = containerRef.current.getBoundingClientRect();
            setMousePosition({
                x: ((e.clientX - rect.left) / rect.width) * 100,
                y: ((e.clientY - rect.top) / rect.height) * 100,
            });
        }
    };

    const handleImageMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
        if (imageRef.current) {
            const rect = imageRef.current.getBoundingClientRect();
            const x = ((e.clientX - rect.left) / rect.width) * 100;
            const y = ((e.clientY - rect.top) / rect.height) * 100;
            
            setImageMousePos({ x, y });
        }
    };

    const handleImageMouseEnter = () => {
        setIsImageHovered(true);
    };

    const handleImageMouseLeave = () => {
        setIsImageHovered(false);
        setImageMousePos({ x: 50, y: 50 });
    };

    return (
        <div
            ref={containerRef}
            onMouseMove={handleMouseMove}
            className="relative overflow-hidden bg-gradient-to-br from-slate-900 via-red-900 to-blue-50 min-h-screen md:min-h-[600px] flex items-center py-8 md:py-0"
            style={{
                background: `radial-gradient(circle at ${mousePosition.x}% ${mousePosition.y}%, rgba(37, 164, 217, 0.1) 0%, transparent 50%)`
            }}
        >
            {/* Animated cursor follower - only on desktop */}
            <div
                className="hidden md:block absolute w-6 h-6 bg-gradient-to-r from-[#25A4D9] to-blue-500 rounded-full pointer-events-none z-50 transition-all duration-300 ease-out opacity-0 group-hover:opacity-100"
                style={{
                    left: `${mousePosition.x}%`,
                    top: `${mousePosition.y}%`,
                    transform: 'translate(-50%, -50%)',
                }}
            />

            {/* Floating particles - reduced on mobile */}
            {[...Array(6)].map((_, i) => (
                <div
                    key={i}
                    className={`absolute w-2 h-2 bg-gradient-to-r ${backgroundColor} rounded-full opacity-20 animate-float hidden md:block`}
                    style={{
                        left: `${Math.random() * 100}%`,
                        top: `${Math.random() * 100}%`,
                        animationDelay: `${i * 0.5}s`,
                        animationDuration: `${3 + Math.random() * 4}s`
                    }}
                />
            ))}

            {/* Animated decorative dots - mobile responsive */}
            <div className="absolute top-4 left-4 md:top-8 md:left-8 grid grid-cols-4 md:grid-cols-5 gap-1 md:gap-2 opacity-60">
                {[...Array(16)].map((_, i: number) => (
                    <div
                        key={i}
                        className={`w-1 h-1 md:w-1.5 md:h-1.5 bg-gradient-to-r ${backgroundColor} rounded-full animate-pulse`}
                        style={{ animationDelay: `${i * 0.1}s` }}
                    />
                ))}
            </div>

            {/* Premium Logo - mobile responsive */}
            <div className={`absolute top-4 right-4 md:top-8 md:right-8 bg-gradient-to-r ${backgroundColor} text-white px-3 py-2 md:px-6 md:py-3 font-bold text-sm md:text-lg shadow-2xl rounded-lg backdrop-blur-sm border border-white/20 hover:scale-110 transition-all duration-500 hover:shadow-[0_20px_40px_rgba(37,164,217,0.3)]`}>
                <span className="relative z-10">{logoText}</span>
                <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent rounded-lg" />
            </div>

            {/* Dynamic background elements - hidden on mobile for performance */}
            <div className={`hidden md:block absolute top-0 right-0 w-96 h-full bg-gradient-to-l ${backgroundColor} transform skew-x-12 translate-x-32 opacity-80 animate-pulse`} />
            <div className={`hidden lg:block absolute top-20 right-20 w-40 h-40 bg-gradient-to-br ${accentColor} transform rotate-45 opacity-60 animate-spin-slow rounded-3xl`} />
            <div className="hidden md:block absolute bottom-0 left-0 w-80 h-80 bg-gradient-to-r from-blue-100 to-[#25A4D9]/20 rounded-full transform -translate-x-40 translate-y-40 animate-bounce-slow" />

            {/* Mesh gradient overlay */}
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-transparent via-[#25A4D9]/5 to-blue-500/10 pointer-events-none" />

            {/* Animated progress indicators */}
            <div className="absolute bottom-8 md:bottom-16 left-1/2 transform -translate-x-1/2 flex space-x-1 md:space-x-2">
                {[...Array(7)].map((_, i: number) => (
                    <div
                        key={i}
                        className={`w-2 h-0.5 md:w-3 md:h-1 bg-gradient-to-r ${backgroundColor} rounded-full animate-wave`}
                        style={{ animationDelay: `${i * 0.2}s` }}
                    />
                ))}
            </div>

            {/* Main Content Container - Mobile First Layout */}
            <div className="container mx-auto px-4 md:px-8 flex flex-col lg:flex-row lg:items-center lg:justify-between relative z-10 space-y-8 lg:space-y-0">

                {/* Text Content Section - Always First on Mobile */}
                <div className={`w-full lg:flex-1 lg:max-w-lg order-1 lg:order-1 transform transition-all duration-1000 ${isActive ? 'translate-x-0 opacity-100' : '-translate-x-full opacity-0'}`}>
                    <div className="space-y-4 md:space-y-6 text-center lg:text-left">
                        <div className="overflow-hidden">
                            <h1 className={`text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extralight text-gray-800 leading-tight transform transition-all duration-700 delay-200 ${isActive ? 'translate-y-0' : 'translate-y-full'}`}>
                                {mainTitle}
                            </h1>
                        </div>
                        <div className="overflow-hidden">
                            <h2 className={`text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extralight text-gray-700 leading-tight transform transition-all duration-700 delay-400 ${isActive ? 'translate-y-0' : 'translate-y-full'}`}>
                                {subtitle}
                            </h2>
                        </div>
                        <div className="overflow-hidden">
                            <h3 className={`text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black bg-gradient-to-r ${backgroundColor} bg-clip-text text-transparent leading-tight transform transition-all duration-700 delay-600 ${isActive ? 'translate-y-0' : 'translate-y-full'} hover:scale-105 transition-transform cursor-default`}>
                                {highlightedText}
                            </h3>
                        </div>
                    </div>

                    <p className={`text-gray-600 text-base md:text-lg mt-6 md:mt-8 mb-8 md:mb-10 leading-relaxed max-w-lg mx-auto lg:mx-0 transform transition-all duration-700 delay-800 ${isActive ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'} text-center lg:text-left`}>
                        {description}
                    </p>

                    <div className={`transform transition-all duration-700 delay-1000 ${isActive ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'} flex justify-center lg:justify-start`}>
                        
                        <button
                            onClick={onButtonClick}
                            className={`relative overflow-hidden bg-gradient-to-r ${backgroundColor} hover:bg-gradient-to-l text-white px-8 md:px-10 py-3 md:py-4 font-bold text-sm tracking-wider transition-all duration-500 transform hover:scale-110 hover:-translate-y-1 shadow-2xl hover:shadow-[0_25px_50px_rgba(37,164,217,0.4)] rounded-xl group border border-white/20`}
                        >
                            <span className="relative z-10">{buttonText}</span>
                            <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
                        </button>
                        
                    </div>

                    <div className={`flex items-center justify-center lg:justify-start mt-8 md:mt-10 text-gray-600 transform transition-all duration-700 delay-1200 ${isActive ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
                        <div className={`w-6 h-6 md:w-8 md:h-8 mr-3 md:mr-4 bg-gradient-to-r ${backgroundColor} rounded-full flex items-center justify-center shadow-lg`}>
                            <svg viewBox="0 0 24 24" fill="white" className="w-4 h-4 md:w-5 md:h-5">
                                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" />
                            </svg>
                        </div>
                        <span className="text-sm md:text-base font-semibold">{websiteUrl}</span>
                    </div>
                </div>

                {/* Enhanced Image Section with Advanced Effects */}
                <div className={`w-full lg:flex-1 flex justify-center lg:justify-end order-2 lg:order-2 transform transition-all duration-1000 delay-300 ${isActive ? 'translate-x-0 opacity-100' : 'translate-x-full opacity-0'}`}>
                    <div className="relative group">
                        {/* Main Image Container with Advanced Effects */}
                        <div
                            ref={imageRef}
                            className="w-80 sm:w-96 h-64 sm:h-80 lg:h-[500px] relative overflow-hidden rounded-2xl md:rounded-3xl shadow-2xl transition-all duration-700 ease-out cursor-pointer image-container"
                            onMouseMove={handleImageMouseMove}
                            onMouseEnter={handleImageMouseEnter}
                            onMouseLeave={handleImageMouseLeave}
                            style={{
                                transform: isImageHovered 
                                    ? `perspective(1000px) rotateX(${(imageMousePos.y - 50) * 0.1}deg) rotateY(${(imageMousePos.x - 50) * 0.1}deg) translateZ(20px) scale(1.02)`
                                    : 'perspective(1000px) rotateX(0deg) rotateY(0deg) translateZ(0px) scale(1)',
                                boxShadow: isImageHovered 
                                    ? '0 30px 60px rgba(37, 164, 217, 0.3), 0 0 50px rgba(37, 164, 217, 0.1)'
                                    : '0 25px 50px rgba(0, 0, 0, 0.15)',
                            }}
                        >
                            {/* Primary Image with Magnification Effect */}
                            <div 
                                className="absolute inset-0 w-full h-full transition-all duration-700 ease-out"
                                style={{
                                    transform: isImageHovered 
                                        ? `scale(1.15) translate(${(50 - imageMousePos.x) * 0.3}px, ${(50 - imageMousePos.y) * 0.3}px)`
                                        : 'scale(1) translate(0px, 0px)',
                                    transformOrigin: `${imageMousePos.x}% ${imageMousePos.y}%`,
                                }}
                            >
                                {/* Use Next.js Image for both local and string URLs */}
                                <Image
                                    src={imageUrl}   // imageUrl is typed as string | StaticImageData
                                    alt="Service illustration"
                                    className="w-full h-full object-cover transition-all duration-700 ease-out"
                                    style={{
                                        filter: isImageHovered
                                            ? "brightness(1.1) contrast(1.1) saturate(1.2)"
                                            : "brightness(1) contrast(1) saturate(1)",
                                    }}
                                    fill                                // makes Image cover parent (parent is positioned already)
                                    sizes="(max-width: 768px) 100vw, 50vw"
                                    priority
                                    onLoadingComplete={() => setImageLoaded(true)}  // correct callback
                                />
                            </div>

                            {/* Dynamic Gradient Overlay */}
                            <div 
                                className="absolute inset-0 transition-all duration-700 ease-out"
                                style={{
                                    background: isImageHovered 
                                        ? `radial-gradient(circle at ${imageMousePos.x}% ${imageMousePos.y}%, transparent 0%, rgba(37, 164, 217, 0.1) 70%)`
                                        : 'transparent',
                                }}
                            />

                            {/* Shimmer Effect */}
                            <div 
                                className={`absolute inset-0 opacity-0 transition-opacity duration-500 ${isImageHovered ? 'opacity-100' : 'opacity-0'}`}
                                style={{
                                    background: `linear-gradient(45deg, transparent 30%, rgba(255, 255, 255, 0.3) 50%, transparent 70%)`,
                                    transform: 'translateX(-100%)',
                                    animation: isImageHovered ? 'shimmer 2s ease-out infinite' : 'none',
                                }}
                            />

                            {/* Interactive Light Reflection */}
                            <div 
                                className="absolute inset-0 transition-all duration-300 ease-out pointer-events-none"
                                style={{
                                    background: isImageHovered 
                                        ? `radial-gradient(circle 300px at ${imageMousePos.x}% ${imageMousePos.y}%, rgba(255, 255, 255, 0.2) 0%, transparent 50%)`
                                        : 'transparent',
                                }}
                            />

                            {/* Animated Border Glow */}
                            <div 
                                className="absolute inset-0 rounded-2xl md:rounded-3xl transition-all duration-700 ease-out"
                                style={{
                                    boxShadow: isImageHovered 
                                        ? `inset 0 0 0 2px rgba(37, 164, 217, 0.6), 0 0 30px rgba(37, 164, 217, 0.4)`
                                        : 'inset 0 0 0 1px rgba(255, 255, 255, 0.1)',
                                }}
                            />

                            {/* Loading State */}
                            {!imageLoaded && (
                                <div className="absolute inset-0 bg-gradient-to-br from-gray-200 to-gray-300 animate-pulse flex items-center justify-center">
                                    <div className="w-16 h-16 border-4 border-[#25A4D9] border-t-transparent rounded-full animate-spin"></div>
                                </div>
                            )}
                        </div>

                        {/* Enhanced Floating Decorative Elements */}
                        <div 
                            className={`absolute -top-3 -right-3 md:-top-6 md:-right-6 w-8 h-8 md:w-12 md:h-12 bg-gradient-to-br ${backgroundColor} rounded-xl md:rounded-2xl shadow-xl transition-all duration-700 ease-out`}
                            style={{
                                transform: isImageHovered 
                                    ? 'translateY(-10px) rotateZ(360deg) scale(1.2)' 
                                    : 'translateY(0px) rotateZ(0deg) scale(1)',
                                opacity: isImageHovered ? 1 : 0.8,
                            }}
                        />
                        <div 
                            className={`absolute -bottom-3 -left-3 md:-bottom-6 md:-left-6 w-6 h-6 md:w-8 md:h-8 bg-gradient-to-br ${accentColor} rounded-lg md:rounded-xl shadow-lg transition-all duration-700 ease-out`}
                            style={{
                                transform: isImageHovered 
                                    ? 'translateY(10px) rotateZ(-360deg) scale(1.3)' 
                                    : 'translateY(0px) rotateZ(0deg) scale(1)',
                                opacity: isImageHovered ? 1 : 0.6,
                            }}
                        />
                        <div 
                            className={`hidden md:block absolute top-1/2 -right-4 w-6 h-16 bg-gradient-to-b ${backgroundColor} rounded-full transition-all duration-700 ease-out`}
                            style={{
                                opacity: isImageHovered ? 0.8 : 0.4,
                                transform: isImageHovered ? 'scale(1.5)' : 'scale(1)',
                            }}
                        />

                        {/* Enhanced Ripple Effect */}
                        {isImageHovered && (
                            <div 
                                className="absolute rounded-2xl md:rounded-3xl pointer-events-none"
                                style={{
                                    left: `${imageMousePos.x}%`,
                                    top: `${imageMousePos.y}%`,
                                    transform: 'translate(-50%, -50%)',
                                    width: '20px',
                                    height: '20px',
                                    background: 'radial-gradient(circle, rgba(37, 164, 217, 0.6) 0%, transparent 70%)',
                                    animation: 'ripple 1.5s ease-out infinite',
                                }}
                            />
                        )}
                    </div>
                </div>
            </div>

            {/* Enhanced Custom CSS animations */}
            <style jsx>{`
                @keyframes float {
                    0%, 100% { transform: translateY(0px) rotate(0deg); }
                    50% { transform: translateY(-20px) rotate(180deg); }
                }
                @keyframes float-reverse {
                    0%, 100% { transform: translateY(0px) rotate(0deg); }
                    50% { transform: translateY(20px) rotate(-180deg); }
                }
                @keyframes wave {
                    0%, 100% { transform: scaleY(1); }
                    50% { transform: scaleY(3); }
                }
                @keyframes spin-slow {
                    from { transform: rotate(0deg); }
                    to { transform: rotate(360deg); }
                }
                @keyframes bounce-slow {
                    0%, 100% { transform: translate(-40px, 40px) scale(1); }
                    50% { transform: translate(-60px, 60px) scale(1.1); }
                }
                @keyframes shimmer {
                    0% { transform: translateX(-100%); }
                    100% { transform: translateX(100%); }
                }
                @keyframes ripple {
                    0% { 
                        width: 20px; 
                        height: 20px; 
                        opacity: 0.8; 
                    }
                    100% { 
                        width: 100px; 
                        height: 100px; 
                        opacity: 0; 
                    }
                }

                .animate-float { animation: float 6s ease-in-out infinite; }
                .animate-float-reverse { animation: float-reverse 4s ease-in-out infinite; }
                .animate-wave { animation: wave 2s ease-in-out infinite; }
                .animate-spin-slow { animation: spin-slow 20s linear infinite; }
                .animate-bounce-slow { animation: bounce-slow 8s ease-in-out infinite; }

                .image-container {
                    will-change: transform, box-shadow;
                    transform-style: preserve-3d;
                }

                .image-container::before {
                    content: '';
                    position: absolute;
                    top: -2px;
                    left: -2px;
                    right: -2px;
                    bottom: -2px;
                    background: linear-gradient(45deg, #25A4D9, #3b82f6, #25A4D9);
                    border-radius: inherit;
                    z-index: -1;
                    opacity: 0;
                    transition: opacity 0.7s ease;
                }

                .image-container:hover::before {
                    opacity: 0.6;
                    animation: rotate-border 3s linear infinite;
                }

                @keyframes rotate-border {
                    0% { transform: rotate(0deg); }
                    100% { transform: rotate(360deg); }
                }

                /* Mobile-specific optimizations */
                @media (max-width: 768px) {
                    .animate-float,
                    .animate-float-reverse,
                    .animate-spin-slow,
                    .animate-bounce-slow {
                        animation-duration: 3s;
                    }

                    .image-container {
                        transform-style: flat;
                    }

                    .image-container:hover {
                        transform: scale(1.05) !important;
                    }
                }

                /* Smooth transitions for all interactive elements */
                * {
                    -webkit-tap-highlight-color: transparent;
                }

                .image-container img {
                    backface-visibility: hidden;
                    -webkit-backface-visibility: hidden;
                }
            `}</style>
        </div>
    );
};

// Premium showcase component with 10-second auto-rotation
const ServiceBannerShowcase: React.FC = () => {
    const services: ServiceConfig[] = [
        {
            mainTitle: "Logistics & ",
            subtitle: "Air Travel",
            highlightedText: "Ticketing",
            description:
                "IMC Ltd provides world-class logistics and air ticketing services designed for both businesses and individual travelers. From fast and secure cargo delivery to seamless flight bookings, we connect Africa to the world with reliability, transparency, and innovation.",
            buttonText: "BOOK & SHIP NOW",
            logoText: "IMC",
            backgroundColor: "from-[#25AAE1] to-blue-600",
            accentColor: "from-[#1E3A5F] to-[#25AAE1]",       // light to medium blue
            imageUrl: calmLogostic,
            websiteLink: "/autospace", // Example link
            icon: <FaPlaneDeparture className="text-2xl text-blue-600" />, // ✈️ air travel focus
        }, 
        {
            mainTitle: "Auto",
            subtitle: "Care & Repair",
            highlightedText: "SERVICES",
            description:
                "IMC Auto offers a complete range of automotive solutions — from certified car sales and rentals to expert repairs, diagnostics, detailing, roadside assistance, and genuine spare parts delivery. Whether it’s keeping your car in top shape or finding your next ride, we’ve got you covered with reliability, transparency, and 24/7 support.",
            buttonText: "BOOK AUTO SERVICE",
            logoText: "IMC",
            backgroundColor: "from-[#25AAE1] to-blue-600",
            accentColor: "from-[#1E3A5F] to-[#25AAE1]",
            imageUrl: autoService,
            websiteLink: "/autospace", 
            icon: <FaCarSide className="text-2xl text-blue-600" />, // 🚘 modern auto icon
        },

        {
            mainTitle: "Digital",
            subtitle: "Solutions",
            highlightedText: "Technology",
            description:
                "From software and web development to graphic design and digital marketing — we deliver world-class digital solutions tailored to your business.",
            buttonText: "START A PROJECT",
            logoText: "IMC",
            backgroundColor: "from-[#25AAE1] to-blue-600",
            accentColor: "from-[#1E3A5F] to-[#25AAE1]",
            imageUrl: technology,
            websiteLink: "/technology", 
            icon: <FaLaptopCode className="text-2xl text-blue-600" />, // 💻 replaced
        },
        {
            mainTitle: "Smart",
            subtitle: "Relax Corner",
            highlightedText: "Booking",
            description:
                "Unwind with our smart massage chairs, wellness corner, and hotel booking services designed to give you peace, comfort, and balance.",
            buttonText: "RELAX NOW",
            logoText: "IMC",
            backgroundColor: "from-[#25AAE1] to-blue-600",
            accentColor: "from-[#1E3A5F] to-[#25AAE1]",
            imageUrl: massageChair,
            websiteLink: "/relax", 
            icon: <FaCouch className="text-2xl text-blue-600" />, // 🛋 replaced
        },
        {
            mainTitle: "Online",
            subtitle: "Shopping",
            highlightedText: "E-Shop",
            description:
                "Shop or request custom products from trusted vendors. Our e-commerce platform is designed to give you more control, choice, and convenience.",
            buttonText: "SHOP NOW",
            logoText: "IMC",
            backgroundColor: "from-[#25AAE1] to-blue-600",
            accentColor: "from-[#1E3A5F] to-[#25AAE1]",
            imageUrl: eShop,
            websiteLink: "/landingPage", 
            icon: <FaShoppingBag className="text-2xl text-blue-600" />, // 🛍 replaced
        },
    ];


    const [currentService, setCurrentService] = useState<number>(0);
    const [progress, setProgress] = useState<number>(0);
    const [isPaused, setIsPaused] = useState<boolean>(false);
  

    

    useEffect(() => {
        if (isPaused) return;

        const interval = setInterval(() => {
            setProgress((prev) => {
                if (prev >= 100) {
                    setCurrentService((current) => (current + 1) % services.length);
                    return 0;
                }
                return prev + 1; // 10 seconds = 100 / 1 * 100ms
            });
        }, 100);

        return () => clearInterval(interval);
    }, [isPaused, services.length]);

    const handleServiceChange = (index: number): void => {
        setCurrentService(index);
        setProgress(0);
    };

   
  

    const handleButtonClick = (): void => {
        const link = services[currentService].websiteLink || "/";
        if (typeof window !== "undefined") {
            window.location.href = link; // ✅ works in browser and avoids NextRouter issue
        }
    };
    return (
        <div className="min-h-[70vh] lg:min-h-[30vh]  bg-gradient-to-br from-slate-50 to-blue-50">
            {/* Hero Banner */}
            <ServiceBanner
                {...services[currentService]}
                onButtonClick={handleButtonClick}
                isActive={true}
            />

            {/* Mobile-First Navigation */}
            <div className="bg-white/80 backdrop-blur-lg border-t border-white/20 sticky bottom-0 z-40">
                <div className="container mx-auto px-4 md:px-8 py-4 md:py-6">
                    {/* Mobile: Stack vertically, Desktop: Horizontal */}
                    <div className="flex flex-wrap justify-center items-center gap-3 md:gap-6">
                        {services.map((service, index: number) => (
                            <button
                                key={index}
                                onClick={() => handleServiceChange(index)}
                                onMouseEnter={() => setIsPaused(true)}
                                onMouseLeave={() => setIsPaused(false)}
                                className={`relative group flex items-center space-x-2 md:space-x-3 px-4 md:px-6 py-3 md:py-4 rounded-xl md:rounded-2xl font-semibold text-xs md:text-sm transition-all duration-500 transform hover:scale-105 ${currentService === index
                                        ? 'bg-gradient-to-r from-[#25A4D9] to-blue-600 text-white shadow-2xl shadow-[#25A4D9]/30'
                                        : 'bg-white/60 text-gray-700 hover:bg-gradient-to-r hover:from-[#25A4D9]/10 hover:to-blue-600/10 hover:text-[#25A4D9] shadow-lg'
                                    }`}
                            >
                                <span className="text-sm md:text-lg">{service.icon}</span>
                                <span className="hidden sm:block">{service.highlightedText}</span>
                                {currentService === index && (
                                    <div
                                        className="absolute bottom-0 left-0 h-1 bg-gradient-to-r from-white/80 to-white/40 rounded-full transition-all duration-100"
                                        style={{ width: `${progress}%` }}
                                    />
                                )}
                                <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl md:rounded-2xl" />
                            </button>
                        ))}
                    </div>

                    {/* Auto-rotation indicator - mobile optimized */}
                    {/* <div className="flex justify-center mt-3 md:mt-4">
                        <div className="flex items-center text-xs text-gray-500 bg-white/60 px-3 py-2 rounded-full">
                            <div className="w-2 h-2 bg-[#25A4D9] rounded-full animate-pulse mr-2" />
                            <span className="hidden sm:inline">Auto-rotating every 10 seconds</span>
                            <span className="sm:hidden">Auto 10s</span>
                        </div>
                    </div> */}
                </div>
            </div>
        </div>
    );
};

export default ServiceBannerShowcase;