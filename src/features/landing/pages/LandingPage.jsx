import React from "react";
import Header from "../../../layout/Header";
import HeroSection from "../components/HeroSection";
import BenefitsSection from "../components/BenefitsSection";
import "../styles/landing.css";
import SocialProofSection from "../components/SocialProofSection";

function LandingPage() {
  return (
    <div className="landingContainer">
      <Header />
      <HeroSection />
      <BenefitsSection />
      <SocialProofSection />
    </div>
  );
}

export default LandingPage;
