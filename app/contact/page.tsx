"use client";
import { useForm } from '@formspree/react';
import { Mail, Phone, MapPin, Clock } from 'lucide-react';
import { motion } from 'framer-motion';
import Header from '@/components/Header';
import Footer from '@/components/footer/Footer';

export default function ContactPage() {
    const [state, handleSubmit] = useForm("xvgadglq");

    return (
        <div className="min-h-screen">
            <Header />

            {/* Hero Section */}
            <section className="relative h-[300px] sm:h-[350px] lg:h-[400px] bg-primary">
                <div className="absolute inset-0 bg-gradient-to-r from-primary to-secondary opacity-90" />
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center justify-center text-white relative z-10"
                >
                    <div className="text-center">
                        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6">Contact Us</h1>
                        <p className="text-lg sm:text-xl lg:text-2xl max-w-xl sm:max-w-2xl lg:max-w-3xl mx-auto px-4">
                            Any question or remarks? Just write us a message!
                        </p>
                    </div>
                </motion.div>
            </section>

            {/* Contact Section */}
            <section className="py-12 sm:py-16 lg:py-24 bg-gray-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-5">
                        {/* Contact Information */}
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            className="bg-primary p-6 sm:p-8 lg:p-12 rounded-xl sm:rounded-2xl text-white shadow-xl order-2 lg:order-1"
                        >
                            <h2 className="text-2xl sm:text-3xl font-bold mb-8 sm:mb-12">Contact Information</h2>
                            <div className="space-y-6 sm:space-y-8">
                                <div className="flex items-center space-x-4 sm:space-x-6">
                                    <Phone className="w-6 sm:w-8 h-6 sm:h-8 text-secondary flex-shrink-0" />
                                    <span className="text-base sm:text-lg">+(250) 782290301 </span>
                                </div>
                                <div className="flex items-center space-x-4 sm:space-x-6">
                                    <Mail className="w-6 sm:w-8 h-6 sm:h-8 text-secondary flex-shrink-0" />
                                    <span className="text-base sm:text-lg break-all">interfacecorporation103@gmail.com</span>
                                </div>
                                <div className="flex items-center space-x-4 sm:space-x-6">
                                    <MapPin className="w-6 sm:w-8 h-6 sm:h-8 text-secondary flex-shrink-0" />
                                    <span className="text-base sm:text-lg">Remera, Gisimenti, Ikaze House Floor 2</span>
                                </div>
                                <div className="flex items-start space-x-4 sm:space-x-6">
                                    <Clock className="w-6 sm:w-8 h-6 sm:h-8 text-secondary flex-shrink-0" />
                                    <div className="space-y-2">
                                        <p className="text-base sm:text-lg">Monday - Friday: 9:00 AM - 6:00 PM</p>
                                        <p className="text-base sm:text-lg">Saturday: 10:00 AM - 4:00 PM</p>
                                        <p className="text-base sm:text-lg">Sunday: Closed</p>
                                    </div>
                                </div>
                            </div>
                        </motion.div>

                        {/* Contact Form */}
                        <motion.div
                            initial={{ opacity: 0, x: 20 }}
                            animate={{ opacity: 1, x: 0 }}
                            className="bg-white p-6 sm:p-8 lg:p-12 rounded-xl sm:rounded-2xl shadow-xl order-1 lg:order-2"
                        >
                            <h2 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-6 sm:mb-8">Send us a Message</h2>
                            {state.succeeded ? (
                                <p className="text-green-600 text-lg">Thank you for your message!</p>
                            ) : (
                                <form onSubmit={handleSubmit} className="space-y-6 sm:space-y-8">
                                    <div className="grid sm:grid-cols-2 gap-6">
                                        <div>
                                            <label className="block text-sm font-medium text-gray-700 mb-2">
                                                First Name
                                            </label>
                                            <input
                                                type="text"
                                                name="firstName"
                                                className="w-full px-3 sm:px-4 py-2 sm:py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                                                placeholder="John"
                                                required
                                                disabled={state.submitting}
                                            />
                                        </div>
                                        <div>
                                            <label className="block text-sm font-medium text-gray-700 mb-2">
                                                Last Name
                                            </label>
                                            <input
                                                type="text"
                                                name="lastName"
                                                className="w-full px-3 sm:px-4 py-2 sm:py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                                                placeholder="Doe"
                                                required
                                                disabled={state.submitting}
                                            />
                                        </div>
                                    </div>
                                    <div className="grid sm:grid-cols-2 gap-6">
                                        <div>
                                            <label className="block text-sm font-medium text-gray-700 mb-2">
                                                E-mail
                                            </label>
                                            <input
                                                    type="email"
                                                    name="email"
                                                className="w-full px-3 sm:px-4 py-2 sm:py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                                                placeholder="john@gmail.com"
                                                required
                                                disabled={state.submitting}
                                            />
                                        </div>
                                        <div>
                                            <label className="block text-sm font-medium text-gray-700 mb-2">
                                                Telephone
                                            </label>
                                            <input
                                                type="number"
                                                    name="Telephone"
                                                className="w-full px-3 sm:px-4 py-2 sm:py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                                                placeholder="+250782290301"
                                                required
                                                disabled={state.submitting}
                                            />
                                        </div>
                                    </div>
                                   
                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 mb-2">
                                            Subject
                                        </label>
                                        <input
                                            type="text"
                                            name="subject"
                                            className="w-full px-3 sm:px-4 py-2 sm:py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                                            placeholder="How can we help?"
                                            required
                                            disabled={state.submitting}
                                        />
                                    </div>
                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 mb-2">
                                            Message
                                        </label>
                                        <textarea
                                            name="message"
                                            className="w-full px-3 sm:px-4 py-2 sm:py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent h-32 sm:h-40"
                                            placeholder="Write your message here..."
                                            required
                                            disabled={state.submitting}
                                        />
                                    </div>
                                    <button
                                        type="submit"
                                        disabled={state.submitting}
                                        className="w-full bg-secondary hover:bg-secondary/80 text-white font-bold py-3 sm:py-4 px-4 sm:px-6 rounded-lg transition-colors disabled:opacity-50 text-base sm:text-lg"
                                    >
                                        {state.submitting ? 'Sending...' : 'Send Message'}
                                    </button>
                                </form>
                            )}
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Map Section */}
            <motion.section
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5 }}
                className="h-[400px] sm:h-[450px] lg:h-[500px]"
            >
                
 
               <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15955.706948203695!2d30.0892599!3d-1.9528542!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x19dca70019ec04db%3A0xc640c85bb39ec8ce!2sIKAZE%20HOUSE!5e0!3m2!1sen!2srw!4v1714389917658!5m2!1sen!2srw"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    className="filter grayscale hover:grayscale-0 transition-all duration-300"
                />

            </motion.section>

            <Footer />
        </div>
    )
}