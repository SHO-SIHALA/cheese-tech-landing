import { useEffect } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import HeroSection from "@/components/sections/HeroSection";
import AboutSection from "@/components/sections/AboutSection";
import WhyUsSection from "@/components/sections/WhyUsSection";
import ContactSection from "@/components/sections/ContactSection";
import FeaturedProducts from "@/components/sections/FeaturedProducts";

const Index = () => {
  useEffect(() => {
    document.title = "Cheese Tech - IT & Cybersecurity Solutions";

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );

    document.querySelectorAll(".reveal").forEach((el) => {
      observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Navbar />
      <main className="flex-grow">
        <HeroSection />
        <AboutSection />
        <FeaturedProducts />
        <WhyUsSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
