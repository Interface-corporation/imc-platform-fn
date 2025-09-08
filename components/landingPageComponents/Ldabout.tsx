// components/LdAbout.tsx
import React, { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { LucideIcon } from 'lucide-react';
import styles from '@/styles/AboutUs.module.css';

export type LdAboutProps = {
    title?: string;
    elevatorPitch: string;
    mission: { title: string; description: string; icon: LucideIcon };
    vision: { title: string; description: string; icon: LucideIcon };
    image: string;
    ctaLabel?: string;
    ctaLink?: string;
};

const LdAbout: React.FC<LdAboutProps> = ({
    title = "Who We Are",
    elevatorPitch,
    mission,
    vision,
    image,
    ctaLabel = "Learn More About Us",
    ctaLink = "/about",
}) => {
    const [typedText, setTypedText] = useState('');
    const animationFrameRef = useRef<number | null>(null);

    // smooth typing animation for elevator pitch
    useEffect(() => {
        let currentIndex = 0;

        const typeText = () => {
            if (currentIndex <= elevatorPitch.length) {
                setTypedText(elevatorPitch.slice(0, currentIndex));
                currentIndex++;

                // adjust typing speed for smoother effect
                animationFrameRef.current = window.setTimeout(typeText, 60);
            }
        };

        typeText();

        return () => {
            if (animationFrameRef.current) clearTimeout(animationFrameRef.current);
        };
    }, [elevatorPitch]);
    return (
        <section className="relative bg-gradient-to-br from-blue-50 to-indigo-100 py-16 px-4 overflow-hidden">
            {/* Content Container */}
            <div className="relative max-w-6xl mx-auto">
                {/* Elevator Pitch */}
                <div className="text-center mb-12 px-4">
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6 tracking-tight">
                        {title.split(" ").slice(0, -1).join(" ")}{' '}
                        <span className="text-blue-600">{title.split(" ").slice(-1)}</span>
                    </h2>
                    <p className="max-w-3xl mx-auto text-xl text-gray-700 font-medium">
                        {typedText}
                        <span className="animate-blink">|</span>
                    </p>
                </div>

                {/* Main Content */}
                <div className="flex flex-col md:flex-row items-center gap-12">
                    {/* Text Content */}
                    <div className="md:w-1/2 text-center md:text-left z-10 space-y-6">
                        {[mission, vision].map((item, idx) => (
                            <div
                                key={idx}
                                className={`flex items-start space-x-4 bg-white/60 backdrop-blur-sm p-5 rounded-xl shadow-md ${styles.floatingCard}`}
                            >
                                <item.icon className={`flex-shrink-0 w-12 h-12 ${idx === 0 ? 'text-blue-600' : 'text-green-600'}`} />
                                <div>
                                    <h3 className="text-xl font-semibold text-gray-900 mb-2">{item.title}</h3>
                                    <p className="text-gray-600">{item.description}</p>
                                </div>
                            </div>
                        ))}

                        {ctaLink && (
                            <Link href={ctaLink}>
                                <button className="mt-8 px-8 py-3 bg-blue-600 text-white rounded-full font-semibold hover:bg-blue-700 transition-all transform hover:scale-105 shadow-lg hover:shadow-xl">
                                    {ctaLabel}
                                </button>
                            </Link>
                        )}
                    </div>

                    {/* Image Container */}
                    <div className={`md:w-1/2 relative group ${styles.imageContainer}`}>
                        {/* Glow Background Layers */}
                        <div className={`absolute -inset-2 bg-blue-500/10 rounded-full ${styles.backgroundPulse}`} />
                        <div className={`absolute -inset-4 bg-purple-500/10 rounded-full ${styles.backgroundPulse}`} />
                        <div className={`absolute -inset-6 bg-green-500/10 rounded-full ${styles.backgroundPulse}`} />

                        {/* Image Wrapper */}
                        <div className={`relative z-10 ${styles.imageWrapper}`}>
                            <Image
                                src={image}
                                alt={title}
                                width={450}
                                height={450}
                                className={`w-full h-auto object-contain relative z-20 ${styles.floatingImage} group-hover:drop-shadow-xl transition-all duration-500`}
                            />
                        </div>

                        {/* Particle Effects */}
                        <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
                            {[...Array(15)].map((_, index) => (
                                <div
                                    key={index}
                                    className={`absolute ${styles.animateParticle} ${styles.particleEffect}`}
                                    style={{
                                        top: `${Math.random() * 100}%`,
                                        left: `${Math.random() * 100}%`,
                                        animationDelay: `${Math.random() * 30}s`,
                                        width: `${Math.random() * 8 + 3}px`,
                                        height: `${Math.random() * 8 + 3}px`,
                                        backgroundColor: ['#3b82f6', '#a855f7', '#22c55e'][Math.floor(Math.random() * 3)],
                                        opacity: Math.random() * 0.7 + 0.3,
                                    }}
                                />
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default LdAbout;
