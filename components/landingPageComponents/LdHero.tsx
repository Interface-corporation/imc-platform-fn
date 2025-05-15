'use client';
import { useState, useEffect, useRef } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import background1 from '@/public/cover/shipping.jpg';
import background2 from '@/public/cover/tech_code.jpg';
import background3 from '@/public/cover/shop_oline.jpg';

export default function HeroSection() {
    const [isVisible, setIsVisible] = useState(false);
    const [typedText, setTypedText] = useState('');
    const [stats, setStats] = useState({ years: 0, clients: 0, products: 0, support: '' });
    const [currentSlide, setCurrentSlide] = useState(0);

    const heroContent = [
        {
            title: "Global Logistics Solutions",
            subtext: "From airline tickets for global travelers to international cargo shipping, IMC delivers a seamless logistics experience optimized supply chains, real-time tracking, and custom clearance you can trust",
            backgroundColor: "from-purple-900/20 to-purple-900/90",
        },
        {
            title: "Cutting-Edge Technology Integration",
            subtext: "Transforming businesses with innovative digital solutions and smart automations with software development, AI solution, graphic design",
            backgroundColor: "from-blue-900/20 to-blue-900/90",
        },
        {
            title: "Online Shopping and Service Delivery Platform",
            subtext: "Revolutionizing online retail with powerful, user-friendly marketplace solutions",
            backgroundColor: "from-emerald-900/20 to-emerald-900/90",
        }
    ];

    const fullText = heroContent[currentSlide].title;
    const targetStats = { years: 15, clients: 400, products: 250, support: '24/7' };
    const featureCardsRef = useRef(null);
    const statsRef = useRef(null);
    const backgroundImages = [background1, background2, background3];

    const changeSlide = (direction: 'next' | 'prev') => {
        setTypedText('');
        setCurrentSlide((prev) => {
            if (direction === 'next') return prev === 2 ? 0 : prev + 1;
            else return prev === 0 ? 2 : prev - 1;
        });
    };

    useEffect(() => {
        const interval = setInterval(() => {
            setTypedText('');
            setCurrentSlide((prev) => (prev === 2 ? 0 : prev + 1));
        }, 8000);
        return () => clearInterval(interval);
    }, []);

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
    }, [isVisible]);

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
                        <div className={`absolute inset-0 bg-gradient-to-r ${heroContent[index].backgroundColor}`}></div>
                    </div>
                ))}
            </div>

            {/* Navigation Arrows */}
            <button
                onClick={() => changeSlide('prev')}
                className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/20 hover:bg-white/40 text-white rounded-full p-3 z-10"
                aria-label="Previous slide"
            >
                <ChevronLeft size={24} />
            </button>
            <button
                onClick={() => changeSlide('next')}
                className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/20 hover:bg-white/40 text-white rounded-full p-3 z-10"
                aria-label="Next slide"
            >
                <ChevronRight size={24} />
            </button>

            {/* Dots Indicator */}
            <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex gap-3 z-10">
                {backgroundImages.map((_, index) => (
                    <button
                        key={index}
                        onClick={() => setCurrentSlide(index)}
                        className={`w-3 h-3 rounded-full ${currentSlide === index ? 'bg-white w-5' : 'bg-white/40'}`}
                    />
                ))}
            </div>

            {/* Hero Text Content */}
            <div className="relative z-10 container mx-auto px-4 py-24 flex flex-col items-center text-white text-center">
                <span className="bg-white/20 backdrop-blur-sm text-white px-3 py-1 text-sm rounded-full font-semibold">
                    All-in-One Business Solutions
                </span>
                <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold mt-4">
                    {typedText}
                    <span className="inline-block w-1 h-8 ml-1 bg-white animate-blink"></span>
                </h1>
                <p className="mt-4 text-white/90 max-w-3xl text-base sm:text-lg">
                    {heroContent[currentSlide].subtext}
                </p>
                <div className="flex flex-col sm:flex-row gap-4 mt-6">
                    <Link href="/landingPage">
                        <button className="bg-white text-blue-900 px-6 py-3 rounded-lg font-semibold hover:bg-blue-100 transition">
                            Explore Services
                        </button>
                    </Link>
                    <Link href="/contact">
                        <button className="border border-white text-white px-6 py-3 rounded-lg font-semibold hover:bg-white/10 transition">
                            Contact Us
                        </button>
                    </Link>
                </div>

                {/* Stats Section */}
                <div
                    ref={statsRef}
                    className="mt-12 grid grid-cols-2 sm:grid-cols-4 gap-6 text-white font-semibold text-center"
                >
                    <div>
                        <p className="text-3xl sm:text-4xl">{stats.years}+</p>
                        <p className="text-sm sm:text-base">Years Experience</p>
                    </div>
                    <div>
                        <p className="text-3xl sm:text-4xl">{stats.clients}+</p>
                        <p className="text-sm sm:text-base">Happy Clients</p>
                    </div>
                    <div>
                        <p className="text-3xl sm:text-4xl">{stats.products}+</p>
                        <p className="text-sm sm:text-base">Products Delivered</p>
                    </div>
                    <div>
                        <p className="text-3xl sm:text-4xl">{stats.support}</p>
                        <p className="text-sm sm:text-base">Support</p>
                    </div>
                </div>
            </div>
        </section>
    );
}
