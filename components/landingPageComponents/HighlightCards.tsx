"use client";
import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { ChevronRight, CheckCircle } from "lucide-react";

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

export interface ColorMap {
    [key: string]: CardColors;
}

export interface CTAType {
    text: string;
    link: string;
}

export interface CardFeature {
    title: string;
    icon: React.ReactNode;
    color: string;
    badge: string;
    description: string;
    features: string[];
    cta: CTAType; // Changed from string to object
}

interface HighlightCardsProps {
    cards: CardFeature[];
    colorMap: ColorMap;
}

export default function HighlightCards({ cards, colorMap }: HighlightCardsProps) {
    const [activeCard, setActiveCard] = useState<number | null>(null);
    const containerRef = useRef<HTMLDivElement | null>(null);

    // Intersection animations
    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry, index) => {
                    if (entry.isIntersecting) {
                        setTimeout(() => {
                            const target = entry.target as HTMLElement;
                            target.classList.add("opacity-100", "translate-y-0");
                            target.classList.remove("opacity-0", "translate-y-8");
                        }, index * 150);
                    }
                });
            },
            { threshold: 0.2 }
        );

        const cardEls = document.querySelectorAll(".feature-card");
        cardEls.forEach((card) => {
            observer.observe(card);
            card.classList.add("opacity-0", "translate-y-8");
        });

        return () => observer.disconnect();
    }, []);

    // Parallax scroll
    useEffect(() => {
        const handleScroll = () => {
            if (!containerRef.current) return;
            const cardEls = containerRef.current.querySelectorAll<HTMLElement>(".feature-card");
            const scrollPosition = window.scrollY;

            cardEls.forEach((card, index) => {
                const speed = 0.03;
                const yPos = -scrollPosition * speed * (index * 0.3 + 1);
                card.style.transform = `translateY(${yPos}px) translateZ(0)`;
            });
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <div className="relative z-20 pb-20 pt-40 px-4 overflow-hidden">
            {/* Background blobs */}
            {/* <div className="absolute top-0 left-1/4 w-64 h-64 bg-blue-400 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
            <div className="absolute top-0 right-1/4 w-64 h-64 bg-purple-400 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>
            <div className="absolute bottom-0 left-1/3 w-64 h-64 bg-pink-400 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-4000"></div> */}

            <div ref={containerRef} className="container mx-auto mt-2 relative max-w-6xl">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
                    {cards.map((card, index) => {
                        const isActive = activeCard === index;
                        const colors = colorMap[card.color];

                        return (
                            <div
                                key={index}
                                className={`feature-card bg-white rounded-xl  shadow-lg overflow-hidden mt-8 transition-all duration-500 transform ${isActive ? "shadow-2xl scale-105" : "hover:shadow-xl hover:-translate-y-2"
                                    }`}
                                onMouseEnter={() => setActiveCard(index)}
                                onMouseLeave={() => setActiveCard(null)}
                            >
                                <div className={`h-2 ${colors.bg} transition-all duration-300 ${isActive ? "h-3" : ""}`}></div>
                                <div className={`p-6 transition-all duration-300 ${colors.hoverBg}`}>
                                    <div
                                        className={`${colors.iconBg} inline-flex p-3 rounded-full mb-4 transition-all duration-500 ${isActive ? "animate-pulse" : ""
                                            }`}
                                    >
                                        <div className={`${colors.iconText}`}>{card.icon}</div>
                                    </div>

                                    <h3 className="text-xl font-bold mb-3 flex items-center">
                                        {card.title}
                                        <span
                                            className={`ml-2 px-2 py-1 ${colors.badgeBg} ${colors.badgeText} text-xs rounded-md transition-all duration-300 ${isActive ? "animate-pulse" : ""
                                                }`}
                                        >
                                            {card.badge}
                                        </span>
                                    </h3>

                                    <p className="text-gray-600 mb-4">{card.description}</p>

                                    <ul className="space-y-2 mb-6">
                                        {card.features.map((feature, featureIndex) => (
                                            <li key={featureIndex} className="flex items-center text-sm text-gray-600">
                                                <CheckCircle className={`w-4 h-4 mr-2 ${colors.checkIcon}`} />
                                                {feature}
                                            </li>
                                        ))}
                                    </ul>

                                    {/* ✅ Now using Next.js Link */}
                                    <Link
                                        href={card.cta.link}
                                        className={`group inline-flex items-center font-semibold ${colors.textAccent} ${colors.hoverText} transition-all duration-300`}
                                    >
                                        {card.cta.text}
                                        <ChevronRight
                                            className={`ml-2 transition-all duration-300 ${isActive ? "translate-x-1" : "group-hover:translate-x-1"
                                                }`}
                                        />
                                    </Link>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>

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
