import { Roboto_Serif } from "next/font/google";
import Image from "next/legacy/image";
import * as React from "react";
import {
  FaHome,
  FaMoneyCheck,
  FaCog,
  FaMoneyBill,
  FaCircle,
} from "react-icons/fa";
import CardCustom from "./CardCustom";

import {
  Card,
  CardHeader,
  CardBody,
  Typography,
} from "@material-tailwind/react";

const roboto = Roboto_Serif({
  weight: ["700"],
  style: ["normal"],
  subsets: ["latin"],
  display: "swap",
});

const ServiceSection: React.ElementType = () => {
  return (
    <div className=" mt-[3.5rem] container mx-auto">
      <div className="flex justify-center">
        <span className="uppercase text-sm lg:text-base text-green-800 font-bold flex justify-center md:justify-start pb-4 pt-5 md:pb-2 md:pt-2">
          Apa yang Kami Tawarkan
        </span>
      </div>
      <h1
        className={`${roboto.className} text-center text-lg md:text-2xl lg:text-4xl tracking-wider leading-normal lg:leading-12 my-4 lg:my-5 `}
      >
        Pelayanan Utama Kami
      </h1>
      <p className="w-max-lg mx-auto px-5 md:px-0 text-center md:w-9/12 text-sm md:text-base lg:text-lg lg:w-custom-width lg:py-px mb-4">
        Sorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate
        libero et velit interdum, ac aliquet odio mattis.
      </p>
      <div className="py-5 mt-3 mb-[5.25rem] lg:px-3 grid lg:grid-cols-4 gap-5 lg:justify-items-center justify-stretch mx-3 lg:mx-16">
        <CardCustom
          backgroundColor="bg-gradient-to-r from-[#17AE69] to-[#73B10D]"
          Icon={FaHome}
          text="membayar rumah baru"
          Color="text-white"
        />
        <CardCustom
          backgroundColor="bg-[#B4ABAB]"
          Icon={FaMoneyBill}
          text="Biaya Rumah Kembali"
          Color="text-black"
        />
        <CardCustom
          backgroundColor="bg-[#B4ABAB]"
          Icon={FaMoneyCheck}
          text="Melayani Pinjaman"
          Color="text-black"
        />
        <CardCustom
          backgroundColor="bg-[#B4ABAB]"
          Icon={FaCog}
          text="Renovasi Rumah"
          Color="text-black"
        />
      </div>
      <Card className="mt-6 !w-[100%] grid-cols-1 grid lg:justify-items-center lg:content-center lg:grid-cols-2 !shadow-lg mb-5">
        <CardBody>
          <Typography variant="h4" color="blue-gray" className="mb-2">
            Beli Rumah Impian Anda
          </Typography>
          <Typography className="text-sm w[100%] text-center md:text-start md:text-base lg:text-lg lg:w-96 text-black pe-2">
            Porem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vs.
          </Typography>
          <div className="py-6 pe-2">
            <Typography
              variant="paragraph"
              className="text-sm md:text-base text-center md:text-start lg:text-lg font-semibold text-black mb-3 "
            >
              <FaCircle className="text-[#73B10D] mx-2 inline" /> Jorem ipsum
              dolor sit amet, consectetur adipiscing elit.
            </Typography>
            <Typography
              variant="paragraph"
              className="text-sm md:text-base text-center md:text-start lg:text-lg font-semibold text-black mb-3"
            >
              <FaCircle className="text-[#73B10D] mx-2 inline" /> Jorem ipsum
              dolor sit amet, consectetur adipiscing elit.
            </Typography>
            <Typography
              variant="paragraph"
              className="text-sm md:text-base text-center md:text-start lg:text-lg font-semibold text-black mb-3"
            >
              <FaCircle className="text-[#73B10D] mx-2 inline" /> Jorem ipsum
              dolor sit amet, consectetur adipiscing elit.
            </Typography>
          </div>
        </CardBody>
        <div className="!relative mx-8 !mt-6 mb-5  w-[300px] md:w-[80%] h-[275px] lg:w-[60%] lg:h-[auto]">
          <Image layout="fill" src={"/img/house.png"} alt="Home" />
        </div>
      </Card>
    </div>
  );
};

export default ServiceSection;
