import * as React from "react";
import HeroText from "./HeroText";
import TopBar from "./TopBar";

const Hero: React.ElementType = () => {
  return (
    <div className=" bg-hero-pattern bg-no-repeat bg-cover md:bg-[length:50%_auto] lg:bg-auto lg:h-screen bg-right-top">
      <div className="container mx-auto">
        <TopBar />
        <HeroText />
      </div>
    </div>
  );
};

export default Hero;
