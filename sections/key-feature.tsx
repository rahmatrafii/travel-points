"use client";
import Image from "next/image";
import React, { useState, useTransition } from "react";
import { MdOutlineInbox } from "react-icons/md";
import { LuCalendarDays } from "react-icons/lu";
import { TbDiscount } from "react-icons/tb";

const KeyFeatures = () => {
  const [imageNum, setImageNum] = useState([1, 2, 3, 4]);
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
    <section className="flex py-10 flex-col   lg:flex-row max-width-section">
      <div className="w-full lg:w-[50%] mb-10 lg:mr-10 lg:mb-0">
        <h3 className="text-sm font-semibold text-[#00A3CB] mb-2">
          KEY FEATURES
        </h3>
        <h1 className="text-black text-2xl font-bold max-w-[400px] mb-2">
          We offer best services
        </h1>
        <p className="text-slate-500 text-sm mb-9 max-w-[500px]">
          Let us guide you to your dream destination with expertise and care.
          Our commitment is to assist you discovering the perfect.
        </p>
        <div>
          <div className="flex group hover:bg-[#00A3CB] hover:text-white p-3 rounded-md  justify-start items-center mb-7 transition-colors duration-300">
            <div className="p-3 bg-red-500 text-white mr-4 rounded-xl ">
              <MdOutlineInbox className="text-[35px]" />
            </div>
            <div>
              <h3 className="text-base font-bold mb-1">
                We offer best service
              </h3>
              <p className="text-slate-500 transition-colors duration-300 group-hover:text-slate-100 text-sm">
                Our commitment is to assist you discovering.
              </p>
            </div>
          </div>
          <div className="flex hover:bg-[#00A3CB] group p-3 rounded-md hover:text-white justify-start items-center mb-7">
            <div className="p-3 bg-[#26454D] text-white mr-4 rounded-xl ">
              <LuCalendarDays className="text-[35px]" />
            </div>
            <div>
              <h3 className="text-base font-bold mb-1">Schedule your trip</h3>
              <p className="text-slate-500 group-hover:text-stone-100 transition-colors duration-300 text-sm">
                Our commitment is to assist you discovering.
              </p>
            </div>
          </div>
          <div className="flex hover:bg-[#00A3CB] group p-3 rounded-md hover:text-white justify-start items-center mb-7">
            <div className="p-3 bg-[#CC8100] text-white mr-4 rounded-xl ">
              <TbDiscount className="text-[35px]" />
            </div>
            <div>
              <h3 className="text-base font-bold mb-1">Get discount cupont</h3>
              <p className="text-slate-500 group-hover:text-stone-100 transition-colors duration-300 text-sm">
                Our commitment is to assist you discovering.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full lg:w-[50%] relative">
        <div className="flex">
          <Image
            src={`/features-${imageNum[0]}.jpg`}
            onClick={urut}
            alt="features-1"
            width={100}
            height={100}
            className={`w-[55%] h-[300px] object-cover rounded-[30px] border-[8px] border-white relative z-[2]  transition-all duration-300 ${
              isAnimating ? "opacity-0 scale-95" : "opacity-100 scale-100"
            }`}
            unoptimized
          />
          <Image
            src={`/features-${imageNum[1]}.jpg`}
            onClick={urut}
            alt="features-2"
            width={100}
            height={100}
            className={`w-[45%] h-[200px] object-cover rounded-r-[40px] rounded-tl-[40px] mt-[25px] border-r-[8px] border-white transition-all duration-300 ${
              isAnimating ? "opacity-0 scale-95" : "opacity-100 scale-100"
            } `}
            unoptimized
          />
        </div>
        <div className="flex ">
          <Image
            src={`/features-${imageNum[2]}.jpg`}
            onClick={urut}
            alt="features-3"
            width={100}
            height={100}
            className={`w-[40%] h-[150px] object-cover rounded-l-[40px] rounded-br-[40px] border-l-[8px] border-white transition-all duration-300 ${
              isAnimating ? "opacity-0 scale-95" : "opacity-100 scale-100"
            } `}
            unoptimized
          />
          <Image
            src={`/features-${imageNum[3]}.jpg`}
            onClick={urut}
            alt="features-4"
            width={100}
            height={100}
            className={`w-[60%] h-[250px] object-cover rounded-[20px] border-[8px] border-white mt-[-75px] relative z-[1] transition-all duration-300 ${
              isAnimating ? "opacity-0 scale-95" : "opacity-100 scale-100"
            }   `}
            unoptimized
          />
        </div>
      </div>
    </section>
  );
};

export default KeyFeatures;
