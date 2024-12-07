"use client";
import { useSwiper } from "swiper/react";
import { BsArrowRight, BsArrowLeft } from "react-icons/bs";
import { useState } from "react";

export const SwiperButton = () => {
  const swiper = useSwiper();
  const [clicked, setClicked] = useState<string>("");

  const handleClick = (type: "next" | "prev") => {
    if (type == "next") {
      swiper.slideNext();
      setClicked("next");
    } else {
      swiper.slidePrev();
      setClicked("prev");
    }
  };
  return (
    <div className="absolute left-0 right-auto sm:left-auto sm:right-0 top-[30px] z-10 flex">
      <button
        className={`w-[50px] h-[50px] text-2xl top-1/2 -translate-y-1/2  rounded-full flex-center mr-7 ${
          clicked == "prev"
            ? "bg-[#00A3CB]  text-white shadow-xl"
            : "bg-white text-black"
        } `}
        onClick={() => handleClick("prev")}
      >
        <BsArrowLeft />
      </button>
      <button
        className={`w-[50px] h-[50px] text-2xl top-1/2 -translate-y-1/2   rounded-full flex-center ${
          clicked == "next"
            ? "bg-[#00A3CB]  text-white shadow-xl"
            : "bg-white text-black"
        } `}
        onClick={() => handleClick("next")}
      >
        <BsArrowRight />
      </button>
    </div>
  );
};
