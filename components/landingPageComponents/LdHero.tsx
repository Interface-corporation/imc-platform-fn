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

    // Define hero content based on the background image
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

    // Change slide
    const changeSlide = (direction: 'next' | 'prev') => {
        if (direction === 'next') {
            setCurrentSlide((prev) => (prev === 2 ? 0 : prev + 1));
        } else {
            setCurrentSlide((prev) => (prev === 0 ? 2 : prev - 1));
        }
        setTypedText(''); // Reset typing effect
    };

    // Auto rotate slides
    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentSlide((prev) => (prev === 2 ? 0 : prev + 1));
            setTypedText(''); // Reset typing effect
        }, 8000);
        return () => clearInterval(interval);
    }, []);

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

    // Observer for visibility
    useEffect(() => {
        setIsVisible(true);
        const observer = new IntersectionObserver(
            entries => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        setIsVisible(true);
                        entry.target.classList.add('animate-fadeIn');
                    }
                });
            },
            { threshold: 0.1 }
        );

        if (featureCardsRef.current) observer.observe(featureCardsRef.current);
        if (statsRef.current) observer.observe(statsRef.current);

        return () => {
            if (featureCardsRef.current) observer.unobserve(featureCardsRef.current);
            if (statsRef.current) observer.unobserve(statsRef.current);
        };
    }, []);

    // Stats animation
    useEffect(() => {
        if (!isVisible) return;
        const interval = setInterval(() => {
            setStats(prev => {
                const years = Math.min(prev.years + 1, targetStats.years);
                const clients = Math.min(prev.clients + 25, targetStats.clients);
                const products = Math.min(prev.products + 25, targetStats.products);
                return {
                    ...prev,
                    years,
                    clients,
                    products,
                    support: years >= targetStats.years ? targetStats.support : prev.support
                };
            });
        }, 100);
        return () => clearInterval(interval);
    }, [isVisible]);

    // Background images array
    const backgroundImages = [background1, background2, background3];

    return (
      
          

        <section className="relative min-h-screen overflow-hidden">
            {/* Full background image */}
            <div className="absolute inset-0 w-full h-full">
                <div className="relative w-full h-full">
                    {backgroundImages.map((bg, index) => (
                        <div
                            key={index}
                            className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${currentSlide === index ? 'opacity-100' : 'opacity-0'
                                }`}
                        >
                            <Image
                                src={bg}
                                alt={`Background ${index + 1}`}
                                fill
                                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 100vw, 100vw"
                                quality={100}
                                priority
                                className="object-cover"
                                style={{ objectPosition: 'center' }}
                            />
                            {/* Gradient overlay */}
                            <div className={`absolute inset-0 bg-gradient-to-r ${heroContent[index].backgroundColor}`}></div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Navigation arrows - improved touch targets for mobile */}
            <button
                onClick={() => changeSlide('prev')}
                className="absolute left-2 sm:left-4 top-1/2 transform -translate-y-1/2 bg-white/20 hover:bg-white/40 text-white rounded-full p-2 sm:p-3 z-10 transition duration-300 touch-manipulation"
                aria-label="Previous slide"
            >
                <ChevronLeft size={20} className="sm:w-6 sm:h-6" />
            </button>
            <button
                onClick={() => changeSlide('next')}
                className="absolute right-2 sm:right-4 top-1/2 transform -translate-y-1/2 bg-white/20 hover:bg-white/40 text-white rounded-full p-2 sm:p-3 z-10 transition duration-300 touch-manipulation"
                aria-label="Next slide"
            >
                <ChevronRight size={20} className="sm:w-6 sm:h-6" />
            </button>

            {/* Slide indicators - improved for touch */}
            <div className="absolute bottom-4 sm:bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-3 z-10">
                {[0, 1, 2].map((index) => (
                    <button
                        key={index}
                        onClick={() => setCurrentSlide(index)}
                        className={`w-2 sm:w-3 h-2 sm:h-3 rounded-full transition-all duration-300 ${currentSlide === index ? 'bg-white w-5 sm:w-6' : 'bg-white/40'
                            }`}
                        aria-label={`Go to slide ${index + 1}`}
                    />
                ))}
            </div>

            {/* Hero Content - improved responsive layout */}
            <div className="container mx-auto px-4 py-16 sm:py-20 md:py-24 min-h-screen flex items-center justify-center relative z-10">
                <div className="w-full max-w-4xl text-center text-white space-y-4 sm:space-y-6 md:space-y-8">
                    <span className="inline-block bg-white/20 backdrop-blur-sm text-white px-3 py-1 text-xs sm:text-sm rounded-full font-semibold">
                        All-in-One Business Solutions
                    </span>

                    {/* Responsive heading with adaptive font sizes */}
                    <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-extrabold leading-tight tracking-tight px-2">
                        {typedText}
                        <span className="inline-block w-0.5 sm:w-1 h-6 sm:h-8 md:h-10 ml-0.5 sm:ml-1 bg-white animate-blink"></span>
                    </h1>

                    {/* Responsive paragraph with improved readability */}
                    <p className="text-base sm:text-lg text-white/90 max-w-xl sm:max-w-2xl mx-auto px-2 leading-relaxed">
                        {heroContent[currentSlide].subtext}
                    </p>

                    {/* Responsive buttons */}
                    <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center mt-6 sm:mt-8 px-4">
                        <Link href="/landingPage" className="inline-block">
                            <button className="w-full bg-white text-blue-900 px-5 py-2.5 sm:px-6 sm:py-3 rounded-lg shadow hover:bg-blue-50 transition hover:scale-105 font-semibold text-sm sm:text-base">
                                Explore Services
                            </button>
                        </Link>
                        <Link href="/contact" className="inline-block">
                            <button className="w-full border border-white text-white px-5 py-2.5 sm:px-6 sm:py-3 rounded-lg hover:bg-white/10 transition font-semibold text-sm sm:text-base">
                                Contact Us
                            </button>
                        </Link>
                    </div>

                    {/* Responsive Stats - adapts to screen size */}
                    <div
                        ref={statsRef}
                        className="grid grid-cols-2 md:flex md:justify-center gap-4 sm:gap-6 md:gap-8 mt-8 sm:mt-10 md:mt-12 text-white px-2"
                    >
                        <div className="text-center">
                            <div className="text-xl sm:text-2xl md:text-3xl font-bold">{stats.years}+</div>
                            <div className="text-xs sm:text-sm uppercase tracking-wider">Years Experience</div>
                        </div>

                        <div className="text-center">
                            <div className="text-xl sm:text-2xl md:text-3xl font-bold">{stats.clients}+</div>
                            <div className="text-xs sm:text-sm uppercase tracking-wider">Clients Worldwide</div>
                        </div>

                        <div className="text-center">
                            <div className="text-xl sm:text-2xl md:text-3xl font-bold">{stats.products}+</div>
                            <div className="text-xs sm:text-sm uppercase tracking-wider">Products</div>
                        </div>

                        <div className="text-center">
                            <div className="text-xl sm:text-2xl md:text-3xl font-bold">{stats.support || '24/7'}</div>
                            <div className="text-xs sm:text-sm uppercase tracking-wider">Support</div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
      
    );
}