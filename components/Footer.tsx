"use client";

import Link from "next/link";
import { FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="relative max-w-[1300px] bg-[#00A3CB] py-16 md:py-24  px-4 lg:px-10">
      <h2 className="absolute left-1/2 -translate-x-1/2 top-[0px] text-white text-[45px] sm:text-[60px] md:text-[90px] lg:text-[130px] xl:text-[160px] z-[0] font-bold opacity-20">
        SUBSCRIBE
      </h2>
      <div className=" relative z-[1] w-full max-w-[300px] mx-auto flex rounded-full overflow-hidden bg-white mb-10 lg:mb-20">
        <input
          placeholder="Your Email..."
          className="p-3 w-full focus:outline-none"
        />
        <button className="text-white bg-[#479547] px-4 focus:outline-none focus:border-none rounded-full">
          SEND
        </button>
      </div>
      <div className="flex flex-col lg:flex-row lg:justify-between items-center justify-center w-full ">
        <div className="flex flex-col lg:flex-row lg:gap-x-6 items-center gap-y-5 text-slate-100 mb-6 text-sm">
          <Link href={"/"}>ABOUT</Link>
          <Link href={"/"}>CONTACT US</Link>
          <Link href={"/"}>HELP</Link>
          <Link href={"/"}>LEGAL</Link>
          <Link href={"/"}>STORE</Link>
        </div>
        <div className="flex-center gap-x-7 text-slate-100 text-xl mb-6">
          <FaInstagram />
          <FaTwitter />
          <FaFacebookF />
        </div>
        <div className="flex items-center justify-center gap-x-10 text-slate-100 text-[10px]">
          <p>©️ 2024 travelslogan</p>
          <p>A travel Site</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
