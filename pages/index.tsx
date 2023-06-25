import Hero from "@/components/Hero";
import * as React from "react";

import SectionAbout from "@/components/SectionAbout";
import ServiceSection from "@/components/ServiceSection";
import SectionPropertie from "@/components/SectionPropertie";
import SectionReview from "@/components/SectionReview";
import Footer from "@/components/Footer";

export default function Home(): React.JSX.Element {
  return (
    <>
      <Hero />
      <SectionAbout />
      <ServiceSection />
      <SectionPropertie />
      <SectionReview />
      <Footer />
    </>
  );
}
