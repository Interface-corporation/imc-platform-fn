'use client'
import Header from "@/components/Header"
import Footer from "@/components/footer/Footer";
import HeroSection from "@/components/hero/HeroSection";
import Categories from "@/components/Categories";
import Services from "@/components/Services";
import { ProductList } from "@/components/product/ProductList";
import { ProductCategories } from "@/components/product/ProductCategories";

const LandingPage = () => {
    return (
        <div>
            <main className="flex flex-col gap-2">
                
                        <Header />
                        <HeroSection />
                        <ProductCategories />
                        <ProductList />
                        <Categories/>
                        <Services />



              
            </main>
            <Footer />
        </div>
    )
}

export default LandingPage
