// doctor functionalities
import Doctor from "../models/DoctorSchema.js";

export const updateDoctor = async (req, res) => {
  // access doctor id from the params
  const id = req.params.id;
  try {
    // find the doctor by id and update it
    const updateDoctor = await Doctor.findByIdAndUpdate(
      id,
      { $set: req.body },
      { new: true }
    );
    // send the response
    res.status(200).json({
      success: true,
      message: "doctor updated successfully",
      data: updateDoctor,
    });
  } catch (error) {
    console.log("falied to update the doctor");
    res
      .status(500)
      .json({ success: false, message: "Failed to update the doctor" });
  }
};

export const deleteDoctor = async (req, res) => {
  // access doctor id from the params
  const id = req.params.id;
  try {
    // find the user by id and update it
    await Doctor.findByIdAndDelete(id);
    // send the response
    res.status(200).json({
      success: true,
      message: "Doctor deleted successfully",
    });
  } catch (error) {
    console.log("falied to delete the doctor");
    res
      .status(500)
      .json({ success: false, message: "Failed to delete the doctor" });
  }
};

export const getSingleDoctor = async (req, res) => {
  // access doctor id from the params
  const id = req.params.id;
  try {
    // find the doctor by id and update it
    const doctor = await Doctor.findById(id).select("-password");
    // send the response
    res.status(200).json({
      success: true,
      message: "Doctor found",
      data: doctor,
    });
  } catch (error) {
    console.log("falied to load the doctor");
    res
      .status(404)
      .json({ success: false, message: "Failed to load the doctor" });
  }
};

export const getAllDoctor = async (req, res) => {
  try {
    // search functionality
    const { query } = req.query;
    let doctors;
    if (query) {
      doctors = await Doctor.find({
        isApproved: "approved",
        $or: [
          { name: { $regex: query, $options: "i" } },
          { specialization: { $regex: query, $options: "i" } },
        ],
      }).select("-password");
    } else {
        doctors = await Doctor.find({ isApproved: "approved" }).select(
        "-password"
      );
    }

    res.status(200).json({
      success: true,
      message: "Doctors fetched successfully",
      data: doctors,
    });
  } catch (error) {
    console.log("falied to load all the doctors");
    res
      .status(400)
      .json({ success: false, message: "Failed to load all the doctors" });
  }
};
