// user routing
import express from "express";
import {
  getAllDoctor,
  getSingleDoctor,
  updateDoctor,
  deleteDoctor,
} from "../controllers/doctor.controller.js";
import { authenticate, restrict } from "../auth/verifyToken.js";
const router = express.Router(); //router

router.get("/:id", getSingleDoctor);
router.get("/", getAllDoctor);
router.put("/:id", authenticate, restrict(["doctor"]), updateDoctor);
router.delete("/:id", authenticate, restrict(["doctor"]), deleteDoctor);

export default router;
