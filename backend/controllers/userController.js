import asyncHandler from "express-async-handler";

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
  res.status(200).json({ message: "registerUser" });
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
