// user routing
import express from "express";
import {
  getAllUser,
  getSingleUser,
  updateUser,
  deleteUser,
} from "../controllers/user.controller.js";

const router = express.Router(); //router

router.get("/:id", getSingleUser);
router.get("/", getAllUser);
router.put("/:id", updateUser);
router.delete("/:id", deleteUser);

export default router;
