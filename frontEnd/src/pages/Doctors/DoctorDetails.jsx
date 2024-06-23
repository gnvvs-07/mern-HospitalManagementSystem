import React, { useState } from "react";
import doctorImg from "../../assets/images/doctor-img01.png";
import starIcon from "../../assets/images/Star.png";
import DoctorAbout from "./DoctorAbout";
import Feedback from "./Feedback";

export default function DoctorDetails() {
  const [tab, setTab] = useState("about");
  return (
    <div className="max-w-[1170px] px-auto mx-auto">
      <div className="grid md:grid-cols-3 gap-[50px]">
        <div className="md:col-span-2">
          <div className="flex items-center gap-5">
            <figure className="max-w-[200px] max-h-[200px] mt-4">
              <img src={doctorImg} alt="" className="w-full" />
            </figure>
            <div>
              <span className="bg-[#ccfef0] text-primaryColor py-1 px-6 lg:py-2 lg:px-6 text-[12px] leading-4 lg:text-[16px] lg:leading-7 font-semibold rounded">
                NeuroSurgeon
              </span>
              <h3 className="text-headingColor text-[22px] leading-9 mt-3 font-semibold">
                Dr. John Doe
              </h3>
              <div className="flex items-center gap-[6px]">
                <span className="flex items-center gap-[6px] text-[14px] leading-5 lg:text-[16px] lg:leading-7 font-semibold text-headingColor">
                  <img src={starIcon} alt="" />
                  4.8(229)
                </span>
              </div>
              <p className="text__para text-[14px] leading-5 md:text-[15px] lg:max-w-[390px]">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam
                reprehenderit repellendus dicta earum assumenda obcaecati?
              </p>
            </div>
          </div>
          {/* about and feed backs */}
          <div className="mt-[50px] border-b border-solid border-transparent">
            {/* about button */}
            <button
              onClick={() => setTab("about")}
              className={`py-2 px-5 mr-5 text-[16px] leading-7 text-headingColor font-semibold ${
                tab === "about"
                  ? "border-b border-solid border-primaryColor"
                  : ""
              }`}
            >
              About
            </button>
            <button
              onClick={() => setTab("feedback")}
              className={`py-2 px-5 mr-5 text-[16px] leading-7 text-headingColor font-semibold ${
                tab === "feedback"
                  ? "border-b border-solid border-yellowColor"
                  : ""
              }`}
            >
              Feedback
            </button>
          </div>
          <div className="mt-[50px]">
            {
              tab === "about" ? (<DoctorAbout/>) : (<Feedback/>)

            }
          </div>
        </div>
      </div>
    </div>
  );
}
