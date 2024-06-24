import React from "react";

export default function SidePanel() {
  return (
    <div className="shadow-panelShadow md:h-[325px] lg:h-[300px] p-3 lg:p-5 rounded-md">
      <div className="flex items-center justify-between">
        <p className="text__para mt-0 font-semibold">Consultation fee</p>
        <span className="text-[16px] leading-7 le:text-[22px] lg:leading-8 text-textColor font-bold">
          2000INR
        </span>
      </div>
      <div className="mt-[30px]">
        <p className="text__para mt-0 font-semibold text-textColor">
          Available Time Slots
        </p>
        <ul className="mt-[30px]">
          <li className="flex items-center justify-between mb-2">
            <p className="text-[15px] leading-6 text-textColor font-semibold">
              Sunday
            </p>
            <p className="text-[12px] leadin-6 text-irisBlueColor font-semibold">
              4:00 PM - 9:30 PM
            </p>
          </li>
          <li className="flex items-center justify-between mb-2">
            <p className="text-[15px] leading-6 text-textColor font-semibold">
              Sunday
            </p>
            <p className="text-[12px] leadin-6 text-irisBlueColor font-semibold">
              4:00 PM - 9:30 PM
            </p>
          </li>
          <li className="flex items-center justify-between mb-2">
            <p className="text-[15px] leading-6 text-textColor font-semibold">
              Sunday
            </p>
            <p className="text-[12px] leadin-6 text-irisBlueColor font-semibold">
              4:00 PM - 9:30 PM
            </p>
          </li>
        </ul>
      </div>
      <button className="btn px-2 w-full rounded-md">Book Appointment</button>
    </div>
  );
}
