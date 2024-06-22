import React, { useState, useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import patientAvatar from "../../assets/images/patient-avatar.png";
import { MdStarOutline } from "react-icons/md";
import { FaArrowRight, FaArrowLeft } from "react-icons/fa";

export default function Testimonial() {
  const [activeIndex, setActiveIndex] = useState(0);
  const swiperRef = useRef(null);

  const reviews = [
    {
      name: "John Wick",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
    {
      name: "Jane Doe",
      text: "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    },
    {
      name: "Mary Johnson",
      text: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
    },
    {
      name: "Alex Smith",
      text: "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    },
  ];

  const handleNext = () => {
    if (swiperRef.current && swiperRef.current.swiper) {
      swiperRef.current.swiper.slideNext();
    }
  };

  const handlePrev = () => {
    if (swiperRef.current && swiperRef.current.swiper) {
      swiperRef.current.swiper.slidePrev();
    }
  };

  return (
    <div className="relative mt-[30px] lg:mt-[55px]">
      <Swiper
        ref={swiperRef}
        spaceBetween={30}
        slidesPerView={1}
        onSlideChange={(swiper) => setActiveIndex(swiper.activeIndex)}
        breakpoints={{
          640: {
            slidesPerView: 1,
            spaceBetween: 0,
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          1024: {
            slidesPerView: 3,
            spaceBetween: 30,
          },
        }}
      >
        {reviews.map((review, index) => (
          <SwiperSlide key={index}>
            <div
              className={`py-[30px] px-5 rounded-3 ${
                index === activeIndex+1 ? "bg-white" : "bg-amber-50"

              }`}
            >
              <div className="flex items-center gap-[13px]">
                <img src={patientAvatar} alt="" />
                <div>
                  <h4 className="text-[16px] leading-[30px] font-semibold text-headingColor">
                    {review.name}
                  </h4>
                  <div className="flex text-yellowColor">
                    <MdStarOutline />
                    <MdStarOutline />
                    <MdStarOutline />
                    <MdStarOutline />
                  </div>
                </div>
              </div>
              <p className="mt-4 text-[14px] leading-6 lg:text-[16px] lg:leading-7 font-[400] text-textColor">
                {review.text}
              </p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      <div
        className="absolute top-1/2 transform -translate-y-1/2 right-0 z-10 cursor-pointer"
        onClick={handleNext}
      >
        <FaArrowRight />
      </div>
      <div
        className="absolute top-1/2 transform -translate-y-1/2 left-0 z-10 cursor-pointer"
        onClick={handlePrev}
      >
        <FaArrowLeft />
      </div>
      <div className="text-center mt-4">
        {activeIndex + 1} / {reviews.length}
      </div>
    </div>
  );
}
