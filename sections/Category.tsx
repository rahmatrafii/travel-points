import Image from "next/image";
import React from "react";

const services = [
  "/camping.svg",
  "/travel-t2.svg",
  "/letstravel.svg",
  "/summer-ad.svg",
  "/summer-p.svg",
  "/travel-t.svg",
];
const Category = () => {
  return (
    <div className="flex py-8 items-center justify-between w-full overflow-x-scroll px-4 disable-scroll max-width-section">
      {services.map((item) => (
        <Image
          key={item}
          src={item}
          alt={item}
          width={100}
          height={100}
          className={`h-[90px] lg:h-[100px]   mr-12  p-2 rounded-xl hover:bg-[#00A3CB] hover:shadow-xl transition-colors duration-300 `}
          unoptimized
        />
      ))}
    </div>
  );
};

export default Category;
