import { useState, useEffect, useRef } from 'react';
import { ArrowLeft, ArrowRight } from 'lucide-react';

import imc from '@/public/partener/minicit.png';
import ur from '@/public/partener/ur.png';
import unipod from '@/public/partener/unipod.png';
import ictchamber from '@/public/partener/ictchamber.png';
import klab from '@/public/partener/klab.png';
import imagine from '@/public/partener/imagine.png';
import kengine from '@/public/partener/kengine.png';
import raisin from '@/public/partener/raisin.png';
import khenz from '@/public/partener/khenz.png';

const partners = [
    { id: 1, name: "MIN ICT", logo: imc, color: "#0057B8" },
    { id: 2, name: "University of Rwanda", logo: ur, color: "#00BFFF" },
    { id: 3, name: "Unipod Rwanda", logo: unipod, color: "#FF6B00" },
    { id: 4, name: "ICT Chamber", logo: ictchamber, color: "#00A0E3" },
    { id: 5, name: "Klab", logo: klab, color: "#41B883" },
    { id: 6, name: "Imagine Foundation", logo: imagine, color: "#7B68EE" },
    { id: 7, name: "K-engine", logo: kengine, color: "#FF4500" },
    { id: 8, name: "Raisin Ltd", logo: raisin, color: "#800080" },
    { id: 9, name: "Khenz", logo: khenz, color: "#006633" },
];

export default function PartnerCarousel() {
    const [activeIndex, setActiveIndex] = useState(0);
    const [isAutoScrolling, setIsAutoScrolling] = useState(true);
    const carouselRef = useRef<HTMLDivElement | null>(null);
    const intervalRef = useRef<NodeJS.Timeout | null>(null);

    const getDisplayPartners = () => {
        return [...partners, ...partners, ...partners];
    };

    const displayPartners = getDisplayPartners();

    const prevPartner = () => {
        setActiveIndex(prev => (prev === 0 ? partners.length : prev - 1));
        pauseAutoScroll();
    };

    const nextPartner = () => {
        setActiveIndex(prev => (prev === partners.length * 2 - 1 ? partners.length : prev + 1));
        pauseAutoScroll();
    };

    const startAutoScroll = () => {
        if (intervalRef.current) clearInterval(intervalRef.current);
        intervalRef.current = setInterval(() => {
            setActiveIndex(prev => (prev >= partners.length * 2 - 1 ? partners.length : prev + 1));
        }, 3000);
    };

    const pauseAutoScroll = () => {
        setIsAutoScrolling(false);
        if (intervalRef.current) {
            clearInterval(intervalRef.current);
            intervalRef.current = null;
        }
        setTimeout(() => setIsAutoScrolling(true), 10000);
    };

    useEffect(() => {
        if (isAutoScrolling) startAutoScroll();
        return () => {
            if (intervalRef.current) clearInterval(intervalRef.current);
        };
    }, [isAutoScrolling]);

    useEffect(() => {
        if (carouselRef.current) {
            const scrollAmount = activeIndex * 240;
            carouselRef.current.scrollTo({ left: scrollAmount, behavior: 'smooth' });
        }
    }, [activeIndex]);

    return (
        <div className="bg-gray-50 py-16 px-4 w-full">
            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-12">
                    <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Partners</h2>
                    <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                        We collaborate with these leading organizations to deliver innovative solutions
                    </p>
                </div>

                <div className="relative">
                    {/* Arrows */}
                    <button
                        onClick={prevPartner}
                        className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-white rounded-full shadow-lg p-2 hover:bg-gray-100 transition-all duration-300"
                        aria-label="Previous partner"
                    >
                        <ArrowLeft size={24} />
                    </button>
                    <button
                        onClick={nextPartner}
                        className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-white rounded-full shadow-lg p-2 hover:bg-gray-100 transition-all duration-300"
                        aria-label="Next partner"
                    >
                        <ArrowRight size={24} />
                    </button>

                    {/* Carousel */}
                    <div
                        ref={carouselRef}
                        className="overflow-hidden mx-12 px-4"
                        style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
                    >
                        <div className="flex py-8">
                            {displayPartners.map((partner, index) => (
                                <div
                                    key={`${partner.id}-${index}`}
                                    className={`flex-shrink-0 w-52 h-40 mx-4 transition-all duration-300 flex items-center justify-center 
                    ${Math.abs(activeIndex - index) < 2 ? 'scale-105' : 'scale-95 opacity-70'}
                    ${activeIndex === index ? 'shadow-xl rounded-lg scale-110' : 'shadow-md rounded-md'}`}
                                    style={{
                                        transform: `translateX(0) scale(${activeIndex === index ? 1.1 : Math.abs(activeIndex - index) < 2 ? 1.05 : 0.95})`,
                                        backgroundColor: 'white',
                                        borderTop: `4px solid ${partner.color}`
                                    }}
                                    onMouseEnter={pauseAutoScroll}
                                >
                                    <div className="flex flex-col items-center justify-center p-4 w-full h-full">
                                        <img
                                            src={partner.logo.src}
                                            alt={`${partner.name} logo`}
                                            className="mb-3 max-h-16 w-auto transition-transform duration-300 hover:scale-110"
                                        />
                                        <p className="font-medium text-gray-800">{partner.name}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Dots */}
                <div className="flex justify-center mt-8">
                    {partners.map((_, idx) => (
                        <button
                            key={idx}
                            className={`h-2 w-2 mx-1 rounded-full focus:outline-none transition-all duration-300 
                ${activeIndex % partners.length === idx ? 'bg-blue-600 w-6' : 'bg-gray-300'}`}
                            onClick={() => {
                                setActiveIndex(idx + partners.length);
                                pauseAutoScroll();
                            }}
                            aria-label={`Go to partner ${idx + 1}`}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
}
