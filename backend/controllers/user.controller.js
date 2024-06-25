// user functionalities
import User from "../models/UserSchema.js";

export const updateUser = async (req, res) => {
  // access user id from the params
  const id = req.params.id;
  try {
    // find the user by id and update it
    const updatedUser = await User.findByIdAndUpdate(
      id,
      { $set: req.body },
      { new: true }
    );
    // send the response
    res.status(200).json({
      success: true,
      message: "User updated successfully",
      data: updateUser,
    });
  } catch (error) {
    console.log("falied to update the user");
    res
      .status(500)
      .json({ success: false, message: "Failed to update the user" });
  }
};

export const deleteUser = async (req, res) => {
  // access user id from the params
  const id = req.params.id;
  try {
    // find the user by id and update it
    await User.findByIdAndDelete(id);
    // send the response
    res.status(200).json({
      success: true,
      message: "User deleted successfully",
    });
  } catch (error) {
    console.log("falied to delete the user");
    res
      .status(500)
      .json({ success: false, message: "Failed to delete the user" });
  }
};

export const getSingleUser = async (req, res) => {
  // access user id from the params
  const id = req.params.id;
  try {
    // find the user by id and update it
    const user = await User.findById(id).select("-password");
    // send the response
    res.status(200).json({
      success: true,
      message: "User found",
      data: user,
    });
  } catch (error) {
    console.log("falied to load the user");
    res
      .status(404)
      .json({ success: false, message: "Failed to load the user" });
  }
};

export const getAllUser = async (req, res) => {
  try {
    const users = await User.find({}).select("-password");
    res.status(200).json({
      success: true,
      message: "Users fetched successfully",
      data: users,
    });
  } catch (error) {
    console.log("falied to load all the users");
    res
      .status(400)
      .json({ success: false, message: "Failed to load all the users" });
  }
};
