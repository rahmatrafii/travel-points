import Image from "next/image";
import React from "react";

const TravelPoints = () => {
  return (
    <section className="flex py-10 flex-col lg:gap-x-11 lg:flex-row-reverse max-width-section">
      <div className="w-full lg:w-[50%] mb-10 lg:mb-0">
        <h3 className="text-sm font-semibold text-[#00A3CB] mb-2">
          TRAVEL POINTS
        </h3>
        <h1 className="text-black text-2xl font-bold max-w-[400px] mb-2">
          We helping you find your dream location
        </h1>
        <p className="text-slate-500 text-sm mb-5 max-w-[500px]">
          Let us guide you to your dream destination with expertise and care.
          Our commitment is to assist you discovering the perfect.
        </p>
        <div>
          <div className="flex gap-x-2 mb-[8px]">
            <div className="border-[0.5px] w-[55%] p-7 hover:border-[#00A3CB] hover:shadow transition-all duration-300 hover:shadow-[#00A3CB] rounded-tr-lg rounded-l-lg flex-center flex-col">
              <span className="text-red-500 mb-3 font-bold text-lg">500+</span>
              <p className="text-center text-slate-400">Holiday Packages</p>
            </div>
            <div className="border-[0.5px] w-[45%] p-7 hover:border-[#00A3CB] hover:shadow transition-all duration-300 hover:shadow-[#00A3CB] rounded-tl-lg rounded-r-lg flex-center flex-col">
              <span className="text-red-500 mb-3 font-bold text-lg">100+</span>
              <p className="text-center text-slate-400">Luxury Hotels</p>
            </div>
          </div>
          <div className="flex gap-x-2">
            <div className="border-[0.5px] w-[45%] p-7  rounded-br-lg rounded-l-lg flex-center flex-col hover:border-[#00A3CB] hover:shadow transition-all duration-300 hover:shadow-[#00A3CB]">
              <span className="text-red-500 mb-3 font-bold text-lg">10+</span>
              <p className="text-center text-slate-400">Premium Airlens</p>
            </div>
            <div className="border-[0.5px] w-[55%] p-7  rounded-bl-lg rounded-r-lg flex-center flex-col hover:border-[#00A3CB] hover:shadow transition-all duration-300 hover:shadow-[#00A3CB]">
              <span className="text-red-500 mb-3 font-bold text-lg">20k+</span>
              <p className="text-center text-slate-400">Happy Customers</p>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full lg:w-[50%] relative">
        <div className="h-[90%] w-[90%] bg-sky-200 rounded-r-full absolute left-[-30px] lg:left-[-65px] top-10 z-[0]" />
        <div className="w-7 h-7 rounded-full bg-red-500 blur-sm absolute left-[0] top-10 z-[1]" />
        <div className="w-12 h-12 rounded-full bg-red-500 blur-sm absolute right-0 bottom-0 z-[1]" />
        <div className="w-16 h-16 rounded-full bg-yellow-200  absolute right-0 top-0 z-[1]" />
        <Image
          alt="travel"
          src={"/travel-points.png"}
          width={100}
          unoptimized
          height={100}
          className="w-full h-auto relative z-[5]"
        />
      </div>
    </section>
  );
};

export default TravelPoints;
