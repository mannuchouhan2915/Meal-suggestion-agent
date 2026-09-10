import Navbar from "../components/navbar";
import Hero from "../components/Hero";
import WhyMealMate from "../components/WhyMealMate";
import HowItWorks from "../components/HowItWorks";
import CTASection from "../components/CTASection";
import Footer from "../components/Footer";

function LandingPage() {
  return (
    <div className="app">

      <Navbar />

      <main>
        <Hero />
        <WhyMealMate />
        <HowItWorks />
        <CTASection />
      </main>

      <Footer />

    </div>
  );
}

export default LandingPage;