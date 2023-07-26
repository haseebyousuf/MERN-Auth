import express from "express";
const router = express.Router();

import {
  authUser,
  getUserProfile,
  logoutUser,
  registerUser,
  updateUserProfile,
} from "../controllers/userController.js";

router.post("/auth", authUser);
router.post("/register", registerUser);
router.post("/logout", logoutUser);
router.route("/profile").get(getUserProfile).put(updateUserProfile);

export default router;
