import express from "express";
import cookieParser from "cookie-parser";
import cors from "cors";
import mongoose from "mongoose";
import dotenv from "dotenv";

// routes
import authRoute from "./routes/auth.route.js";
import userRoute from "./routes/user.route.js";
import doctorRoute from "./routes/doctor.route.js"

dotenv.config();

const app = express();

const port = process.env.PORT || 8000;

const corsOptions = { origin: true };

// middle wares
app.use(express.json());
app.use(cookieParser());
app.use(cors(corsOptions));
// routing
app.use("/api/v1/auth", authRoute);
app.use("/api/v1/users",userRoute);
app.use("/api/v1/doctors", doctorRoute);

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URL);
    console.log("DB connected");
  } catch (error) {
    console.log("Server connection failed");
  }
};

// sample api

app.get("/api", (req, res) => {
  res.json({ message: "Welcome to my API!" });
});

app.listen(port, () => {
    connectDB();
  console.log(`Server is running on port ${port}`);
});
