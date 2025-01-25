// src/App.tsx
import React from "react";
import HeroConsultingSection from "./components/pages/HeroConsultingSection";
import HowWorks from "./components/pages/HowWorksSection";
import FAQ from "./components/pages/FAQ";
import Footer from "./components/pages/Footer";
import Offer from "./components/pages/OfferSection";
import About from "./components/pages/About";
import IdealForSection from "./components/pages/IdealForSection";

const App: React.FC = () => {
  return (
    <div className="bg-CINZA">
      <HeroConsultingSection />
      <About />
      <IdealForSection />
      <Offer />
      <HowWorks />
      <FAQ />
      <Footer />
    </div>
  );
};

export default App;
