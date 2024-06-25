import jwt from "jsonwebtoken";
import Doctor from "../models/DoctorSchema.js";
import User from "../models/UserSchema.js";

export const authenticate = async (req, res, next) => {
  // access the token from headers
  const authToken = req.headers.authorization;
  if (!authToken || !authToken.startsWith("Bearer")) {
    return res
      .status(401)
      .json({ success: false, error: "Unauthorized access no token found" });
  }
  try {
    // console.log(authToken);
    const token = authToken.split(" ")[1];
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.userId = decoded.id;
    req.role = decoded.role;
    next();       //=>restrict function
  } catch (error) {
    if (error.name === "TokenExpiredError") {
      return res.status({
        success: false,
        message: "Token has expired, please login again",
      });
    }
    return res
      .status(401)
      .json({ success: false, error: "Unauthorized access invalid token" });
  }
};

// admin additional controller
export const restrict = (roles) => async (req, res, next) => {
  // comes after authentication
  const userId = req.userId;
  let user;
  // checking user is a doctor or patient
  const patient = await User.findById(userId);
  const doctor = await Doctor.findById(userId);
  if (patient) {
    user = patient;
  }
  if (doctor) {
    user = doctor;
  }
  // checking if the user is an admin or not
  if (!roles.includes(user.role)) {
    return res.status(403).json({ success: false, error: "Forbidden access" });
  }
  // calling next function
  next();
};
