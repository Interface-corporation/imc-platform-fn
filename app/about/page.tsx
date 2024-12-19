"use client"
import Image from 'next/image';
import { motion } from 'framer-motion';
import { Building2, Users, Target, Award, LinkedinIcon } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import aboutImg from '@/public/images/webImage/about1.png'
import oldMan from '@/public/images/webImage/man2.jpeg'
import youngBoy from '@/public/images/webImage/men.jpeg'
import busnwoman from '@/public/images/webImage/shippingWoman.jpeg'

export default function AboutPage() {
  // Animation variants remain the same
  const sectionVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  const coreValueVariants = {
    rest: {
      scale: 1,
      rotate: 0,
      boxShadow: "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)"
    },
    hover: {
      scale: 1.05,
      rotate: 2,
      boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)"
    }
  };

  const teamMemberVariants = {
    rest: {
      scale: 1,
      opacity: 0.8
    },
    hover: {
      scale: 1.1,
      opacity: 1,
      transition: { duration: 0.3 }
    }
  };

  return (
    <div className="min-h-screen">
      <Header />
      <motion.div
        initial="hidden"
        animate="visible"
        className="w-full"
      >
        {/* Hero Section - Enhanced tablet responsiveness */}
        <motion.section
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="relative h-[300px] sm:h-[450px] lg:h-[500px] bg-primary overflow-hidden"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-primary to-secondary opacity-90 animate-gradient-x" />
          <div className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-8 h-full flex items-center justify-center text-white relative z-10">
            <motion.div
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6 }}
              className="text-center w-full sm:max-w-2xl lg:max-w-4xl mx-auto"
            >
              <h1 className="text-3xl sm:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6 tracking-wide px-4 sm:px-0">
                About IMC Multiflexserve
              </h1>
              <p className="text-lg sm:text-xl lg:text-2xl opacity-90 px-4 sm:px-6">
                Your trusted partner in e-commerce and professional services
              </p>
            </motion.div>
          </div>
        </motion.section>

        {/* Mission & Vision Section - Enhanced tablet responsiveness */}


        <motion.section
          variants={sectionVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="py-16 bg-white"
        >
          <div className="max-w-7xl mx-auto px-4">
            <div className="grid md:grid-cols-2 gap-12 p-4 items-center">
              <div>
                <motion.h2
                  initial={{ x: -50, opacity: 0 }}
                  whileInView={{ x: 0, opacity: 1 }}
                  transition={{ delay: 0.2 }}
                  className="text-3xl font-bold text-primary mb-6"
                >
                  Our Mission
                </motion.h2>
                <p className="text-gray-600 mb-8 leading-relaxed">
                  To revolutionize the way people buy, sell, and access services by providing a comprehensive
                  marketplace that connects businesses and individuals, making commerce and service procurement
                  accessible, efficient, and reliable for everyone.
                </p>
                <motion.h2
                  initial={{ x: -50, opacity: 0 }}
                  whileInView={{ x: 0, opacity: 1 }}
                  transition={{ delay: 0.4 }}
                  className="text-3xl font-bold text-primary mb-6"
                >
                  Our Vision
                </motion.h2>
                <p className="text-gray-600 leading-relaxed">
                  To become the leading global platform that seamlessly integrates e-commerce, professional
                  services, and custom solutions, empowering businesses and individuals to thrive in the
                  digital economy.
                </p>
              </div>
              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.5 }}
                className="relative h-[400px]"
              >
                <Image
                  src={aboutImg}
                  alt="Team collaboration"
                  fill
                  className="rounded-lg object-contain hover:scale-105 transition-transform duration-300"
                />
              </motion.div>
            </div>
          </div>
        </motion.section>

        {/* Core Values Section - Enhanced tablet responsiveness */}
        <section className="py-12 sm:py-20 lg:py-24 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-8">
            <motion.h2
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-3xl sm:text-4xl font-bold  text-center text-primary mb-8 sm:mb-12 lg:mb-16"
            >
              Our Core Values
            </motion.h2>
            <div className=" max-w-7xl grid  grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 lg:gap-8 ">
              {[
                {
                  icon: Building2,
                  title: 'Integrity',
                  description: 'We conduct business with the highest ethical standards and transparency.',
                },
                {
                  icon: Users,
                  title: 'Customer Focus',
                  description: 'Our customers success is our primary measure of achievement.',
                },
                {
                  icon: Target,
                  title: 'Innovation',
                  description: 'We continuously evolve and adapt to meet changing market needs.',
                },
                {
                  icon: Award,
                  title: 'Excellence',
                  description: 'We strive for excellence in every service and product we offer.',
                },
              ].map((value, index) => (
                <motion.div
                  key={index}
                  variants={coreValueVariants}
                  initial="rest"
                  whileHover="hover"
                  className="text-center p-6 sm:p-8 bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300"
                >
                  <value.icon className="w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 mx-auto mb-4 sm:mb-6 text-secondary transition-transform" />
                  <h3 className="text-xl sm:text-2xl font-semibold mb-3 sm:mb-4">{value.title}</h3>
                  <p className="text-base sm:text-lg text-gray-600">{value.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Team Section - Enhanced tablet responsiveness */}
        <section className="py-12 sm:py-20 lg:py-24 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-8">
            <motion.h2
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-3xl sm:text-4xl font-bold text-center text-primary mb-8 sm:mb-12 lg:mb-16"
            >
              Our Leadership Team
            </motion.h2>
            <div className="grid max-w-7xl   grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-12  mx-auto">
              {[
                {
                  name: 'John Smith',
                  position: 'Chief Executive Officer',
                  image: oldMan,
                  linkedin: '#',
                },
                {
                  name: 'Sarah Johnson',
                  position: 'Chief Operations Officer',
                  image: busnwoman,
                  linkedin: '#',
                },
                {
                  name: 'Michael Chen',
                  position: 'Chief Technology Officer',
                  image: youngBoy,
                  linkedin: '#',
                },
                {
                  name: 'John Smith',
                  position: 'Chief Executive Officer',
                  image: oldMan,
                  linkedin: '#',
                },
                {
                  name: 'Sarah Johnson',
                  position: 'Chief Operations Officer',
                  image: busnwoman,
                  linkedin: '#',
                },
                {
                  name: 'Michael Chen',
                  position: 'Chief Technology Officer',
                  image: youngBoy,
                  linkedin: '#',
                },
              ].map((member, index) => (
                <motion.div
                  key={index}
                  variants={teamMemberVariants}
                  initial="rest"
                  whileHover="hover"
                  className="text-center group mx-auto w-full max-w-sm"
                >
                  <div className="relative w-48 h-48 sm:w-60 sm:h-60 lg:w-64 lg:h-64 mx-auto mb-4 sm:mb-6 overflow-hidden rounded-full shadow-xl">
                    <Image
                      src={member.image}
                      alt={member.name}
                      fill
                      className="object-cover transition-transform duration-300 group-hover:scale-110"
                    />
                    <motion.div
                      initial={{ opacity: 0 }}
                      whileHover={{ opacity: 1 }}
                      className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 transition-opacity duration-300"
                    >
                      <a href={member.linkedin} target="_blank" rel="noopener noreferrer">
                        <LinkedinIcon className="text-white w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12 hover:text-blue-500" />
                      </a>
                    </motion.div>
                  </div>
                  <h3 className="text-xl sm:text-2xl font-semibold text-primary mb-2 sm:mb-3">{member.name}</h3>
                  <p className="text-base sm:text-lg text-gray-600">{member.position}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      </motion.div>
      <Footer />
    </div>
  );
}