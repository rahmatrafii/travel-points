"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { MdOutlineSort } from "react-icons/md";

type Props = {};
const links = [
  {
    link: "/",
    name: "Home",
  },
  {
    link: "#discover",
    name: "Discover",
  },
  {
    link: "#spacial-deals",
    name: "Sepacial Deals",
  },
  {
    link: "#contact",
    name: "Contact",
  },
];

const Navbar = (props: Props) => {
  const [navActive, setNavActive] = useState(false);
  return (
    <>
      <nav className="fixed left-0 top-0 right-0 w-full bg-white  shadow-sm z-[99999]">
        <div className="flex justify-between max-width-section items-center px-5 sm:px-7 lg:px-10 py-3">
          <button
            className="text-2xl lg:hidden"
            onClick={() => setNavActive(!navActive)}
          >
            <MdOutlineSort />
          </button>
          <Link href={"/"}>
            <Image
              alt=""
              src={"/logo.png"}
              width={100}
              unoptimized
              height={100}
              className="h-[40px] w-auto"
            />
          </Link>
          <div className=" gap-x-16 hidden lg:flex">
            {links.map((item) => (
              <Link
                href={item.link}
                key={item.name}
                className={`text-black font-medium text-base`}
              >
                {item.name}
              </Link>
            ))}
          </div>

          <div className="flex items-center gap-x-3">
            <button className="border-[0.2px] border-[#d0edf5] py-1 px-3 rounded-full  justify-center items-center w-max hidden lg:flex">
              Sign Up
            </button>
            <button className="py-1 px-4 text-white bg-[#00A3CB] rounded-full shadow-lg shadow-[#81dbf4]">
              Sign In
            </button>
          </div>
        </div>
      </nav>
      <div
        className={`fixed lg:hidden h-screen top-[0%] left-0 w-full bg-white z-[999] flex-center flex-col gap-y-8 transition-transform duration-500 ${
          navActive ? "-translate-y-[0%]" : "-translate-y-full"
        }`}
      >
        {links.map((item) => (
          <Link
            href={item.link}
            key={item.name}
            className={`text-black font-medium text-base`}
          >
            {item.name}
          </Link>
        ))}
      </div>
    </>
  );
};

export default Navbar;
