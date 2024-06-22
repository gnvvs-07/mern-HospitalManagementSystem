import React from "react";
import { MdKeyboardDoubleArrowRight } from "react-icons/md";
import { Link } from "react-router-dom";

function ServiceCard({ item, index }) {
  // accessing all details of services
  const { name, desc, bgColor, textColor } = item;
  return (
    <div className="py-[30px] px-3 lg:px-5">
      <h2 className="text-[25px] leading-9 text-headingColor font-[700]">
        {name}
      </h2>
      <p className="text-[15px] leading-7 font-[400] text-textColor mt-4">
        {desc}
      </p>
      <div className="flex items-center justify-between mt-[30px]">
        <Link
          to="/doctors"
          className="w-[44px] h-[44px] rounded-full border border-solid border-[#108211] flex items-center justify-center group hover:bg-irisBlueColor hover:text-white hover:border-none"
        >
          <MdKeyboardDoubleArrowRight />
        </Link>
        <span
          className="w-[40px] h-[40px] flex items-center justify-center text-[18px] leading-[30px] font-[600]"
          style={{
            background: `${bgColor}`,
            color: `${textColor}`,
            borderRadius: "6px 0 0 6px",
          }}
        >
          {index + 1}
        </span>
      </div>
    </div>
  );
}

export default ServiceCard;
