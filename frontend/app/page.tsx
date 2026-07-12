import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import PopularTools from "../components/PopularTools";
import Footer from "../components/Footer";
import Categories from "../components/Categories";
import WhyChoose from "../components/WhyChoose";

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <Navbar />
      <Hero />
      <Categories />
      <PopularTools />
      <WhyChoose />
      <Footer />
    </main>
  );
}