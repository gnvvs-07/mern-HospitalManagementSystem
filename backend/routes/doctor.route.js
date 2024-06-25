// user routing
import express from "express";
import {
    getAllDoctor,
    getSingleDoctor,
    updateDoctor,
    deleteDoctor,
} from "../controllers/doctor.controller.js";

const router = express.Router(); //router

router.get("/:id", getSingleDoctor);
router.get("/", getAllDoctor);
router.put("/:id", updateDoctor);
router.delete("/:id", deleteDoctor);

export default router;
