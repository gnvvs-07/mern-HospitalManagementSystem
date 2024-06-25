import jwt from "jsonwebtoken";
import dotenv from "dotenv";
dotenv.config();
export const generateToken = (user) => {
  try {
    return jwt.sign(
      {
        id: user._id,
        role: user.role,
      },
      process.env.JWT_SECRET,
      {
        expiresIn: "10d",
      }
    );
  } catch (error) {
    console.log("error in token generation");
  }
};
