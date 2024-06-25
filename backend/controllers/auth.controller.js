import User from "../models/UserSchema.js";
import Doctor from "../models/DoctorSchema.js";
import jwt from "jsonwebtoken";
import bcrypt from "bcryptjs";
import { generateToken } from "../utils/generateToken.js";

// login and signup controllers
export const register = async (req, res) => {
  const { email, password, name, role, photo, gender } = req.body;
  try {
    // register logic
    let user = null;
    // if user already exsits
    if (role === "patient") {
      user = await User.findOne({ email });
    } else if (role === "doctor") {
      user = await Doctor.findOne({ email });
    }
    if (user) {
      return res.status(400).json({ message: "User already exists" });
    }
    // hash password
    const salt = await bcrypt.genSalt(10);
    const hashPassword = await bcrypt.hash(password, salt);
    if (role === "patient") {
      // create a new user (patient)
      user = new User({
        name,
        email,
        password: hashPassword,
        photo,
        gender,
        role,
      });
    }
    if (role === "doctor") {
      // create a new user (doctor)
      user = new Doctor({
        name,
        email,
        password: hashPassword,
        photo,
        gender,
        role,
      });
    }
    // save the user
    await user.save(); //user is either doctor or patient
    res.status(200).json({
      success: true,
      message: "User created successfully",
    });
  } catch (error) {
    console.log("error while registering");
    res.status(500).json({
      success: false,
      message: "Internal Server Error while creating user",
    });
  }
};

// login
export const login = async (req, res) => {
  const { email } = req.body;
  try {
    // login logic
    let user = null;
    // patient
    const patient = await User.findOne({ email });
    // doctor
    const doctor = await Doctor.findOne({ email });
    // if user is a patient
    if (patient) {
      user = patient;
    }
    // if user is doctor
    if (doctor) {
      user = doctor;
    }
    // if user doesnot exist
    if (!user) {
      return res.status(404).json({
        success: false,
        message: "User not found",
      });
    }
    // comparing password for user
    const isPasswordMatch = await bcrypt.compare(
      req.body.password,
      user.password
    );
    if (!isPasswordMatch) {
      return res.status(401).json({
        success: false,
        message: "Invalid password and email combination",
      });
    }
    // generating a token
    const token = generateToken(user);
    // collect data from db
    const { password, role, appointments, ...rest } = user._doc; //._doc gives all details in the db
    res.status(200).json({
      success: true,
      message: "User logged in successfully",
      token,
      user: { ...rest },
      role: role,
    });
  } catch (error) {
    console.log("error while logging in");
  }
};
