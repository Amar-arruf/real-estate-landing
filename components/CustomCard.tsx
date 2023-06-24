"use client";

import * as React from "react";

import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
  Button,
} from "@material-tailwind/react";

import Image from "next/legacy/image";

import { FaRegFlag } from "react-icons/fa";

const CustomCard: React.ElementType = () => {
  return (
    <Card className="w-full !rounded-none overflow-hidden">
      <CardHeader
        floated={false}
        shadow={false}
        color="transparent"
        className="m-0 rounded-none w-[100%] h-[222px] relative"
      >
        <Image layout="fill" src={"/img/house.png"} alt="Home" />
      </CardHeader>
      <CardBody className="!pb-px">
        <Typography variant="h6" color="black">
          Rumah minimalis
        </Typography>
        <Typography variant="paragraph" color="gray" className="font-normal">
          <FaRegFlag className="inline me-3" /> Malang, Jawa Timur
        </Typography>
        <Typography variant="h3" color="green" className="mt-3">
          100JT
        </Typography>
      </CardBody>
      <CardFooter className="flex items-center  justify-center">
        <div>
          <Button
            color="green"
            size="md"
            className="text-white !font-semibold text-base lg:text-lg"
          >
            Hubungi kami
          </Button>
        </div>
      </CardFooter>
    </Card>
  );
};

export default CustomCard;
