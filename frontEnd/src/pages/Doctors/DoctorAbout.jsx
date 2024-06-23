import React from "react";
import { formatDate } from "../../utils/formatDate";
export default function DoctorAbout() {
  return (
    <div>
      {/* about doctor */}
      <div>
        <h3 className="text-[20px] leading-[30px] text-headingColor font-semibold flex items-center gap-2">
          About <span className="text-irisBlueColor">Dr. John Doe</span>
        </h3>
        <p className="text__para">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ea aut et,
          eveniet, recusandae sit natus voluptatum eligendi quis facilis
          doloribus illum. Fugiat omnis possimus sequi blanditiis totam eum
          nihil ad.
        </p>
      </div>
      {/* education */}
      <div className="mt-12">
        <h3 className="text-[20px] leading-[30px] text-textColor font-semibold">
          Education
        </h3>
        {/* list of experience and education */}
        <ul className="pt-4 md:p-5">
          <li className="flex flex-col sm:flex-row sm:justify-between sm:items-end md:gap-5 mb-[30px]">
            <div>
              <span className="text-irisBlueColor text-[15px] leading-6 font-semibold">
                {formatDate("17-03-2007")} - {formatDate("12-05-2012")}
              </span>
              <p className="text-[16px] leading-6 font-medium text-textColor">
                PHD in Surgeon
              </p>
            </div>
            <p className="text-[14px] leading-5 font-semibold text-teal-500">
              Sivaji International Hospital,Mumbai,India.
            </p>
          </li>
          <li className="flex flex-col sm:flex-row sm:justify-between sm:items-end md:gap-5 mb-[30px]">
            <div>
              <span className="text-irisBlueColor text-[15px] leading-6 font-semibold">
                {formatDate("13-11-2004")} - {formatDate("01-02-2006")}
              </span>
              <p className="text-[16px] leading-6 font-medium text-textColor">
                MS in Cardio
              </p>
            </div>
            <p className="text-[14px] leading-5 font-semibold text-teal-500">
              Sivaji International Hospital,Mumbai,India.
            </p>
          </li>
          <li className="flex flex-col sm:flex-row sm:justify-between sm:items-end md:gap-5 mb-[30px]">
            <div>
              <span className="text-irisBlueColor text-[15px] leading-6 font-semibold">
                {formatDate("16-02-2001")} - {formatDate("19-02-2006")}
              </span>
              <p className="text-[16px] leading-6 font-medium text-textColor">
                MBBS
              </p>
            </div>
            <p className="text-[14px] leading-5 font-semibold text-teal-500">
              Sri Ram Medical Association,Ayodhya,UP,India
            </p>
          </li>
        </ul>
      </div>
      {/* experience from 2013 */}
      <div className="mt-12">
        <h3 className="text-[20px] leading-[30px] text-textColor font-semibold">
          Experience
        </h3>
        <ul className="grid sm:grid-cols-1 gap-[30px] pt-4 md:p-5 ">
          <li className="p-4 rounded bg-teal-500">
            <span className="text-yellowColor text-[15px] leading-6 font-semibold">
              {formatDate("01-01-2016")} - Present
            </span>
            <p className="text-[14px] leadin-6 font-bold text-primaryColor">
              Sr.Surgeon-Cardio
            </p>
            <p className="text-[14px] leadin-5 font-medium">
              Sivaji International Hospital,Mumbai,India.
            </p>
          </li>
          <li className="p-4 rounded bg-teal-500">
            <span className="text-yellowColor text-[15px] leading-6 font-semibold">
              {formatDate("01-01-2013")} - {formatDate("31-12-2015")}
            </span>
            <p className="text-[14px] leadin-6 font-bold text-primaryColor">
              Jr.Surgeon-Cardio
            </p>
            <p className="text-[14px] leadin-5 font-medium">
              Sivaji International Hospital,Mumbai,India.
            </p>
          </li>
        </ul>
      </div>
    </div>
  );
}
