import * as React from "react";

import { Roboto_Serif } from "next/font/google";
import CustomCard from "@/components/CustomCard";

const roboto = Roboto_Serif({
  weight: ["700"],
  style: ["normal"],
  subsets: ["latin"],
  display: "swap",
});

const SectionPropertie: React.ElementType = () => {
  return (
    <div className="mt-[3.5rem] py-5">
      <div className="container mx-auto">
        <h1
          className={`${roboto.className} text-center text-lg md:text-2xl lg:text-4xl tracking-wider leading-normal lg:leading-12 my-4 lg:my-5 `}
        >
          Properti Terbaik Kami
        </h1>
        <p className="w-max-lg mx-auto px-5 md:px-0 text-center md:w-9/12 text-sm md:text-base lg:text-lg lg:w-custom-width lg:py-px mb-5">
          Sorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
          vulputate libero et velit interdum, ac aliquet odio mattis.
        </p>
        <div className="mt-[3.5rem] px-2 grid gap-10 justify-items-stretch lg:grid-cols-4">
          {Array.from(Array(8), (value, i) => {
            return <CustomCard key={i} />;
          })}
        </div>
      </div>
    </div>
  );
};

export default SectionPropertie;
