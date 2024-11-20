import Header from "../pages/Header"
import Footer from "../pages/Footer";
import MinNav from "../pages/MinNav";
import HeroSection from "../pages/HeroSection";
import Product from "../pages/Product";
import Categories from "../pages/Categories";
import Services from "../pages/Services";

export default function Home() {
  return (
    <div className="">
      <main className="">
        <Header />
        <MinNav/>
        <HeroSection />
        <Product />
        <Categories/>
        <Services />
      </main>
      <Footer/>
    </div>
  );
}
