"use client";

import { motion } from "framer-motion";
import { FooterNewsletter } from "./FooterNewsletter";
import { FooterLinks } from "./FooterLinks";
import { FooterSocial } from "./FooterSocial";
import { FooterBottom } from "./FooterBottom";

const Footer = () => {
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2,
                delayChildren: 0.3,
            },
        },
    };

    return (
        <footer className="relative bg-gradient-to-br from-[#1E3A5F] to-[#0b4a64] text-white overflow-hidden">
            {/* Animated background pattern */}
            <motion.div
                className="absolute inset-0 opacity-5"
                initial={{ backgroundPositionY: 0 }}
                animate={{ backgroundPositionY: ["0%", "100%"] }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                style={{
                    backgroundImage: `radial-gradient(circle at center, white 2px, transparent 1px)`,
                    backgroundSize: "24px 24px ",
                }}
            />

            <motion.div
                className="relative container mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20" // Applying same container width as of other sections
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
            >
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8">
                    {/* Newsletter Section */}
                    <div className="lg:col-span-5">
                        <FooterNewsletter />
                    </div>

                    {/* Links Section */}
                    <div className="lg:col-span-7">
                        <FooterLinks />
                    </div>
                </div>

                {/* Social Media Section */}
                <FooterSocial />

                {/* Bottom Section */}
                <FooterBottom />
            </motion.div>
        </footer>
    );
};

export default Footer;