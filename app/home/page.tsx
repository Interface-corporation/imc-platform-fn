'use client'
import Footer from "@/components/footer/Footer";
import LdHeader from "@/components/landingPageComponents/LdHeader"
import HeroSection from "@/components/landingPageComponents/LdHero"
import HighlightCards from "@/components/landingPageComponents/HighlightCards"
import Ldabout from "@/components/landingPageComponents/Ldabout"
import Ldbanner from "@/components/landingPageComponents/Ldbanner"
import LdOurService from "@/components/landingPageComponents/LdOurService"
import LdOurPartener from "@/components/landingPageComponents/LdOurPartener"

const Homepage = () => {
  return (
    <div>
       <main className="flex flex-col gap-2">
        <LdHeader />
        <HeroSection />
        <HighlightCards />
        <Ldabout />
        <LdOurService />
        <Ldbanner />
        <LdOurPartener />



      </main>
      <Footer/>
    </div>
  )
}

export default Homepage
