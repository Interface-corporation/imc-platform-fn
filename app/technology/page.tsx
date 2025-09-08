'use client'
import Footer from "@/components/footer/Footer";
import LdHeader from "@/components/landingPageComponents/LdHeader"
import HeroSection from "@/components/landingPageComponents/LdHero"
import HighlightCards from "@/components/landingPageComponents/HighlightCards"
import Ldabout from "@/components/landingPageComponents/Ldabout"
import Ldbanner from "@/components/landingPageComponents/Ldbanner"
import LdOurService from "@/components/landingPageComponents/LdOurService"
import LdOurPartener from "@/components/landingPageComponents/LdOurPartener"
import { AutospacecardData, colorMap, TechServiceCardData } from "@/data/cardsData";

import softwareImg from '@/public/technology/swDev.jpg';
import aiImg from '@/public/technology/aiDev.jpg';
import designImg from '@/public/technology/UIDesign.jpg';
import marketingImg from '@/public/technology/marketing.jpg';
import consultancyImg from '@/public/technology/innnovations.jpg';

import DemoSection from "@/components/landingPageComponents/DemoSection";
import ApplicationForm from "@/components/landingPageComponents/ApplicationForm";
import { Target, Globe } from 'lucide-react';

const Homepage = () => {
  const heroContent = [
    {
      title: "Web & Mobile Development",
      subtext:
        "From concept to deployment, we build secure, scalable, and user-friendly websites and mobile applications tailored to your business needs.",
      backgroundColor: "from-purple-900/20 to-purple-900/80",
    },
    {
      title: "AI & Data Solutions",
      subtext:
        "Unlock the power of artificial intelligence and data analytics to automate processes, gain insights, and make smarter business decisions.",
      backgroundColor: "from-blue-900/20 to-blue-900/90",
    },
    {
      title: "UI/UX & Graphic Design",
      subtext:
        "Deliver visually stunning and user-centered designs that engage your audience and create memorable brand experiences.",
      backgroundColor: "from-pink-900/20 to-pink-900/90",
    },
    {
      title: "Digital Marketing",
      subtext:
        "Boost your online presence with SEO, social media, content, and paid campaigns that drive growth and measurable results.",
      backgroundColor: "from-emerald-800/20 to-emerald-900/90",
    },
    {
      title: "Smart Tech & IT Consultancy",
      subtext:
        "We implement modern smart technologies and provide expert IT consulting to future-proof your business.",
      backgroundColor: "from-indigo-900/20 to-indigo-900/90",
    },
  ];

  return (
    <div>
      <main className="flex flex-col gap-2">
        <LdHeader />
        <HeroSection
          heroContent={heroContent}
          backgroundImages={[softwareImg, aiImg, designImg, marketingImg, consultancyImg]}
          targetStats={{ years: 10, clients: 250, products: 120, support: '24/7' }}
          badgeText="INTERFACE TECHNOLOGY SOLUTIONS"
          primaryCTA={{ text: 'Explore Services', link: '/technology' }}
          secondaryCTA={{ text: 'Contact Us', link: '/contact' }}
        />

        <DemoSection
          subtitle="Discover Our Services"
          title="Technology Solutions"
          description="We specialize in custom software development, AI-driven solutions, creative design, and digital strategies. Our team helps businesses adopt smart technology to stay competitive in a fast-changing world."
          videoUrl="https://www.youtube.com/embed/fzWzPXEhPvA" // replace with your video
          ctaText="Get Started"
          ctaLink="/technology"
        />

        <HighlightCards cards={TechServiceCardData} colorMap={colorMap} />

        <Ldabout
          title="About Technology Solutions"
          elevatorPitch="We provide businesses with end-to-end technology services—from custom software and AI solutions to branding and digital marketing. Our mission is to help organizations thrive in the digital era."
          mission={{
            title: "Our Mission",
            description:
              "To empower businesses through cutting-edge technology, creative solutions, and strategic innovation, ensuring growth and long-term success.",
            icon: Target,
          }}
          vision={{
            title: "Our Vision",
            description:
              "To become a trusted partner in digital transformation by delivering impactful solutions that shape smarter businesses and stronger communities.",
            icon: Globe,
          }}
          image="/technology/coder.jpg"
          ctaLabel="Discover Our Services"
          ctaLink="/services"
        />

        <ApplicationForm
          title="Request Tech Service"
          subtitle="Tell us your needs and specifications for your desired service."
          services={[
            "Web & Mobile Development",
            "AI & Data Solutions",
            { label: "UI/UX & Graphic Design", value: "design" },
            "Digital Marketing",
            "Smart Tech Solution",
            "IT Consultancy",
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
      <Footer />
    </div>
  )
}

export default Homepage;
