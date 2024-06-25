// user routing
import express from "express";
import {
  getAllUser,
  getSingleUser,
  updateUser,
  deleteUser,
} from "../controllers/user.controller.js";
import { authenticate, restrict } from "../auth/verifyToken.js";

const router = express.Router(); //router

router.get("/:id", authenticate, restrict(["patient"]), getSingleUser); //roles array : ["patient"]
router.get("/",authenticate, restrict(["admin"]), getAllUser);
router.put("/:id",authenticate, restrict(["patient"]), updateUser);
router.delete("/:id",authenticate, restrict(["patient"]), deleteUser);

export default router;
