'use client'
import Footer from "@/components/footer/Footer";
import LdHeader from "@/components/landingPageComponents/LdHeader"
import HeroSection from "@/components/landingPageComponents/LdHero"
import HighlightCards from "@/components/landingPageComponents/HighlightCards"
import Ldabout from "@/components/landingPageComponents/Ldabout"
import Ldbanner from "@/components/landingPageComponents/Ldbanner"
import LdOurService from "@/components/landingPageComponents/LdOurService"
import LdOurPartener from "@/components/landingPageComponents/LdOurPartener"
import { WellnessCardData, colorMap } from "@/data/cardsData";
import { Target, Globe } from "lucide-react";


import relaxImg from '@/public/relax/smartChair.jpg';
import bookingImg from '@/public/relax/smartRooms.jpg';
import realEstateImg from '@/public/relax/realEstate.jpg';

import DemoSection from "@/components/landingPageComponents/DemoSection";
import ApplicationForm from "@/components/landingPageComponents/ApplicationForm";



const WellnessHomepage = () => {
    const heroContent = [
        {
            title: "Smart Massage & Spa",
            subtext:
                "Relax at our Interface Relax Corner with smart massage chairs and wellness spa designed for peace and comfort.",
            backgroundColor: "from-pink-900/20 to-pink-900/80",
        },
        {
            title: "Hotel & Guest House Booking",
            subtext:
                "Book your stay in top hotels and guest houses with secure, flexible, and affordable options.",
            backgroundColor: "from-blue-900/20 to-blue-900/90",
        },
        {
            title: "Real Estate Dealership",
            subtext:
                "Find, buy, or invest in prime real estate with our trusted dealership network and property experts.",
            backgroundColor: "from-green-900/20 to-green-900/90",
        }
    ];

    return (
        <div>
            <main className="flex flex-col gap-2">
                <LdHeader />
                <HeroSection
                    heroContent={heroContent}
                    backgroundImages={[relaxImg, bookingImg, realEstateImg]}
                    targetStats={{ years: 5, clients: 150, products: 60, support: "24/7" }}
                    badgeText="INTERFACE WELLNESS HUB"
                    primaryCTA={{ text: "Explore Services", link: "/relax" }}
                    secondaryCTA={{ text: "Contact Us", link: "/contact" }}
                />

                <DemoSection
                    subtitle="Discover Our Wellness Hub"
                    title="Smart Relax Corner & Booking"
                    description="Unwind with our smart massage chairs, premium spa, hotel booking, and real estate dealership services—all designed to bring balance, comfort, and peace of mind."
                    videoUrl="https://www.youtube.com/embed/gpzdm3Drx8A"
                    ctaText="Get Started"
                    ctaLink="/relax"
                />

                <HighlightCards cards={WellnessCardData} colorMap={colorMap} />

                <Ldabout
                    title=" About Interface Relax Conner"
                    elevatorPitch="At Interface Wellness, we redefine relaxation and comfort with a blend of smart wellness technology, seamless hotel booking, and reliable real estate services."
                    mission={{
                        title: "Our Mission",
                        description:
                            "To provide people with holistic comfort solutions—from relaxation and hospitality to housing—making life easier, healthier, and more enjoyable.",
                        icon: Target,
                    }}
                    vision={{
                        title: "Our Vision",
                        description:
                            "To become the leading wellness hub that integrates technology, hospitality, and real estate into one seamless lifestyle solution.",
                        icon: Globe,
                    }}
                    image="/relax/proMchair.png"
                    ctaLabel="Discover Wellness"
                    ctaLink="/relax"
                />

                <ApplicationForm
                    title="Request Wellness Service"
                    subtitle="Tell us your preferred service and specifications."
                    services={[
                        "Smart Massage & Spa",
                        "Hotel & Guest House Booking",
                        "Real Estate Dealership"
                    ]}
                    submitText="Send Request"
                    successMessage="We received your request! Our team will get in touch shortly."
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

export default WellnessHomepage;
