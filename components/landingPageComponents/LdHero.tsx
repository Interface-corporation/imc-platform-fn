'use client';
import { useState, useEffect, useRef } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import Image, { StaticImageData } from 'next/image';
import Link from 'next/link';

// Define the type for each hero slide
interface HeroSlide {
    title: string;
    subtext: string;
    backgroundColor: string;
}

// Define the type for the component props
interface HeroSectionProps {
    heroContent: HeroSlide[];
    backgroundImages: StaticImageData[];
    targetStats: { years: number; clients: number; products: number; support: string };
    badgeText?: string;
    primaryCTA?: { text: string; link: string };
    secondaryCTA?: { text: string; link: string };
    autoSlideInterval?: number;
}

export default function HeroSection({
    heroContent,
    backgroundImages,
    targetStats,
    badgeText = 'All-in-One Business Solutions',
    primaryCTA = { text: 'Explore Services', link: '/landingPage' },
    secondaryCTA = { text: 'Contact Us', link: '/contact' },
    autoSlideInterval = 8000
}: HeroSectionProps) {
    const [isVisible, setIsVisible] = useState(false);
    const [typedText, setTypedText] = useState('');
    const [stats, setStats] = useState({ years: 0, clients: 0, products: 0, support: '' });
    const [currentSlide, setCurrentSlide] = useState(0);

    const featureCardsRef = useRef<HTMLDivElement | null>(null);
    const statsRef = useRef<HTMLDivElement | null>(null);

    const fullText = heroContent[currentSlide]?.title || '';

    const changeSlide = (direction: 'next' | 'prev') => {
        setTypedText('');
        setCurrentSlide((prev) => {
            if (direction === 'next') return prev === heroContent.length - 1 ? 0 : prev + 1;
            else return prev === 0 ? heroContent.length - 1 : prev - 1;
        });
    };

    // Auto slide
    useEffect(() => {
        const interval = setInterval(() => {
            setTypedText('');
            setCurrentSlide((prev) => (prev === heroContent.length - 1 ? 0 : prev + 1));
        }, autoSlideInterval);
        return () => clearInterval(interval);
    }, [heroContent.length, autoSlideInterval]);

    // Typing effect
    useEffect(() => {
        setTypedText('');
        let i = 0;
        const typeInterval = setInterval(() => {
            if (i < fullText.length) {
                setTypedText(fullText.substring(0, i + 1));
                i++;
            } else {
                clearInterval(typeInterval);
            }
        }, 50);
        return () => clearInterval(typeInterval);
    }, [fullText, currentSlide]);

    // Observer for animations
    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        setIsVisible(true);
                        entry.target.classList.add('animate-fadeIn');
                    }
                });
            },
            { threshold: 0.1 }
        );

        const featureEl = featureCardsRef.current;
        const statsEl = statsRef.current;

        if (featureEl) observer.observe(featureEl);
        if (statsEl) observer.observe(statsEl);

        return () => {
            if (featureEl) observer.unobserve(featureEl);
            if (statsEl) observer.unobserve(statsEl);
        };
    }, []);

    // Stats animation
    useEffect(() => {
        if (!isVisible) return;
        const interval = setInterval(() => {
            setStats((prev) => {
                const years = Math.min(prev.years + 1, targetStats.years);
                const clients = Math.min(prev.clients + 25, targetStats.clients);
                const products = Math.min(prev.products + 25, targetStats.products);
                return {
                    ...prev,
                    years,
                    clients,
                    products,
                    support: years >= targetStats.years ? targetStats.support : prev.support,
                };
            });
        }, 100);
        return () => clearInterval(interval);
    }, [isVisible, targetStats]);

    return (
        <section className="relative min-h-screen overflow-hidden">
            {/* Background images */}
            <div className="absolute inset-0 w-full h-full">
                {backgroundImages.map((bg, index) => (
                    <div
                        key={index}
                        className={`absolute inset-0 transition-opacity duration-1000 ${currentSlide === index ? 'opacity-100' : 'opacity-0'}`}
                    >
                        <Image
                            src={bg}
                            alt={`Background ${index + 1}`}
                            fill
                            className="object-cover"
                            style={{ objectPosition: 'center' }}
                        />
                        <div className={`absolute inset-0 bg-gradient-to-r ${heroContent[index]?.backgroundColor}`}></div>
                    </div>
                ))}
            </div>

            {/* Navigation Arrows */}
            <button
                onClick={() => changeSlide('prev')}
                className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/20 backdrop-blur-sm hover:bg-white/30 text-white rounded-full p-3 z-20 transition-all duration-300 hover:scale-110"
                aria-label="Previous slide"
            >
                <ChevronLeft size={24} />
            </button>
            <button
                onClick={() => changeSlide('next')}
                className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/20 backdrop-blur-sm hover:bg-white/30 text-white rounded-full p-3 z-20 transition-all duration-300 hover:scale-110"
                aria-label="Next slide"
            >
                <ChevronRight size={24} />
            </button>

            {/* Dots */}
            <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex gap-3 z-20">
                {backgroundImages.map((_, index) => (
                    <button
                        key={index}
                        onClick={() => setCurrentSlide(index)}
                        className={`h-3 rounded-full transition-all duration-300 ${currentSlide === index
                            ? 'bg-white w-8'
                            : 'bg-white/40 w-3 hover:bg-white/60'
                            }`}
                    />
                ))}
            </div>

            {/* Text Content */}
            <div className="absolute inset-0 flex items-center justify-center z-10 pt-32 sm:pt-28 md:pt-32">
                <div className="w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
                    <span className="bg-white/20 backdrop-blur-sm text-white px-3 py-2 text-xs sm:text-sm md:text-base rounded-full font-semibold border border-white/20">
                        {badgeText}
                    </span>

                    <h1 className="mt-6 mb-6 text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-7xl font-extrabold leading-tight tracking-tight">
                        {typedText}
                        <span className="inline-block w-1 h-8 sm:h-10 md:h-12 lg:h-16 ml-1 bg-white animate-blink align-middle"></span>
                    </h1>

                    <p className="mb-8 text-lg sm:text-xl md:text-2xl text-white/90 max-w-4xl mx-auto leading-relaxed">
                        {heroContent[currentSlide]?.subtext}
                    </p>

                    {/* CTA Buttons */}
                    <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
                        <Link href={primaryCTA.link}>
                            <button className="w-full sm:w-auto bg-white text-blue-900 px-8 py-4 rounded-xl font-semibold text-lg hover:bg-blue-50 hover:shadow-lg transform hover:scale-105 transition-all duration-300">
                                {primaryCTA.text}
                            </button>
                        </Link>
                        <Link href={secondaryCTA.link}>
                            <button className="w-full sm:w-auto border-2 border-white text-white px-8 py-4 rounded-xl font-semibold text-lg hover:bg-white/10 hover:shadow-lg transform hover:scale-105 transition-all duration-300 backdrop-blur-sm">
                                {secondaryCTA.text}
                            </button>
                        </Link>
                    </div>

                    {/* Stats */}
                    <div ref={statsRef} className="grid grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 max-w-4xl mx-auto">
                        <div>
                            <p className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-2">{stats.years}+</p>
                            <p className="text-sm sm:text-base lg:text-lg text-white/80">Years Experience</p>
                        </div>
                        <div>
                            <p className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-2">{stats.clients}+</p>
                            <p className="text-sm sm:text-base lg:text-lg text-white/80">Happy Clients</p>
                        </div>
                        <div>
                            <p className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-2">{stats.products}+</p>
                            <p className="text-sm sm:text-base lg:text-lg text-white/80">Products Delivered</p>
                        </div>
                        <div>
                            <p className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-2">{stats.support}</p>
                            <p className="text-sm sm:text-base lg:text-lg text-white/80">Support</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
