"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Send } from "lucide-react";
import Image from "next/image";

export function FooterNewsletter() {
    const [email, setEmail] = useState("");
    const [isHovered, setIsHovered] = useState(false);

    return (
        <motion.div
            variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0 },
            }}
            className="space-y-6"
        >
            <motion.div className="space-y-6">
                <div className="w-32">
                    <Image
                        src="/images/logo.png"
                        alt="IMC Logo"
                        width={160}
                        height={60}
                    />
                </div>
           
            </motion.div>
            <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.5 }}
            >
                <h3 className="text-2xl sm:text-3xl font-bold bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                    Stay Updated
                </h3>
                <p className="mt-2 text-gray-300">
                    Subscribe to our newsletter for exclusive deals and updates.
                </p>
            </motion.div>

            <motion.form
                className="relative max-w-md"
                onSubmit={(e) => e.preventDefault()}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
            >
                <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your email"
                    className="w-full px-4 py-3 rounded-lg bg-white/10 backdrop-blur-sm 
            border border-white/20 text-white placeholder-gray-400
            focus:outline-none focus:ring-2 focus:ring-[#25aae1] focus:border-transparent
            transition-all duration-300"
                />
                <motion.button
                    type="submit"
                    className="absolute right-2 top-1/2 -translate-y-1/2 
            p-2 rounded-full bg-[#25aae1] text-white
            hover:bg-[#1e90ff] transition-colors duration-300"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    onHoverStart={() => setIsHovered(true)}
                    onHoverEnd={() => setIsHovered(false)}
                >
                    <Send className="w-4 h-4" />
                    <motion.div
                        className="absolute inset-0 rounded-full bg-white pointer-events-none"
                        initial={{ scale: 0, opacity: 0 }}
                        animate={{
                            // scale: isHovered ? 1.5 : 0,
                            scale:0,

                            opacity: isHovered ? 0 : 0,
                           
                        }}
                        transition={{ duration: 0.5 }}
                    />
                </motion.button>
            </motion.form>
        </motion.div>
    );
}