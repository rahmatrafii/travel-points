"use client";
import React, { useState, useTransition } from "react";
import { TbWorld } from "react-icons/tb";
import { BsPlayCircle } from "react-icons/bs";
import Image from "next/image";
import { IoAirplaneSharp } from "react-icons/io5";
import { GoLocation } from "react-icons/go";
import { RiUserAddLine } from "react-icons/ri";
import { useEffect } from "react";

const HomeSection = () => {
  const [imageNum, setImageNum] = useState([1, 2, 3]);
  const [isAnimating, setIsAnimating] = useState(false);
  const [isPending, startTransition] = useTransition();

  const urut = () => {
    if (isAnimating) return; // Hindari klik berulang selama animasi
    setIsAnimating(true); // Mulai animasi

    // Tambahkan jeda untuk animasi keluar sebelum rotasi array
    setTimeout(() => {
      startTransition(() => {
        const lastElement = imageNum[imageNum.length - 1];
        const rotatedArray = [lastElement, ...imageNum.slice(0, -1)];
        setImageNum(rotatedArray); // Perbarui array
      });
    }, 300); // Sesuaikan dengan durasi animasi CSS

    // Selesaikan animasi setelah pembaruan
    setTimeout(() => setIsAnimating(false), 600); // Total durasi animasi
  };

  return (
    <section
      id="home"
      className="lg:flex py-14 gap-x-20 lg:justify-between max-width-section"
    >
      <div className="mb-20 lg:mb-0 w-full lg:w-1/2 relative ">
        <Image
          alt=""
          src={"/world.png"}
          width={100}
          height={100}
          className="w-full h-full object-contain z-[1] left-0 top-0 right-0  absolute"
        />
        <span className="flex items-center gap-x-2 justify-start text-[#00487B] shadow-sm text-xs sm:text-sm w-max px-3 py-1 rounded-full mb-5">
          Explore the world!
          <TbWorld />
        </span>
        <h2 className="text-[40px] sm:text-[45px] md:text-[60px]  font-bold mb-5">
          Travel <p className="text-[#00A3CB] inline-block">top</p> <br />
          <p className="text-[#00A3CB] inline-block">destination</p> of <br />{" "}
          the world
        </h2>
        <p className="text-[#8C8B92] mb-5 max-w-[500px]">
          Immerse yourself in a world of wanderlust with our curated travel
          experiences. From breathtaking landscapes to cultural gems, embark on
          unforgettable adventures.
        </p>
        <div className="flex gap-x-4 justify-start items-center font-medium">
          <button className="py-1 px-3 text-white bg-[#00A3CB] rounded-full shadow-lg shadow-[#81dbf4]">
            Get Started
          </button>
          <button className="border-[0.2px] border-[#d0edf5] py-1 px-3 rounded-full flex justify-center items-center w-max">
            <BsPlayCircle className="mr-2 text-[#00A3CB]" />
            Watch Demo
          </button>
        </div>
      </div>
      <div className="relative w-full lg:w-1/2 h-[600px] lg:h-[510px]">
        <div className="p-4 rounded-full absolute bg-[#26454D] text-white z-[5] left-[-20px]  top-3 shadow-xl  text-xl ">
          <IoAirplaneSharp />
        </div>
        <div className=" p-3 flex items-center justify-center bg-white shadow-xl  rounded-full absolute right-[-10px] lg:left-[380px] lg:right-auto top-[20%] w-max z-[5]">
          <GoLocation className="text-orange-400 mr-2" />
          <span className="">Top Places</span>
        </div>
        <div className="p-4 rounded-full absolute bg-red-200 text-white z-[5] shadow-xl  bottom-[-20px] lg:bottom-0  right-0 lg:left-[50%] lg:right-auto">
          <RiUserAddLine className="text-red-400" />
        </div>
        {/* Gambar 1 */}
        <Image
          alt="Image1"
          src={`/home-${imageNum[0]}.jpg`}
          width={100}
          height={100}
          onClick={urut}
          unoptimized
          className={`w-[250px] h-[400px] lg:w-[200px] lg:h-[250px] object-cover object-center lg:left-[0px] rounded-2xl absolute top-0 left-0 z-[1] shadow-xl transition-all duration-300 ${
            isAnimating ? "opacity-0 scale-95" : "opacity-100 scale-100"
          }`}
        />
        {/* Gambar 2 */}
        <Image
          alt="Image2"
          src={`/home-${imageNum[1]}.jpg`}
          width={100}
          height={100}
          onClick={urut}
          unoptimized
          className={`w-[250px] h-[400px] lg:w-[200px] lg:h-[250px] lg:bottom-0 lg:top-auto lg:left-[0px] lg:-translate-x-0 object-cover object-center rounded-2xl absolute z-[2] top-[100px]  left-[50%] -translate-x-1/2 shadow-xl transition-all duration-300 ${
            isAnimating ? "opacity-0 scale-95" : "opacity-100 scale-100"
          }`}
        />
        {/* Gambar 3 */}
        <Image
          alt="Image3"
          src={`/home-${imageNum[2]}.jpg`}
          width={100}
          height={100}
          onClick={urut}
          unoptimized
          className={`w-[250px] h-[400px] lg:w-[200px] lg:h-[300px] object-cover object-center rounded-2xl absolute z-[2] top-[200px] lg:top-[100px] right-0 shadow-xl lg:left-[210px] lg:right-auto transition-all duration-300 ${
            isAnimating ? "opacity-0 scale-95" : "opacity-100 scale-100"
          }`}
        />
      </div>
    </section>
  );
};

export default HomeSection;
