import { useState, useEffect, useRef } from 'react';
import { Globe, Code, ShoppingCart, ChevronRight, CheckCircle } from 'lucide-react';

// Define types for our component
interface CardColors {
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

interface ColorMap {
    blue: CardColors;
    green: CardColors;
    pink: CardColors;
}

interface CardFeature {
    title: string;
    icon: React.ReactNode;
    color: 'blue' | 'green' | 'pink';
    badge: string;
    description: string;
    features: string[];
    cta: string;
}

export default function FeatureCards() {
    const [activeCard, setActiveCard] = useState<number | null>(null);
    const containerRef = useRef<HTMLDivElement | null>(null);

    // Intersection Observer for scroll animations
    useEffect(() => {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry, index) => {
                if (entry.isIntersecting) {
                    // Stagger animation for cards
                    setTimeout(() => {
                        const target = entry.target as HTMLElement;
                        target.classList.add('opacity-100', 'translate-y-0');
                        target.classList.remove('opacity-0', 'translate-y-8');
                    }, index * 150);
                }
            });
        }, { threshold: 0.2 });

        const cards = document.querySelectorAll('.feature-card');
        cards.forEach((card) => {
            observer.observe(card);
            // Initial state
            card.classList.add('opacity-0', 'translate-y-8');
        });

        return () => observer.disconnect();
    }, []);

    // Parallax effect on scroll
    useEffect(() => {
        const handleScroll = () => {
            if (!containerRef.current) return;

            const cards = containerRef.current.querySelectorAll<HTMLElement>('.feature-card');
            const scrollPosition = window.scrollY;

            cards.forEach((card, index) => {
                const speed = 0.03;
                const yPos = -scrollPosition * speed * (index * 0.3 + 1);
                card.style.transform = `translateY(${yPos}px) translateZ(0)`;
            });
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const handleCardHover = (index: number): void => {
        setActiveCard(index);
    };

    const handleCardLeave = (): void => {
        setActiveCard(null);
    };

    const cards: CardFeature[] = [
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
            cta: "Explore logistics solutions"
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
            cta: "Discover tech services"
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
            cta: "Shop our solutions"
        }
    ];

    return (
        <div className="relative z-20 pb-20 pt-40 px-4  overflow-hidden">
            {/* Background Gradient Elements */}
            <div className="absolute top-0 left-1/4 w-64 h-64 bg-blue-400 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
            <div className="absolute top-0 right-1/4 w-64 h-64 bg-purple-400 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>
            <div className="absolute bottom-0 left-1/3 w-64 h-64 bg-pink-400 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-4000"></div>

            <div ref={containerRef} className="container mx-auto -mt-24 relative max-w-6xl">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
                    {cards.map((card, index) => {
                        const isActive = activeCard === index;
                        const colorMap: ColorMap = {
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
                                bg: "bg-green-600",           // Main background (deep green)
                                iconBg: "bg-green-100",       // Icon container background (light green)
                                iconText: "text-green-600",   // Icon color
                                textAccent: "text-green-600", // Text highlights
                                hoverBg: "hover:bg-green-50", // On hover background
                                checkIcon: "text-green-500",  // Check icon or similar
                                badgeBg: "bg-green-100",      // Badge background
                                badgeText: "text-green-700",  // Badge text
                                hoverText: "hover:text-green-800", // Text on hover
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
                            }
                        };

                        const colors = colorMap[card.color];

                        return (
                            <div
                                key={index}
                                className={`feature-card bg-white rounded-xl shadow-lg overflow-hidden transition-all duration-500 transform ${isActive ? 'shadow-2xl scale-105' : 'hover:shadow-xl hover:-translate-y-2'}`}
                                onMouseEnter={() => handleCardHover(index)}
                                onMouseLeave={handleCardLeave}
                            >
                                <div className={`h-2 ${colors.bg} transition-all duration-300 ${isActive ? 'h-3' : ''}`}></div>
                                <div className={`p-6 transition-all duration-300 ${colors.hoverBg}`}>
                                    <div className={`${colors.iconBg} inline-flex p-3 rounded-full mb-4 transition-all duration-500 ${isActive ? 'animate-pulse' : ''}`}>
                                        <div className={`${colors.iconText}`}>
                                            {card.icon}
                                        </div>
                                    </div>

                                    <h3 className="text-xl font-bold mb-3 flex items-center">
                                        {card.title}
                                        <span className={`ml-2 px-2 py-1 ${colors.badgeBg} ${colors.badgeText} text-xs rounded-md transition-all duration-300 ${isActive ? 'animate-pulse' : ''}`}>
                                            {card.badge}
                                        </span>
                                    </h3>

                                    <p className="text-gray-600 mb-4 transition-all duration-300">
                                        {card.description}
                                    </p>

                                    <ul className="space-y-2 mb-6">
                                        {card.features.map((feature, featureIndex) => (
                                            <li
                                                key={featureIndex}
                                                className={`flex items-center text-sm text-gray-600 transition-all duration-300 transform ${isActive ? `translate-x-${featureIndex + 1}` : ''}`}
                                                style={{
                                                    transitionDelay: `${featureIndex * 100}ms`,
                                                    transform: isActive ? `translateX(${(featureIndex + 1) * 5}px)` : 'translateX(0)'
                                                }}
                                            >
                                                <CheckCircle className={`w-4 h-4 mr-2 ${colors.checkIcon}`} />
                                                {feature}
                                            </li>
                                        ))}
                                    </ul>

                                    <a
                                        href="#"
                                        className={`group inline-flex items-center font-semibold ${colors.textAccent} ${colors.hoverText} transition-all duration-300`}
                                    >
                                        {card.cta}
                                        <ChevronRight
                                            className={`ml-2 transition-all duration-300 ${isActive ? 'translate-x-1' : 'group-hover:translate-x-1'}`}
                                        />
                                    </a>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>

            {/* Optional: Add a CSS class for the animation delay */}
            <style jsx>{`
        .animation-delay-2000 {
          animation-delay: 2s;
        }
        .animation-delay-4000 {
          animation-delay: 4s;
        }
        @keyframes blob {
          0% {
            transform: translate(0px, 0px) scale(1);
          }
          33% {
            transform: translate(30px, -50px) scale(1.1);
          }
          66% {
            transform: translate(-20px, 20px) scale(0.9);
          }
          100% {
            transform: translate(0px, 0px) scale(1);
          }
        }
        .animate-blob {
          animation: blob 7s infinite;
        }
      `}</style>
        </div>
    );
}