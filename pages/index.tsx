import Hero from "@/components/Hero";
import * as React from "react";

import SectionAbout from "@/components/SectionAbout";
import ServiceSection from "@/components/ServiceSection";

export default function Home(): React.JSX.Element {
  return (
    <>
      <Hero />
      <SectionAbout />
      <ServiceSection />
    </>
  );
}
