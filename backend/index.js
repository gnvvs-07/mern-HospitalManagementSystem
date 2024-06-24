import express from "express";
import cookieParser from "cookie-parser";
import cors from "cors";
import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

const app = express();

const port = process.env.PORT || 8000;

const corsOptions = { origin: true };

// middle wares
app.use(express.json);
app.use(cookieParser());
app.use(cors(corsOptions));
// sample api

app.get("/api", (req, res) => {
  res.json({ message: "Welcome to my API!" });
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
