import Header from "@/components/Header"
import Footer from "@/components/Footer";
import MinNav from "@/components/MinNav";
import HeroSection from "@/components/HeroSection";
import Product from "@/components/Product";
import Categories from "@/components/Categories";
import Services from "@/components/Services";

const Homepage = () => {
  return (
    <div>
       <main className="flex flex-col gap-2">
        <Header />
        <HeroSection />
        <MinNav />
        <Product />
        <Categories/>
        <Services />
      </main>
      <Footer/>
    </div>
  )
}

export default Homepage
