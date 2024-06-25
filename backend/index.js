import express from "express";
import cookieParser from "cookie-parser";
import cors from "cors";
import mongoose from "mongoose";
import dotenv from "dotenv";

// routes
import authRoute from "./routes/auth.route.js";

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
