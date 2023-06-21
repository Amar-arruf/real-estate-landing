"use client";
import { useState, useEffect } from "react";
import {
  Navbar,
  Collapse,
  Typography,
  Button,
  IconButton,
} from "@material-tailwind/react";

import { Open_Sans } from "next/font/google";
import Image from "next/image";

const open_sans = Open_Sans({
  subsets: ["latin"],
  variable: "--font-openSans",
  display: "swap",
});

export default function TopBar() {
  const [openNav, setOpenNav] = useState(false);

  useEffect(() => {
    window.addEventListener(
      "resize",
      () => window.innerWidth >= 960 && setOpenNav(false)
    );
  }, []);

  const navList = (
    <ul className="mb-4 mt-2 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6">
      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className={`p-1 text-white text-center lg:text-black text-base lg:text-[19px]  font-semibold ${open_sans.variable}`}
      >
        <a href="#" className="lg:flex lg:items-center">
          Home
        </a>
      </Typography>
      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className={`p-1 text-white text-center lg:text-black text-base lg:text-[19px] lg:px-6 font-semibold ${open_sans.variable}`}
      >
        <a href="#" className="lg:flex lg:items-center">
          Properties
        </a>
      </Typography>
      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className={`p-1 text-white text-center lg:text-black text-base lg:text-[19px] lg:px-6 font-semibold ${open_sans.variable}`}
      >
        <a href="#" className="lg:flex lg:items-center">
          Agents
        </a>
      </Typography>
      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className={`p-1 text-white text-center lg:text-black text-base lg:text-[19px] lg:px-6  font-semibold ${open_sans.variable}`}
      >
        <a href="#" className="lg:flex lg:items-center">
          Review
        </a>
      </Typography>
      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className={`p-1 text-white text-center lg:text-black text-base lg:text-[19px]  font-semibold ${open_sans.variable}`}
      >
        <a href="#" className="lg:flex lg:items-center">
          contact
        </a>
      </Typography>
    </ul>
  );

  return (
    <Navbar className="!rounded-none !px-0">
      <div className="flex items-center text-blue-gray-900">
        <Image src="/img/logo.png" alt="Logo" width="105" height="105" />
        <div className="hidden lg:block lg:ms-10">{navList}</div>
        <Button
          variant="filled"
          color="white"
          size="sm"
          className="hidden lg:inline-block ml-auto !shadow-none !text-lg text-green-700"
        >
          <span>Get Started</span>
        </Button>
        <IconButton
          variant="text"
          className="ml-auto h-6 w-6 text-inherit hover:bg-transparent focus:bg-transparent active:bg-transparent lg:hidden"
          ripple={false}
          onClick={() => setOpenNav(!openNav)}
        >
          {openNav ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              className="h-6 w-6 text-white"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 text-white"
              fill="none"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          )}
        </IconButton>
      </div>
      <Collapse open={openNav}>
        <div className="container mx-auto">
          {navList}
          <div className="w-fit mx-auto">
            <Button variant="filled" color="white" size="sm" className="mb-2 text-base">
              <span>Get Started</span>
            </Button>
          </div>
        </div>
      </Collapse>
    </Navbar>
  );
}
