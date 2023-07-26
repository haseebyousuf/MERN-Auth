import asyncHandler from "express-async-handler";
import User from "../models/userModel.js";
import generateToken from "../utils/generateToken.js";

//@desc     Auth user/set token
//@route    POST /api/users/auth
//@access   Public
export const authUser = asyncHandler(async (req, res) => {
  res.status(200).json({ message: "Auth user" });
});

//@desc     register a new user
//@route    POST /api/users/register
//@access   Public
export const registerUser = asyncHandler(async (req, res) => {
  const { name, email, password } = req.body;

  const userExists = await User.findOne({ email });
  if (userExists) {
    res.status(400);
    throw new Error("User already exists");
  }

  const user = await User.create({ name, email, password });

  if (user) {
    generateToken(res, user._id);
    res.status(201).json({
      _id: user._id,
      name: user.name,
      email: user.email,
    });
  } else {
    res.status(400);
    throw new Error("Invalid user Data");
  }
});

//@desc     logout user
//@route    POST /api/users/logout
//@access   Public
export const logoutUser = asyncHandler(async (req, res) => {
  res.status(200).json({ message: "logoutUser" });
});

//@desc     get user profile
//@route    GET /api/users/profile
//@access   private
export const getUserProfile = asyncHandler(async (req, res) => {
  res.status(200).json({ message: "getUserProfile" });
});

//@desc     update user profile
//@route    PUT /api/users/profile
//@access   private
export const updateUserProfile = asyncHandler(async (req, res) => {
  res.status(200).json({ message: "updateusrr profilte" });
});
