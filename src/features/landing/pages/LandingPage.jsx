import React from "react";
import Header from "../../../layout/Header";
import HeroSection from "../components/HeroSection";
import BenefitsSection from "../components/BenefitsSection";
import "../styles/landing.css";
import SocialProofSection from "../components/SocialProofSection";
import CallToActionSection from "../components/CallToActionSection";
import Footer from "../../../layout/Footer";

function LandingPage() {
  return (
    <div className="landingContainer">
      <Header />
      <HeroSection />
      <BenefitsSection />
      <SocialProofSection />
      <CallToActionSection />
      <Footer />
    </div>
  );
}

export default LandingPage;
