import { Open_Sans, Roboto_Serif } from "next/font/google";
import * as React from "react";

import { FaArrowCircleRight } from "react-icons/fa";
import Image from "next/image";

const open_sans = Open_Sans({
  subsets: ["latin"],
  variable: "--font-openSans",
  display: "swap",
});

const roboto = Roboto_Serif({
  weight: ["700"],
  style: ["normal"],
  subsets: ["latin"],
  display: "swap",
});

const SectionAbout: React.ElementType = () => {
  return (
    <div className="my-5 relative">
      <div className="container mx-auto">
        <div className="flex flex-col justify-content md:flex-row md:justify-start items-center">
          <div className="py-2">
            <span className="uppercase text-sm lg:text-base text-green-800 font-bold flex justify-center md:justify-start pb-4 pt-5 md:pb-2 md:pt-2">
              #TentangKami
            </span>
            <h1
              className={`${roboto.className} text-center md:text-left text-lg md:text-2xl lg:text-4xl tracking-wider leading-normal lg:leading-12 my-4 lg:my-5 `}
            >
              Kami Selalu Ada Untuk <br /> Anda
            </h1>
            <p className="w-full px-5 md:px-0 text-center md:w-9/12 md:text-start text-sm md:text-base lg:text-lg lg:w-custom-width lg:py-px mb-4">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Voluptatem eaque quasi amet omnis totam ut corrupti iusto! Lorem
              ipsum, dolor sit amet consectetur adipisicing elit.
            </p>
            <div className="flex justify-center md:justify-start">
              <div className="flex w-fit items-center my-8 px-2 gap-x-8 border-b-2 border-gray-400">
                <span className="font-semibold text-sm lg:text-base border-b-4 border-green-400 ">
                  Misi Kami
                </span>
                <span className="font-semibold text-sm lg:text-base">
                  Visi Kami
                </span>
              </div>
            </div>

            <p className="w-full px-5 md:px-0 text-center md:w-9/12 md:text-start text-sm md:text-base lg:text-lg lg:w-custom-width lg:py-px mb-4">
              Vorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
              vulputate libero et velit interdum,
            </p>
            <div className="p-4">
              <span className=" flex justify-center md:justify-start items-center gap-x-4 px-2 pb-5 font-semibold">
                <FaArrowCircleRight className="text-green-800" /> Vorem ipsum
                dolor sit amet
              </span>
              <span className=" flex justify-center md:justify-start items-center gap-x-4 px-2 pb-2 font-semibold">
                <FaArrowCircleRight className="text-green-800" /> Vorem ipsum
                dolor sit amet
              </span>
            </div>
          </div>
          <Image
            src="/img/arsitek.png"
            alt="about Me"
            width={400}
            height={538}
            className="lg:absolute p-5 md:p-0 md:w-1/2 lg:w-[40%] right-0 bottom-0"
          />
        </div>
      </div>
    </div>
  );
};

export default SectionAbout;
