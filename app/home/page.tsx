'use client'
import Footer from "@/components/footer/Footer";
import LdHeader from "@/components/landingPageComponents/LdHeader"
import HeroSection from "@/components/landingPageComponents/LdHero"
import HighlightCards from "@/components/landingPageComponents/HighlightCards"
import Ldabout from "@/components/landingPageComponents/Ldabout"
import Ldbanner from "@/components/landingPageComponents/Ldbanner"
import LdOurService from "@/components/landingPageComponents/LdOurService"
import LdOurPartener from "@/components/landingPageComponents/LdOurPartener"
import { landingPageCards, colorMap } from "@/data/cardsData";

import background1 from '@/public/cover/shipping.jpg';
import background2 from '@/public/cover/tech_code.jpg';
import background3 from '@/public/cover/shop_oline.jpg';
import { Target, Globe } from 'lucide-react';
import LdAbout from "@/components/landingPageComponents/Ldabout";
import ServiceBanner from "@/components/serviceBanner/ServiceBanner";

const Homepage = () => {
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

  return (
    <div>
       <main className="flex flex-col ">
        <LdHeader />
        <HeroSection
          heroContent={heroContent}
          backgroundImages={[background1, background2, background3]}
          targetStats={{ years: 15, clients: 400, products: 250, support: '24/7' }}
          badgeText="All-in-One Business Solutions"
          primaryCTA={{ text: 'Explore Services', link: '/landingPage' }}
          secondaryCTA={{ text: 'Contact Us', link: '/contact' }}
        />
        <HighlightCards cards={landingPageCards} colorMap={colorMap} />
        <LdAbout
          title="Who We Are"
          elevatorPitch="IMC Ltd is a tech-driven company that leverages AI to deliver innovative digital solutions and logistics services, streamlining public access to technology and enhancing intercontinental trade."
          mission={{
            title: "Our Mission",
            description:
              "At Interface Multiservice Corporation Ltd, our mission is to bridge gaps across industries by delivering seamless logistics, cutting-edge digital solutions, inclusive assistive technologies, premium property services, and exceptional hospitality.",
            icon: Target,
          }}
          vision={{
            title: "Our Vision",
            description:
              "To become a globally trusted hub for innovative, multiservice solutions—empowering individuals and businesses through world-class logistics, transformative technology, and personalized service experiences.",
            icon: Globe,
          }}
          image="/images/webImage/about1.png"
          ctaLabel="Learn More About Us"
          ctaLink="/about"
        />
        <ServiceBanner/>
        <LdOurService />
        <Ldbanner />
        <LdOurPartener />



      </main>
      <Footer/>
    </div>
  )
}

export default Homepage
