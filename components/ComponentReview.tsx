"use client";
import {
  Carousel,
  Typography,
  IconButton,
  Avatar,
  Card,
  CardBody,
  CardFooter,
} from "@material-tailwind/react";
import React, { useEffect, useState } from "react";

import { FaStar, FaStarHalfAlt } from "react-icons/fa";
import { HiOutlineChevronRight, HiOutlineChevronLeft } from "react-icons/hi";

export default function ComponetReview() {
  const [dimension, setDimension] = useState(0);
  const [resBol, setResBol] = useState(false);

  let DynamicComponent;

  useEffect(() => {
    window.addEventListener("resize", () => {
      setDimension(window.innerWidth);
    });
    window.innerWidth <= 400 ? setResBol(true) : setResBol(false);
    return () => {
      window.removeEventListener("resize", () => {
        setDimension(window.innerWidth);
      });
    };
  }, [resBol, dimension]);

  if (resBol) {
    DynamicComponent = (
      <Carousel
        prevArrow={({ handlePrev }) => (
          <IconButton
            variant="text"
            color="white"
            size="lg"
            onClick={handlePrev}
            className="!absolute top-2/4 -translate-y-2/4 left-4"
          >
            <HiOutlineChevronLeft
              strokeWidth={2}
              className="w-6 h-6 text-black"
            />
          </IconButton>
        )}
        nextArrow={({ handleNext }) => (
          <IconButton
            variant="text"
            color="white"
            size="lg"
            onClick={handleNext}
            className="!absolute top-2/4 -translate-y-2/4 !right-4"
          >
            <HiOutlineChevronRight
              strokeWidth={2}
              className="w-6 h-6 text-black"
            />
          </IconButton>
        )}
        className="rounded-none "
      >
        <div className="relative h-[50vh] w-full">
          <div className="absolute inset-0 gap-4 grid w-full place-items-center h-full w-full ">
            <Card className="w-96 h-fit lg:justify-self-end">
              <CardBody>
                <div className="flex gap-2 items-center">
                  <Avatar src="/img/avatar-1.jpg" alt="avatar-1" size="lg" />
                  <div className="flex flex-col">
                    <Typography variant="h6" color="blue-gray" className="m-0">
                      Tanver San
                    </Typography>
                    <Typography variant="lead" className="inline -mt-3">
                      <FaStar className="inline text-[#E7D95C]" />
                      <FaStar className="inline text-[#E7D95C]" />
                      <FaStar className="inline text-[#E7D95C]" />
                      <FaStar className="inline text-[#E7D95C]" />
                      <FaStarHalfAlt className="inline text-[#E7D95C]" />
                    </Typography>
                  </div>
                </div>
                <Typography className="my-3">
                  Because it's about motivating the doers. Because I'm here to
                  follow my dreams and inspire others.
                </Typography>
              </CardBody>
              <CardFooter className="pt-0">
                <Typography variant="small" color="green" className="font-bold">
                  Amerika Serikat
                </Typography>
              </CardFooter>
            </Card>
          </div>
        </div>
        <div className="relative h-[50vh] w-full">
          <div className="absolute inset-0 gap-4 grid w-full place-items-center h-full w-full ">
            <Card className="w-96 h-fit">
              <CardBody>
                <div className="flex gap-2 items-center">
                  <Avatar src="/img/avatar-2.jpg" alt="avatar-2" size="lg" />
                  <div className="flex flex-col">
                    <Typography variant="h6" color="blue-gray" className="m-0">
                      Sislia grande
                    </Typography>
                    <Typography variant="lead" className="inline -mt-3">
                      <FaStar className="inline text-[#E7D95C]" />
                      <FaStar className="inline text-[#E7D95C]" />
                      <FaStar className="inline text-[#E7D95C]" />
                      <FaStar className="inline text-[#E7D95C]" />
                      <FaStarHalfAlt className="inline text-[#E7D95C]" />
                    </Typography>
                  </div>
                </div>
                <Typography className="my-3">
                  Because it's about motivating the doers. Because I'm here to
                  follow my dreams and inspire others.
                </Typography>
              </CardBody>
              <CardFooter className="pt-0">
                <Typography variant="small" color="green" className="font-bold">
                  Canada
                </Typography>
              </CardFooter>
            </Card>
          </div>
        </div>
        <div className="relative h-[50vh] w-full">
          <div className="absolute inset-0 grid gap-4 place-items-center h-full w-full bg-[#f8fafc]">
            <Card className="w-96 h-fit lg:justify-self-end">
              <CardBody>
                <div className="flex gap-2 items-center">
                  <Avatar src="/img/avatar-3.jpg" alt="avatar-" size="lg" />
                  <div className="flex flex-col">
                    <Typography variant="h6" color="blue-gray" className="m-0">
                      Mike Smith
                    </Typography>
                    <Typography variant="lead" className="inline -mt-3">
                      <FaStar className="inline text-[#E7D95C]" />
                      <FaStar className="inline text-[#E7D95C]" />
                      <FaStar className="inline text-[#E7D95C]" />
                      <FaStar className="inline text-[#E7D95C]" />
                      <FaStarHalfAlt className="inline text-[#E7D95C]" />
                    </Typography>
                  </div>
                </div>
                <Typography className="my-3">
                  Because it's about motivating the doers. Because I'm here to
                  follow my dreams and inspire others.
                </Typography>
              </CardBody>
              <CardFooter className="pt-0">
                <Typography variant="small" color="green" className="font-bold">
                  Amerika Serikat
                </Typography>
              </CardFooter>
            </Card>
          </div>
        </div>
        <div className="relative h-[50vh] w-full">
          <div className="absolute inset-0 grid gap-4 place-items-center h-full w-full bg-[#f8fafc]">
            <Card className="w-96 h-fit">
              <CardBody>
                <div className="flex gap-2 items-center">
                  <Avatar src="/img/avatar-4.jpg" alt="avatar-4" size="lg" />
                  <div className="flex flex-col">
                    <Typography variant="h6" color="blue-gray" className="m-0">
                      Michael Jordan
                    </Typography>
                    <Typography variant="lead" className="inline -mt-3">
                      <FaStar className="inline text-[#E7D95C]" />
                      <FaStar className="inline text-[#E7D95C]" />
                      <FaStar className="inline text-[#E7D95C]" />
                      <FaStar className="inline text-[#E7D95C]" />
                      <FaStarHalfAlt className="inline text-[#E7D95C]" />
                    </Typography>
                  </div>
                </div>
                <Typography className="my-3">
                  Because it's about motivating the doers. Because I'm here to
                  follow my dreams and inspire others.
                </Typography>
              </CardBody>
              <CardFooter className="pt-0">
                <Typography variant="small" color="green" className="font-bold">
                  Canada
                </Typography>
              </CardFooter>
            </Card>
          </div>
        </div>
      </Carousel>
    );
  } else {
    DynamicComponent = (
      <Carousel
        prevArrow={({ handlePrev }) => (
          <IconButton
            variant="text"
            color="white"
            size="lg"
            onClick={handlePrev}
            className="!absolute top-2/4 -translate-y-2/4 left-4"
          >
            <HiOutlineChevronLeft
              strokeWidth={2}
              className="w-6 h-6 text-black"
            />
          </IconButton>
        )}
        nextArrow={({ handleNext }) => (
          <IconButton
            variant="text"
            color="white"
            size="lg"
            onClick={handleNext}
            className="!absolute top-2/4 -translate-y-2/4 !right-4"
          >
            <HiOutlineChevronRight
              strokeWidth={2}
              className="w-6 h-6 text-black"
            />
          </IconButton>
        )}
        className="rounded-none "
      >
        <div className="relative h-[50vh] w-full">
          <div className="absolute inset-0 gap-4 grid justify-items-center lg:justify-items-start lg:grid-cols-2 h-full w-full ">
            <Card className="w-96 h-fit lg:justify-self-end">
              <CardBody>
                <div className="flex gap-2 items-center">
                  <Avatar src="/img/avatar-1.jpg" alt="avatar-1" size="lg" />
                  <div className="flex flex-col">
                    <Typography variant="h6" color="blue-gray" className="m-0">
                      Tanver San
                    </Typography>
                    <Typography variant="lead" className="inline -mt-3">
                      <FaStar className="inline text-[#E7D95C]" />
                      <FaStar className="inline text-[#E7D95C]" />
                      <FaStar className="inline text-[#E7D95C]" />
                      <FaStar className="inline text-[#E7D95C]" />
                      <FaStarHalfAlt className="inline text-[#E7D95C]" />
                    </Typography>
                  </div>
                </div>
                <Typography className="my-3">
                  Because it's about motivating the doers. Because I'm here to
                  follow my dreams and inspire others.
                </Typography>
              </CardBody>
              <CardFooter className="pt-0">
                <Typography variant="small" color="green" className="font-bold">
                  Amerika Serikat
                </Typography>
              </CardFooter>
            </Card>
            <Card className="w-96 h-fit">
              <CardBody>
                <div className="flex gap-2 items-center">
                  <Avatar src="/img/avatar-2.jpg" alt="avatar-2" size="lg" />
                  <div className="flex flex-col">
                    <Typography variant="h6" color="blue-gray" className="m-0">
                      Sislia grande
                    </Typography>
                    <Typography variant="lead" className="inline -mt-3">
                      <FaStar className="inline text-[#E7D95C]" />
                      <FaStar className="inline text-[#E7D95C]" />
                      <FaStar className="inline text-[#E7D95C]" />
                      <FaStar className="inline text-[#E7D95C]" />
                      <FaStarHalfAlt className="inline text-[#E7D95C]" />
                    </Typography>
                  </div>
                </div>
                <Typography className="my-3">
                  Because it's about motivating the doers. Because I'm here to
                  follow my dreams and inspire others.
                </Typography>
              </CardBody>
              <CardFooter className="pt-0">
                <Typography variant="small" color="green" className="font-bold">
                  Canada
                </Typography>
              </CardFooter>
            </Card>
          </div>
        </div>
        <div className="relative h-[50vh] w-full">
          <div className="absolute inset-0 grid gap-4 lg:grid-cols-2 justify-items-center lg:justify-items-start h-full w-full bg-[#f8fafc]">
            <Card className="w-96 h-fit lg:justify-self-end">
              <CardBody>
                <div className="flex gap-2 items-center">
                  <Avatar src="/img/avatar-3.jpg" alt="avatar-" size="lg" />
                  <div className="flex flex-col">
                    <Typography variant="h6" color="blue-gray" className="m-0">
                      Mike Smith
                    </Typography>
                    <Typography variant="lead" className="inline -mt-3">
                      <FaStar className="inline text-[#E7D95C]" />
                      <FaStar className="inline text-[#E7D95C]" />
                      <FaStar className="inline text-[#E7D95C]" />
                      <FaStar className="inline text-[#E7D95C]" />
                      <FaStarHalfAlt className="inline text-[#E7D95C]" />
                    </Typography>
                  </div>
                </div>
                <Typography className="my-3">
                  Because it's about motivating the doers. Because I'm here to
                  follow my dreams and inspire others.
                </Typography>
              </CardBody>
              <CardFooter className="pt-0">
                <Typography variant="small" color="green" className="font-bold">
                  Amerika Serikat
                </Typography>
              </CardFooter>
            </Card>
            <Card className="w-96 h-fit">
              <CardBody>
                <div className="flex gap-2 items-center">
                  <Avatar src="/img/avatar-4.jpg" alt="avatar-4" size="lg" />
                  <div className="flex flex-col">
                    <Typography variant="h6" color="blue-gray" className="m-0">
                      Michael Jordan
                    </Typography>
                    <Typography variant="lead" className="inline -mt-3">
                      <FaStar className="inline text-[#E7D95C]" />
                      <FaStar className="inline text-[#E7D95C]" />
                      <FaStar className="inline text-[#E7D95C]" />
                      <FaStar className="inline text-[#E7D95C]" />
                      <FaStarHalfAlt className="inline text-[#E7D95C]" />
                    </Typography>
                  </div>
                </div>
                <Typography className="my-3">
                  Because it's about motivating the doers. Because I'm here to
                  follow my dreams and inspire others.
                </Typography>
              </CardBody>
              <CardFooter className="pt-0">
                <Typography variant="small" color="green" className="font-bold">
                  Canada
                </Typography>
              </CardFooter>
            </Card>
          </div>
        </div>
      </Carousel>
    );
  }

  return DynamicComponent;
}
