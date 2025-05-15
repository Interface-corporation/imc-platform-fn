import React, { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import { Target, Globe } from 'lucide-react';
import styles from '@/styles/AboutUs.module.css';
import aboutImg from '@/public/images/webImage/about1.png';
import Link from 'next/link';

const AboutUsSection = () => {
    const [elevatorText, setElevatorText] = useState('');
    const animationFrameRef = useRef<number | null>(null);
    const fullElevatorPitch = "IMC Ltd is a tech-driven company that leverages AI to deliver innovative digital solutions and logistics services, streamlining public access to technology and enhancing intercontinental trade.";

    useEffect(() => {
        let currentIndex = 0;

        const typeText = () => {
            if (currentIndex <= fullElevatorPitch.length) {
                setElevatorText(fullElevatorPitch.slice(0, currentIndex));
                currentIndex++;
                animationFrameRef.current = requestAnimationFrame(typeText);
            }
        };

        typeText();

        return () => {
            if (animationFrameRef.current) {
                cancelAnimationFrame(animationFrameRef.current);
            }
        };
    }, []);

    return (
        <section className="relative bg-gradient-to-br from-blue-50 to-indigo-100 py-16 px-4 overflow-hidden">
            {/* Animated Background Elements */}
            <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
                <div className={`absolute ${styles.animateBlobSoft} top-10 right-20 w-72 h-72 bg-blue-300 rounded-full mix-blend-multiply filter blur-xl opacity-30`}></div>
                <div className={`absolute ${styles.animateBlobSoft} bottom-10 left-20 w-64 h-64 bg-purple-300 rounded-full mix-blend-multiply filter blur-xl opacity-30`}></div>
            </div>

            {/* Content Container */}
            <div className="relative max-w-6xl mx-auto">
                {/* Elevator Pitch */}
                <div className="text-center mb-12 px-4">
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6 tracking-tight">
                        Who We <span className="text-blue-600">Are</span>
                    </h2>
                    <p className="max-w-3xl mx-auto text-xl text-gray-700 font-medium">
                        {elevatorText}
                        <span className="animate-blink">|</span>
                    </p>
                </div>

                {/* Main Content */}
                <div className="flex flex-col md:flex-row items-center gap-12">
                   

                    {/* Text Content */}
                    <div className="md:w-1/2 text-center md:text-left z-10">
                        <div className="space-y-6 text-gray-700">
                            <div className={`flex items-start space-x-4 bg-white/60 backdrop-blur-sm p-5 rounded-xl shadow-md ${styles.floatingCard}`}>
                                <Target className="text-blue-600 flex-shrink-0 w-12 h-12" />
                                <div>
                                    <h3 className="text-xl font-semibold text-gray-900 mb-2">Our Mission</h3>
                                    <p className="text-gray-600">
                                        At Interface Multiservice Corporation Ltd, our mission is to bridge gaps across industries by delivering seamless logistics, cutting-edge digital solutions, inclusive assistive technologies, premium property services, and exceptional hospitality. We are committed to excellence, customer satisfaction, and sustainable impact through innovation, integrity, and a personalized approach to every service we provide.
                                    </p>
                                </div>
                            </div>

                            <div className={`flex items-start space-x-4 bg-white/60 backdrop-blur-sm p-5 rounded-xl shadow-md ${styles.floatingCard}`}>
                                <Globe className="text-green-600 flex-shrink-0 w-12 h-12" />
                                <div>
                                    <h3 className="text-xl font-semibold text-gray-900 mb-2">Our Vision</h3>
                                    <p className="text-gray-600">
                                        To become a globally trusted hub for innovative, multiservice solutions—empowering individuals and businesses through world-class logistics, transformative technology, and personalized service experiences that shape a smarter, more connected future.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <Link href="/about">
                            <button className="mt-8 px-8 py-3 bg-blue-600 text-white rounded-full font-semibold hover:bg-blue-700 transition-all transform hover:scale-105 shadow-lg hover:shadow-xl">
                                Learn More About Us
                            </button>
                        </Link>

                    </div>
                    {/* Image Container with Interactive Background */}
                    <div className={`md:w-1/2 relative group ${styles.imageContainer}`}>
                        {/* Hover Background Effects */}
                        <div className={`absolute -inset-2 rounded-full ${styles.hoverBackground}`}></div>
                        <div className={`absolute -inset-4 rounded-full ${styles.hoverBackground}`}></div>
                        <div className={`absolute -inset-6 rounded-full ${styles.hoverBackground}`}></div>

                        {/* Background Pulse Effects */}
                        <div className={`absolute -inset-2 bg-blue-500/10 rounded-full ${styles.backgroundPulse}`}></div>
                        <div className={`absolute -inset-4 bg-purple-500/10 rounded-full ${styles.backgroundPulse}`}></div>
                        <div className={`absolute -inset-6 bg-green-500/10 rounded-full ${styles.backgroundPulse}`}></div>

                        {/* Image Wrapper */}
                        <div className={`relative z-10 ${styles.imageWrapper}`}>
                            <Image
                                src={aboutImg}
                                alt="IMC Ltd Company Overview"
                                width={450}  // Reduced width
                                height={450}  // Reduced height
                                className={`w-full h-auto object-contain relative z-20 ${styles.floatingImage} group-hover:drop-shadow-xl transition-all duration-500`}
                            />
                        </div>

                        {/* Interactive Particle-like Effects */}
                        <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
                            {[...Array(20)].map((_, index) => (
                                <div
                                    key={index}
                                    className={`absolute ${styles.animateParticle} ${styles.particleEffect}`}
                                    style={{
                                        top: `${Math.random() * 100}%`,
                                        left: `${Math.random() * 100}%`,
                                        animationDelay: `${Math.random() * 5}s`,
                                        width: `${Math.random() * 10 + 2}px`,
                                        height: `${Math.random() * 10 + 2}px`,
                                        backgroundColor: ['bg-blue-400', 'bg-purple-400', 'bg-green-400'][Math.floor(Math.random() * 3)],
                                        opacity: Math.random() * 0.7 + 0.3
                                    }}
                                ></div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AboutUsSection;