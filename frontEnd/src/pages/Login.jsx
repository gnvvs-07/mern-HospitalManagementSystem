import { useState } from "react";
import avatar_img from "../assets/images/patient-avatar.png";
import { Link } from "react-router-dom";
export default function Login() {
  const [FormData, setFormData] = useState({
    // login function parameters
    email: "",
    password: "",
  });
  const handleChange = (e) => {
    setFormData({ ...FormData, [e.target.name]: e.target.value });
  };
  return (
    <section className="p-3 lg:p-1">
      <div className="w-full max-w-[570px] mx-auto rounded-md shadow-xl p-3 md:p-10">
        <div className="flex justify-center gap-[20px] items-center">
          <img
            src={avatar_img}
            className="w-[40px] h-auto rounded-full"
            alt=""
          />
          <h2 className="text-3xl text-center font-semibold text-irisBlueColor">
            Login
          </h2>
        </div>
        {/* login form */}
        <form action="" className="py-4 md:py-0">
          <div className="mb-5">
            <input
              type="email"
              name="email"
              id="email"
              placeholder="youremail@domain.com"
              className="placeholder:text-gray-400 w-full px-4 py-3 border-b border-solid border-teal-500 focus:outline-none focus:border-b-green-500 text-[15px] leading-7 cursor-text "
              value={FormData.email} //setting the value as email
              onChange={handleChange}
              required
            />
          </div>
          <div className="mb-5">
            <input
              type="password"
              name="password"
              id="password"
              placeholder="**********"
              className="placeholder:text-gray-400 w-full px-4 py-3 border-b border-solid border-teal-500 focus:outline-none focus:border-b-green-500 text-[15px] leading-7 cursor-text "
              value={FormData.password} //setting the value as email
              onChange={handleChange}
              required
            />
          </div>
          <div className="flex items-center justify-between">
            <button className="btn mt-0">Login</button>
            {/* link for register */}
            <p className=" text-textColor text-center">
              Don&apos;t have an account ,
              <Link
                to="/register"
                className=" text-irisBlueColor hover:text-primaryColor"
              >
                create one
              </Link>
            </p>
          </div>
          {/* google auth */}
          <button className="w-full outline-teal-500 rounded-2xl mt-5 font-semibold bg-primaryColor text-white p-3">
            continue with google
          </button>
        </form>
      </div>
    </section>
  );
}
