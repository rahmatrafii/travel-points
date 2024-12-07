"use client";
import React from "react";
import { BsFillStarFill } from "react-icons/bs";
import Image from "next/image";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { A11y, Navigation, Pagination } from "swiper/modules";
import { SwiperButton } from "@/components/SwiperButton";

const data = [
  "/top-1.jpg",
  "/top-2.jpg",
  "/top-3.jpg",
  "/top-4.jpg",
  "/top-1.jpg",
  "/top-2.jpg",
  "/top-3.jpg",
  "/top-4.jpg",
];
const TopDestinations = () => {
  return (
    <section id="services" className="max-width-section w-full py-14 ">
      <div>
        <h4 className="text-sm font-semibold text-[#00A3CB] mb-2">
          TOP DESTINATIONS
        </h4>
        <h1 className="text-black text-2xl font-bold max-w-[400px]">
          Top Picks Unveiled
        </h1>
      </div>
      <div className="mt-[15px] sm:mt-[-45px] ">
        <Swiper
          spaceBetween={0}
          slidesPerView={4}
          modules={[Pagination, Navigation, A11y]}
          className="relative  "
          draggable={false}
          breakpoints={{
            0: {
              slidesPerView: 1,
            },
            550: {
              slidesPerView: 2,
            },
            850: {
              slidesPerView: 3,
            },
            1100: {
              slidesPerView: 4,
            },
          }}
        >
          <SwiperButton />

          <div className="p-4">
            {data.map((item, i) => (
              <SwiperSlide key={i}>
                <div className="flex w-auto flex-col items-start justify-start mx-3 mt-[70px] sm:mt-[100px]">
                  <Image
                    src={item}
                    alt="top1"
                    width={100}
                    height={100}
                    unoptimized
                    className=" w-full h-[200px] mb-3 object-cover rounded-xl"
                  />
                  <h3 className="text-xl font-bold mb-3">
                    Paradise Beach, Bantayan Island
                  </h3>
                  <div className="flex items-center w-full justify-between mb-3">
                    <span className="text-sm text-slate-400">Rome, Italy</span>
                    <div className="flex-center text-orange-500">
                      <span className="mr-1">4.8</span>
                      <BsFillStarFill />
                    </div>
                  </div>
                  <h3 className="text-xl font-bold text-[#00A3CB] mb-3">
                    $550.16
                  </h3>
                </div>
              </SwiperSlide>
            ))}
          </div>
        </Swiper>
      </div>
    </section>
  );
};

export default TopDestinations;
