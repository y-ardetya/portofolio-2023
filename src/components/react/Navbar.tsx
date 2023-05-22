"use client";

import Image from "next/image";
import logo from "../../assets/logo.svg";
import { motion as m } from "framer-motion";

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      type: "spring",
      delay: 0.5,
    },
  },
};

export default function Navbar() {
  return (
    <>
      <m.nav
        variants={container}
        initial="hidden"
        animate="show"
        className="relative w-full flex flex-col justify-center z-10 my-2"
      >
        <div className="flex justify-center items-center">
          <Image src={logo} alt="logo" width={30} height={50} />
        </div>
        <ul className="flex justify-center items-center gap-10 pt-3">
          <li>Home</li>
          <li>About</li>
          <li>Projects</li>
          <li>Contact</li>
        </ul>
      </m.nav>
    </>
  );
}
