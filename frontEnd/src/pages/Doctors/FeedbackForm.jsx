import { useState } from "react";
import { IoMdStar } from "react-icons/io";

export default function FeedbackForm() {
  // setting rating
  const [rating, setRating] = useState(0);
  const [hover, setHover] = useState(0);
  const [reviewText, setReviewText] = useState("");
  const handleSubmitReview = (e)=>{
    e.preventDefault();
    // backend api call here
  }
  return (
    <form>
      <div>
        <h3 className="text-headingColor tet-[16px] leadin-6 font-semibold mb-4">
          Your Feedback Matters!
        </h3>
        <div>
          {/* rating  */}
          {[...Array(5).keys()].map((_, index) => {
            index += 1;
            return (
              <button
                key={index}
                type="button"
                onClick={() => {
                  setRating(index);
                }}
                onMouseEnter={() => {
                  setHover(index);
                }}
                onMouseLeave={() => {
                  setHover(rating);
                }}
                onDoubleClick={() => {
                  setRating(0);
                  setHover(0);
                }}
                // changing color while hovering on stars
                className={`${
                  index <= ((rating && hover) || hover)
                    ? "text-yellowColor"
                    : "text-irisBlueColor"
                } bg-transparent border-none outline-none cursor-pointer`}
              >
                <span>
                  <IoMdStar />
                </span>
              </button>
            );
          })}
        </div>
      </div>
      {/* review text */}
      <div className="mt-[30px]">
        <h3 className="text-headingColor text-[20px] font-semibold mt-0 mb-[30px]">
          Share your Feedback
        </h3>
        <textarea
          className="border border-solid border-teal-500 focus:outline outline-primaryColor w-full px-5 py-3 rounded-md"
          rows="6"
          placeholder="Give your feed back here"
          onChange={(e) => setReviewText(e.target.value)}
        ></textarea>
      </div>
      {/* submit button */}
      <button className="btn" onClick={handleSubmitReview} type="submit">Submit Feedback</button>
    </form>
  );
}
