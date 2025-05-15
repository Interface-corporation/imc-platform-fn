import React from 'react';
import { Phone, Globe, Mail, ArrowRight } from 'lucide-react';
import Link from 'next/link';

export default function CTABanner() {
    return (
        <div className="relative w-full min-h-[400px] overflow-hidden group">
            {/* Background Image */}
            <div
                className="absolute inset-0 bg-cover bg-center filter brightness-50 group-hover:brightness-75 transition-all duration-500 ease-in-out"
                style={{
                    backgroundImage: "url('/cover/banner3.jpeg')",
                    backgroundPosition: 'center'
                }}
            />

            {/* Content Overlay */}
            <div className="relative z-10 flex flex-col md:flex-row items-center justify-between px-6 md:px-16 py-8 max-w-7xl mx-auto">
                {/* Text Content */}
                <div className="text-white space-y-4 text-center md:text-left w-full md:w-2/3 transform transition-transform duration-500 group-hover:translate-x-2">
                    <h2 className="text-2xl md:text-4xl font-bold leading-tight mb-4 animate-fadeIn">
                        Ready to Transform Your Experience?
                    </h2>

                    <div className="space-y-3">
                        <div className="flex items-center justify-center md:justify-start space-x-4">
                            <Phone className="text-blue-300 w-8 h-8" />
                            <p className="text-lg font-semibold tracking-wide">
                                +250 782 290 301
                            </p>
                        </div>

                        <div className="flex items-center justify-center md:justify-start space-x-4">
                            <Mail className="text-green-300 w-8 h-8" />
                            <p className="text-lg font-semibold tracking-wide">
                                info@imc.rw
                            </p>
                        </div>

                        <div className="flex items-center justify-center md:justify-start space-x-4">
                            <Globe className="text-purple-300 w-8 h-8" />
                            <p className="text-lg font-semibold tracking-wide">
                                www.imc.rw
                            </p>
                        </div>
                    </div>
                </div>

                {/* CTA Button */}
                <div className="mt-6 md:mt-0 w-full md:w-1/3 flex justify-center md:justify-end">
                    <Link href="/contact">
                        <button
                            className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-full 
        flex items-center space-x-3 shadow-xl transform transition-all duration-300 
        hover:scale-105 hover:shadow-2xl group/button"
                        >
                            <span>Get Started</span>
                            <ArrowRight className="w-5 h-5 transition-transform group-hover/button:translate-x-1" />
                        </button>
                    </Link>
                </div>
            </div>

            {/* Animated Overlay */}
            <div className="absolute inset-0 pointer-events-none">
                <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-blue-900/30 to-blue-700/30 
                opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            </div>
        </div>
    );
}

