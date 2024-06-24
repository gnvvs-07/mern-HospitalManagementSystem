import { useState } from "react";
import avatar from "../../assets/images/avatar-icon.png";
import { formatDate } from "../../utils/formatDate";
import { IoMdStar } from "react-icons/io";
import FeedbackForm from "./FeedbackForm";
export default function Feedback() {
  // feed back form visibility
  const [showFeedbackForm, setShowFeedbackForm] = useState(false);
  return (
    <div>
      <div className="mb-[50px]">
        <h3 className="text-[20px] leading-[30px] font-semibold text-headingColor mb-[30px]">
          What Our Customers Say
        </h3>
        <div className="flex justify-between mb-[30px] gap-10">
          <div className="flex gap-3">
            <figure className="w-10 h-10 rounded-full">
              <img src={avatar} className="w-full" alt="" />
            </figure>
            <div>
              <h5 className="text-[15px] leadin-6 text-irisBlueColor font-bold">
                Sivaji
              </h5>
              <p className="text-[12px] leadin-6 text-textColor">
                {formatDate("02-11-2023")}
              </p>
              <p className="text__para mt-3 font-italic text-[13px]">
                I am very happy with the service provided by the team. They are
                very responsive and helpful
              </p>
            </div>
          </div>
          <div className="flex gap-1">
            {
              // ratings
              [...Array(5).keys()].map((_, index) => (
                <IoMdStar key={index} color="#0312f3" />
              ))
            }
          </div>
        </div>
        {/* give review buttton */}
        {!showFeedbackForm && (
          <div className="text-center">
            <button
              className="btn"
              onClick={() => setShowFeedbackForm(!showFeedbackForm)}
            >
              Give Review
            </button>
          </div>
        )}
        {/* feed back form */}
        {
          showFeedbackForm && (
            <FeedbackForm/>
          )
        }
      </div>
    </div>
  );
}
