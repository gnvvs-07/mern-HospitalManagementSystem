// src/pages/Signup.jsx
import { Link, useNavigate } from "react-router-dom";
import signupImg from "../assets/images/signup.gif";
import { useState } from "react";
import uploadImageToCloudinary from "../utils/uploadCloudinary";
import { toast } from "react-toastify";
import HashLoader from "react-spinners/HashLoader";

export default function Signup() {
  const [selectedFile, setSelectedFile] = useState(null);
  const [previewURL, setPreviewURL] = useState("");
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    photo: "",
    gender: "",
    role: "patient",
  });
  const navigate = useNavigate();
  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  const handleFileInputChange = async (e) => {
    const file = e.target.files[0];
    const data = await uploadImageToCloudinary(file);
    setPreviewURL(data.url);
    setSelectedFile(data.url);
    setFormData({ ...formData, photo: data.url });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const res = await fetch("http://localhost:8000/api/v1/auth/register", {
        method: "post",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
      const data = await res.json();
      if (!res.ok) {
        throw new Error(data.message || "Something went wrong");
      }
      toast.success(data.message);
      setLoading(false);
      navigate("/login");
    } catch (error) {
      toast.error("Registration failed");
      setLoading(false);
      console.log("Error in registration", error.message);
    }
  };
  return (
    <section className="px-5 xl:px-6">
      <div className="max-w-[1170px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2">
          {/* img */}
          <div className="hidden lg:block bg-primaryColor">
            <figure>
              <img src={signupImg} alt="" className="w-full" />
            </figure>
          </div>
          {/* form */}
          <div className="rounded-l-lg lg:pl-16 py-10">
            <h2 className="text-3xl font-bold mb-4">Sign up</h2>
            <form onSubmit={handleSubmit}>
              <div className="mb-5">
                <input
                  type="text"
                  name="name"
                  id="name"
                  placeholder="your name"
                  className="placeholder:text-gray-400 w-full px-4 py-3 border-b border-solid border-teal-500 focus:outline-none focus:border-b-green-500 text-[15px] leading-7 cursor-text"
                  onChange={handleInputChange}
                  value={formData.name}
                  required
                />
              </div>
              <div className="mb-5">
                <input
                  type="email"
                  name="email"
                  onChange={handleInputChange}
                  value={formData.email}
                  id="email"
                  placeholder="youremail@domain.com"
                  className="placeholder:text-gray-400 w-full px-4 py-3 border-b border-solid border-teal-500 focus:outline-none focus:border-b-green-500 text-[15px] leading-7 cursor-text"
                  required
                />
              </div>
              <div className="mb-5">
                <input
                  type="password"
                  name="password"
                  id="password"
                  placeholder="Enter your password *********"
                  className="placeholder:text-gray-400 w-full px-4 py-3 border-b border-solid border-teal-500 focus:outline-none focus:border-b-green-500 text-[15px] leading-7 cursor-text"
                  onChange={handleInputChange}
                  value={formData.password}
                  required
                />
              </div>
              {/* roles */}
              <div className="mb-5 flex flex-between items-center">
                <label
                  className="text-headingColor font-semibold text-[16px] leadin-7"
                  htmlFor=""
                >
                  Are you a
                  <select
                    className="text-primaryColor font-semibold text-[15px] leading-7 p-3"
                    name="role"
                    id="role"
                    onChange={handleInputChange}
                    value={formData.role}
                  >
                    {/* options */}
                    <option value="patient">Patient</option>
                    <option value="doctor">Doctor</option>
                  </select>
                </label>

                <label className="text-headingColor font-semibold text-[16px] leadin-7">
                  Gender
                  <select
                    className="text-primaryColor font-semibold text-[15px] leading-7 p-3"
                    name="gender"
                    onChange={handleInputChange}
                    value={formData.gender}
                  >
                    {/* options */}
                    <option value="male">Male</option>
                    <option value="female">Female</option>
                    <option value="other">Rather Not specify</option>
                  </select>
                </label>
              </div>
              {/* profile image */}
              <div className="mb-5 flex items-center gap-3">
                {selectedFile && (
                  <figure className="w-[60px] h-[60px] rounded-full border-solid border-primaryColor flex items-center justify-center">
                    <img
                      src={previewURL}
                      alt=""
                      className="w-full rounded-full"
                    />
                  </figure>
                )}
                {/* file input */}
                <div className="relative w-full max-w-[200px] h-[50px]">
                  <input
                    type="file"
                    name="photo"
                    id="customFile"
                    accept=".png,.jpg,.jpeg"
                    className="absolute  top-0 left-0 w-full h-full opacity-0 cursor-pointer"
                    onChange={handleFileInputChange}
                  />
                  <label
                    htmlFor="customFile"
                    className="absolute rounded-md top-0 left-0 w-full h-full flex items-center justify-center px-3 py-1.5 text-sm leading-6 overflow-hidden bg-[#979be3] text-headingColor font-semibold"
                  >
                    Select a Profile Picture
                  </label>
                </div>
              </div>
              <div className="flex items-center justify-between">
                <button className="btn mt-0" type="submit" disabled={loading}>
                  {loading ? <HashLoader /> : "Create Account"}
                </button>
                {/* link for register */}
                <p className="text-textColor text-center">
                  Have an account,
                  <Link
                    to="/login"
                    className="text-irisBlueColor hover:text-primaryColor"
                  >
                    Login
                  </Link>
                </p>
              </div>
              {/* google auth */}
              <button className="w-full outline-teal-500 rounded-2xl mt-5 font-semibold bg-primaryColor text-white p-3">
                continue with google
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
