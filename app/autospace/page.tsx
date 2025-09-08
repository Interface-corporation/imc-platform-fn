'use client'
import Footer from "@/components/footer/Footer";
import LdHeader from "@/components/landingPageComponents/LdHeader"
import HeroSection from "@/components/landingPageComponents/LdHero"
import HighlightCards from "@/components/landingPageComponents/HighlightCards"
import Ldabout from "@/components/landingPageComponents/Ldabout"
import Ldbanner from "@/components/landingPageComponents/Ldbanner"
import LdOurService from "@/components/landingPageComponents/LdOurService"
import LdOurPartener from "@/components/landingPageComponents/LdOurPartener"
import { AutospacecardData, colorMap } from "@/data/cardsData";

import carDealer from '@/public/autospace/carDealer.jpg';
import carService from '@/public/autospace/carService.jpg';
import carDiag from '@/public/autospace/carDiag2.jpg';
import carWash1 from '@/public/autospace/carWash2.jpg';
import breakdownService from '@/public/autospace/breakdownService.jpg';
import DemoSection from "@/components/landingPageComponents/DemoSection";
import ApplicationForm from "@/components/landingPageComponents/ApplicationForm";
import LdAbout from "@/components/landingPageComponents/Ldabout";
import { Target, Globe } from 'lucide-react';
// 

const Homepage = () => {
    const heroContent = [
      {
        title: "Buy & Rent Cars",
        subtext:
          "Browse a wide range of top-quality vehicles for sale or rent. Whether you need a daily ride, a luxury car for special occasions, or a business fleet, we provide affordable deals, transparent pricing, and easy booking.",
        backgroundColor: "from-purple-900/20 to-purple-900/80",
      },
      {
        title: "Car Services & Repairs",
        subtext:
          "Keep your vehicle in peak condition with our certified maintenance and repair services. From engine overhauls to routine check-ups, our expert mechanics ensure safety, performance, and peace of mind.",
        backgroundColor: "from-blue-900/20 to-blue-900/90",
      },
      {
        title: "Car Diagnostics",
        subtext:
          "Identify issues before they become costly problems. Our advanced computer diagnostics detect faults quickly and accurately, helping you make informed decisions and avoid unexpected breakdowns.",
        backgroundColor: "from-purple-900/20 to-purple-900/90",
      },
      {
        title: "Car Wash & Detailing",
        subtext:
          "Give your car a showroom shine with our premium wash and detailing services. From exterior polishing to deep interior cleaning, we make your vehicle look and feel brand new.",
        backgroundColor: "from-emerald-800/20 to-emerald-900/90",
      },
      {
        title: "Roadside Assistance",
        subtext:
          "Stranded on the road? Our 24/7 roadside assistance team will be there fast. We provide towing, jump-starts, tire changes, and emergency fuel delivery anytime, anywhere.",
        backgroundColor: "from-red-900/20 to-red-900/90",
      }
    ];

  return (
    <div>
       <main className="flex flex-col gap-2">
        <LdHeader />
        <HeroSection
          heroContent={heroContent}
          backgroundImages={[carDealer, carService, carDiag, carWash1, breakdownService]}
          targetStats={{ years: 15, clients: 400, products: 250, support: '24/7' }}
          badgeText="INTERFACE AUTO SPACE"
          primaryCTA={{ text: 'Explore Services', link: '/autospace' }}
          secondaryCTA={{ text: 'Contact Us', link: '/contact' }}
        />

        <DemoSection
          subtitle="Discover Our Services"
          title="Interface Auto Space"
          description="Discover how IMC simplifies car ownership and mobility. From buying, renting, and servicing vehicles to diagnostics, detailing, and 24/7 roadside support, our all-in-one solution ensures convenience, reliability, and peace of mind anytime, anywhere."
          videoUrl="https://www.youtube.com/embed/PUkAIAIzA0I" // replace with your video
          ctaText="Try It Now"
          ctaLink="/autospace"
        />
        <HighlightCards cards={AutospacecardData} colorMap={colorMap} />
        <LdAbout
          title="About Auto Space"
          elevatorPitch="Auto Space is your one-stop destination for everything cars—buying, renting, maintaining, and protecting your vehicle. We combine convenience, trust, and expert service to keep you moving with confidence."
          mission={{
            title: "Our Mission",
            description:
              "To make car ownership and mobility effortless by offering affordable vehicles, professional services, and reliable roadside support—all under one roof. We are dedicated to delivering transparency, quality, and peace of mind to every driver.",
            icon: Target,
          }}
          vision={{
            title: "Our Vision",
            description:
              "To become the most trusted automotive hub, where individuals and businesses can access top-quality cars, certified maintenance, and 24/7 support—empowering safer, smarter, and more enjoyable journeys.",
            icon: Globe,
          }}
          image="/autospace/mechanisian.png"
          ctaLabel="Discover Our Services"
          ctaLink="/autospace"
        />
  

        {/* Example 2: Different endpoint and custom copy */}
        <ApplicationForm
          title="Request service"
          subtitle="Tell us your needs and specifications for your desired service."
          services={[
            "Buy & Rent Cars",
            "Car Services & Repairs",
            { label: "Car Diagnostics", value: "diagnostics" },
            "Car Wash & Detailing",
            "Roadside Assistance",
            "Spare Parts Delivery",
          ]}
          submitText="Send Request"
          successMessage="We got it! Our team will contact you shortly."
          errorMessage="We couldn't send your request. Please try again."
          onSubmit={async (data) => {
            const res = await fetch("https://api.your-domain.com/lead", {
              method: "POST",
              headers: { "Content-Type": "application/json" },
              body: JSON.stringify({ ...data, source: "website" }),
            });
            return res.ok;
          }}
        />
        <LdOurService />
        <Ldbanner />
        <LdOurPartener />



      </main>
      <Footer/>
    </div>
  )
}

export default Homepage



{/* <ApplicationForm
          services={[
            "Buy & Rent Cars",
            "Car Services & Repairs",
            { label: "Car Diagnostics", value: "diagnostics" },
            "Car Wash & Detailing",
            "Roadside Assistance",
            "Spare Parts Delivery",
          ]}
          onSubmit={async (data) => {
            const res = await fetch("/api/apply", {
              method: "POST",
              headers: { "Content-Type": "application/json" },
              body: JSON.stringify(data),
            });
            return res.ok;
          }}
        /> */}