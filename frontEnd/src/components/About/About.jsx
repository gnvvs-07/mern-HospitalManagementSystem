import React from "react";
import aboutImg from "../../assets/images/about.png";
import aboutCardImg from "../../assets/images/about-card.png";
import { Link } from "react-router-dom";
export default function About() {
  return (
    <section>
      <div className="container">
        <div className="flex justify-between gap-[50px] lg:gap-[130px] xl:gap-0 flex-col lg:flex-row">
          {/* image part */}
          <div className="relative w-3/4 lg:w-1/2 xl:w-[770px] z-10 order-2 lg:order-1">
            <img src={aboutImg} alt="" />
            <div className="absolute z-20 bottom-4 w-[200px] md:w-[300px] right-[-30%] md:right-[-7%] lg:right-[22%]">
              <img src={aboutCardImg} alt="" />
            </div>
          </div>
          {/* content part */}
          <div className="w-full lg:w-1/2 xl:w-[670px] order-1 lg:order-2">
            <h2 className="heading">Lorem ipsum dolor sit amet consectetur.</h2>
            <p className="text__para">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum
              doloremque corrupti quae numquam harum iure ab repudiandae nam
              voluptate! Dolorum laboriosam nobis excepturi alias quod.
            </p>
            <p className="text__para mt-[30px]">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis
              tempora voluptates cupiditate accusantium, ducimus quia? Numquam
              quidem id vero perspiciatis quas magni adipisci totam sunt?
            </p>
            <Link to="/">
                <button className="btn">Learn More</button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
