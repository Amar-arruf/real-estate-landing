import { Roboto_Serif } from "next/font/google";
import Images from "next/image";
import { Button } from "@material-tailwind/react";

import {
  FaWhatsapp,
  FaFacebook,
  FaInstagram,
  FaLinkedin,
} from "react-icons/fa";

const roboto = Roboto_Serif({
  weight: ["700"],
  style: ["normal"],
  subsets: ["latin"],
  display: "swap",
});

const HeroText = () => {
  return (
    <div className="container mx-auto">
      <div className="flex flex-col md:flex-row ">
        <div className="text-center md:text-start  flex md:h-custom-screen w-full flex-col lg:justify-center">
          <h1
            className={`${roboto.className} text-lg md:text-2xl lg:text-5xl tracking-wider leading-normal lg:leading-14 mb-2 `}
          >
            Rumah Adalah Dimana <br /> Memulai Cerita Kami
          </h1>
          <p className="w-full px-5 md:px-0 text-center md:w-9/12 md:text-start text-sm md:text-base lg:text-lg lg:w-custom-width lg:py-px mb-4">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem
            eaque quasi amet omnis totam ut corrupti iusto! Lorem ipsum, dolor
            sit amet consectetur adipisicing elit.
          </p>
          <div className="flex justify-center md:justify-start">
            <Button
              variant="filled"
              color="green"
              size="sm"
              className="inline w-fit !shadow-none text-base lg:text-lg text-white"
            >
              <span>Tanya Sekarang</span>
            </Button>
          </div>

          <div className="mt-4 justify-center md:justify-start flex items-center gap-1.5">
            <span className="text-[19px] pe-4">
              <FaWhatsapp />
            </span>
            <span className="text-[19px] pe-4">
              <FaFacebook />
            </span>
            <span className="text-[19px] pe-4">
              <FaInstagram />
            </span>
            <span className="text-[19px] ">
              <FaLinkedin />
            </span>
          </div>
        </div>
        <div>
          <Images
            src="/img/home.png"
            width={768}
            height={547}
            priority
            alt="home"
            className="w-full m-0 p-0 md:w-full md:w-[700px] md:h-[auto]  lg:w-[768px] lg:h-[547px] lg:absolute md:right-0 lg:bottom-[3.5rem]"
          />
        </div>
      </div>
    </div>
  );
};

export default HeroText;
