import React from "react";
import { PiImageThin } from "react-icons/pi";
import { GrDirections } from "react-icons/gr";
import { LuMousePointer2 } from "react-icons/lu";

const cardsData = [
  {
    icon: <PiImageThin />,
    title: "Wanderlust Escapes",
    desc: "Dive into tailor-made journeys, from exotic getaways to cultural odysseys, crafted just for you.",
  },
  {
    icon: <GrDirections />,
    title: "Wanderlust Escapes",
    desc: "Dive into tailor-made journeys, from exotic getaways to cultural odysseys, crafted just for you.",
  },
  {
    icon: <LuMousePointer2 />,
    title: "Wanderlust Escapes",
    desc: "Dive into tailor-made journeys, from exotic getaways to cultural odysseys, crafted just for you.",
  },
];

const Services = () => {
  return (
    <section id="services" className="max-width-section w-full py-14 ">
      <h4 className="text-sm font-semibold text-[#00A3CB] mb-2">SERVICES</h4>
      <h1 className="text-black text-2xl font-bold mb-10 max-w-[400px]">
        Tailored Journeys for Comprehensive Travel Experience
      </h1>
      <div className="flex justify-center lg:justify-between items-center text-center flex-wrap  ">
        {cardsData.map((item, i) => (
          <div
            key={i}
            className="flex flex-col w-[300px]  justify-center items-center  p-5 rounded-lg group cursor-pointer border-[0.5px] border-white hover:border-[#00A3CB]"
          >
            <div className="p-2 bg-[#e1f9ff] group-hover:bg-[#00A3CB] text-[#00A3CB] group-hover:text-white text-[40px]  w-max rounded-full mx-auto mb-5 transition-colors duration-300 group-hover:shadow-xl">
              {item.icon}
            </div>
            <h4 className="text-xl font-bold mb-5">{item.title}</h4>
            <p className="text-slate-600 text-sm">{item.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Services;
