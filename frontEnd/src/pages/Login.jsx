import { useState, useContext } from "react";
import avatar_img from "../assets/images/patient-avatar.png";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { authContext } from "../context/AuthContext.jsx";
export default function Login() {
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const { dispatch } = useContext(authContext);
  const [formData, setFormData] = useState({
    // login function parameters
    email: "",
    password: "",
  });
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const res = await fetch("http://localhost:8000/api/v1/auth/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
      const result = await res.json();
      if (!res.ok) {
        throw new Error(result.message || "Something went wrong");
      }
      dispatch({
        type: "LOGIN_SUCCESS",
        payload: {
          user: result.data,
          token: result.token,
          role: result.role,        //result is from the res.json()
        },
      });
      toast.success(result.message);
      setLoading(false);
      navigate("/");
    } catch (error) {
      toast.error("Registration failed");
      setLoading(false);
      console.log("Error in registration", error.message);
    }
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
        <form action="" className="py-4 md:py-0" onSubmit={handleSubmit}>
          <div className="mb-5">
            <input
              type="email"
              name="email"
              id="email"
              placeholder="youremail@domain.com"
              className="placeholder:text-gray-400 w-full px-4 py-3 border-b border-solid border-teal-500 focus:outline-none focus:border-b-green-500 text-[15px] leading-7 cursor-text "
              value={formData.email} //setting the value as email
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
              value={formData.password} //setting the value as email
              onChange={handleChange}
              required
            />
          </div>
          <div className="flex items-center justify-between">
            <button className="btn mt-0" type="submit">
              Login
            </button>
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
