"use client";
import React from "react";
import { motion } from "framer-motion";
import { PlayCircle } from "lucide-react";

interface DemoSectionProps {
    title: string;
    subtitle?: string;
    description: string;
    videoUrl: string; // YouTube embed link
    ctaText?: string;
    ctaLink?: string;
}

const DemoSection: React.FC<DemoSectionProps> = ({
    title,
    subtitle,
    description,
    videoUrl,
    ctaText = "Get Started",
    ctaLink = "/contact",
}) => {
    return (
        <section className="relative bg-gradient-to-br from-blue-50 to-indigo-100 py-20 px-6 overflow-hidden">
            {/* Background accents */}
            <div className="absolute inset-0 pointer-events-none">
                {/* <div className="absolute -top-10 -left-10 w-72 h-72 bg-blue-300 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse" />
                <div className="absolute bottom-0 right-0 w-96 h-96 bg-purple-300 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse delay-1000" /> */}
            </div>

            {/* Container */}
            <div className="relative max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-12">

                {/* Text Section */}
                <motion.div
                    className="flex-1 text-center md:text-left"
                    initial={{ opacity: 0, x: -40 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                >
                    {subtitle && (
                        <span className="inline-block text-sm uppercase font-semibold text-blue-600 mb-2 tracking-wide">
                            {subtitle}
                        </span>
                    )}
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
                        {title}
                    </h2>
                    <p className="text-lg text-gray-600 leading-relaxed mb-6">
                        {description}
                    </p>

                    <a
                        href={ctaLink}
                        className="inline-flex items-center gap-2 px-6 py-3 bg-blue-600 text-white rounded-full font-medium shadow-lg hover:bg-blue-700 hover:scale-105 transform transition-all"
                    >
                        <PlayCircle className="w-5 h-5" />
                        {ctaText}
                    </a>
                </motion.div>

                {/* Video Section */}
                <motion.div
                    className="flex-1 relative w-full h-64 md:h-96 shadow-2xl rounded-2xl overflow-hidden"
                    initial={{ opacity: 0, x: 40 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                >
                    <iframe
                        src={videoUrl}
                        title="Demo Video"
                        className="w-full h-full rounded-2xl"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                    />
                </motion.div>
            </div>
        </section>
    );
};

export default DemoSection;
