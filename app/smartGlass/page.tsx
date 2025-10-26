'use client'
import Footer from "@/components/footer/Footer";
import LdHeader from "@/components/landingPageComponents/LdHeader"
import HeroSection from "@/components/landingPageComponents/LdHero"
import HighlightCards from "@/components/landingPageComponents/HighlightCards"
import Ldabout from "@/components/landingPageComponents/Ldabout"
import Ldbanner from "@/components/landingPageComponents/Ldbanner"
import LdOurService from "@/components/landingPageComponents/LdOurService"
import LdOurPartener from "@/components/landingPageComponents/LdOurPartener"
import { colorMap, SmartEyeGlassCardData } from "@/data/cardsData";

import seg1 from '@/public/smartGlass/seg1.jpeg';
import seg2 from '@/public/smartGlass/seg2.jpeg';
import seg3 from '@/public/smartGlass/seg3.jpeg';
import seg4 from '@/public/smartGlass/seg5.jpeg';


import DemoSection from "@/components/landingPageComponents/DemoSection";
import ApplicationForm from "@/components/landingPageComponents/ApplicationForm";
import { Target, Globe } from 'lucide-react';

const Homepage = () => {
    const heroContent = [
        {
            title: "Smart Eye Glasses for the Visually Impaired",
            subtext:
                "Experience independence through innovation. Our AI-powered smart glasses combine vision assistance, voice interaction, and real-time data to enhance daily life for the visually impaired.",
            backgroundColor: "from-purple-900/20 to-purple-900/80",
        },
        {
            title: "Object Recognition & Environmental Awareness",
            subtext:
                "Detect and identify objects around you in real-time using advanced computer vision, enabling users to understand and interact safely with their surroundings.",
            backgroundColor: "from-blue-900/20 to-blue-900/90",
        },
        {
            title: "Text Recognition & Voice Reading Assistance",
            subtext:
                "Instantly read printed or handwritten text aloud with AI-powered OCR technology, making signs, books, and documents accessible anywhere, anytime.",
            backgroundColor: "from-pink-900/20 to-pink-900/90",
        },
        {
            title: "Navigation Guidance & Obstacle Detection",
            subtext:
                "Navigate confidently with smart obstacle detection and voice-guided directions that provide real-time feedback for safer and smoother movement.",
            backgroundColor: "from-emerald-800/20 to-emerald-900/90",
        },
    ];

    return (
        <div>
            <main className="flex flex-col gap-2">
                <LdHeader />
                <HeroSection
                    heroContent={heroContent}
                    backgroundImages={[seg1, seg2, seg3, seg4, ]}
                    targetStats={{ years: 2, clients: 250, products: 1200, support: '24/7' }}
                    badgeText="SMART EYE GLASSES for VISUALLY IMPAIRED INDIVIDUALS"
                    primaryCTA={{ text: 'Explore Services', link: '/smartGlass' }}
                    secondaryCTA={{ text: 'Contact Us', link: '/contact' }}
                />

                <DemoSection
                    subtitle="Discover Our Services"
                    title="Technology Solutions"
                    description="We specialize in custom software development, AI-driven solutions, creative design, and digital strategies. Our team helps businesses adopt smart technology to stay competitive in a fast-changing world."
                    videoUrl="https://drive.google.com/file/d/1wDXYXJof4ul11bufymt4fHEPq0y0Oi3I/preview" // replace with your video
                    ctaText="Get Started"
                    ctaLink="/technology"
                />

                <HighlightCards cards={SmartEyeGlassCardData} colorMap={colorMap} />

                <Ldabout
                    title="About Smart Eye Glass Project"
                    elevatorPitch="Smart Eye Glasses combine artificial intelligence, IoT, and vision technology to assist visually impaired individuals in navigating, reading, and interacting with their environment safely and independently."
                    mission={{
                        title: "Our Mission",
                        description:
                            "To empower the visually impaired community by providing accessible, intelligent, and affordable wearable technology that enhances mobility, awareness, and confidence in everyday life.",
                        icon: Target,
                    }}
                    vision={{
                        title: "Our Vision",
                        description:
                            "To create a world where technology bridges the gap between sight and independence—enabling every visually impaired person to experience life without limits.",
                        icon: Globe,
                    }}
                    image="/smartGlass/seg8.jpeg"
                    ctaLabel="Explore Our Innovation"
                    ctaLink="/smartGlass"
                />

                <ApplicationForm
                    title="Get Involved with Smart Eye Glass"
                    subtitle="Whether you’re a customer, partner, or supporter — choose how you’d like to engage with the Smart Eye Glass project. From purchasing the device to joining as a sponsor or providing feedback, we’d love to hear from you."
                    services={[
                        "Purchase Smart Eye Glass",
                        "Upgrade Monthly Subscription",
                        "Request Technical Support",
                        "Submit User Feedback",
                        "Research & Development Partnership",
                        "Prototype Testing & Evaluation",
                        "Funding or Sponsorship Collaboration",
                        "Business or NGO Collaboration",
                    ]}
                    submitText="Submit Request"
                    successMessage="Thank you! Your Smart Eye Glass request has been received. Our team will reach out to you shortly."
                    errorMessage="Something went wrong while sending your request. Please try again."
                    onSubmit={async (data) => {
                        const res = await fetch("https://api.your-domain.com/lead", {
                            method: "POST",
                            headers: { "Content-Type": "application/json" },
                            body: JSON.stringify({
                                ...data,
                                project: "Smart Eye Glass",
                                source: "website",
                                submittedAt: new Date().toISOString(),
                            }),
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
