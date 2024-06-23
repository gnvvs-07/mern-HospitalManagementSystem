import React from "react";
import { doctors } from "../../assets/data/doctors";
import DoctorCard from "../../components/Doctors/DoctorCard";
import Testimonial from "../../components/Testimonial/Testimonial";

export default function Doctors() {
  return (
    <div>
      <section className="bg-[#fffff9]">
        <div className="container text-center">
          <h2 className="heading">Find a Doctor</h2>
          <div className="max-w-[570px] mt-3 mx-auto bg-[#fee] rounded-md flex justify-between">
            <input
              type="search"
              className="py-4 pl-4 bg-transparent w-full focus:outline-dotted cursor-pointer placeholder:text-primaryColor"
              placeholder="Search a Doctor"
            />
            <button className="btn mt-0 rounded-[0px] rounded-r-md">
              Search
            </button>
          </div>
        </div>
      </section>
      {/* list of doctors */}
      <section>
        <div className="container">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 ">
            {doctors.map((doctor) => (
              <DoctorCard key={doctor.id} doctor={doctor} />
            ))}
          </div>
        </div>
      </section>
      {/* testimonial section */}
      <section>
        <div className="container">
          <div className="xl:w-[470px] mx-auto">
            <h2 className="heading text-center">
              What our patients say about us
            </h2>
            <p className="text__para text-center">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse a
              quod sint sapiente quis fuga?
            </p>
          </div>
          <Testimonial />
        </div>
      </section>
    </div>
  );
}
