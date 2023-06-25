import * as React from "react";

import { Roboto_Serif } from "next/font/google";
import ComponentReview from "./ComponentReview";

const roboto = Roboto_Serif({
  weight: ["700"],
  style: ["normal"],
  subsets: ["latin"],
  display: "swap",
});

const SectionReview: React.ElementType = () => {
  return (
    <div className="mt-[5rem] container mx-auto">
      <h1
        className={`${roboto.className} text-center text-lg md:text-2xl lg:text-4xl tracking-wider leading-normal lg:leading-12 my-4 lg:my-5 `}
      >
        Reviews Customers
      </h1>
      <p className="w-max-lg mx-auto px-5 md:px-0 text-center md:w-9/12 text-sm md:text-base lg:text-lg lg:w-custom-width lg:py-px mb-5">
        Corem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate
        libero et velit interdum, ac aliquet odio mattis.
      </p>
      <ComponentReview />
    </div>
  );
};

export default SectionReview;
