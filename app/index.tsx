import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Problem from "@/components/Problem";
import Solution from "@/components/Solution";
import ProductPreview from "@/components/ProductPreview";
import HowItWorks from "@/components/HowItWorks";
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
        <Why />
        <Problem />
        <Solution />
        <HowItWorks />
        <ProductPreview />
        <Audience />
        <CTA />
      </main>
      <Footer />
      <ComingSoonPopup />
    </>
  );
}
