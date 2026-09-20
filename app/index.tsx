import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Problem from "@/components/Problem";
import Solution from "@/components/Solution";
import HowItWorks from "@/components/HowItWorks";
import Modules from "@/components/Modules";
import Audience from "@/components/Audience";
import Why from "@/components/Why";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";
import ComingSoonPopup from "@/components/ComingSoonPopup";

export default function LabourFlowHome() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Problem />
        <Audience />
        <Solution />
        <Modules />
        <HowItWorks />
        <Why />
        <CTA />
      </main>
      <Footer />
      <ComingSoonPopup />
    </>
  );
}
