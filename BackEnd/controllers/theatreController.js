const Theatre = require("../models/theatreSchema");

const addTheatre = async (req, res, next) => {
  try {
    const newTheatre = new Theatre(req.body);
    await newTheatre.save();
    res.send({
      success: true,
      message: "New theatre has been added!",
    });
  } catch (error) {
    next(error);
  }
};

const updateTheatre = async (req, res, next) => {
  try {
    await Theatre.findByIdAndUpdate(req.body.theatreId, req.body, {
      new: true,
    });
    res.send({
      success: true,
      message: "Theatre has been updated!",
    });
  } catch (error) {
    next(error);
  }
};

const deleteTheatre = async (req, res, next) => {
  try {
    const theatreId = req.params.theatreId;
    await Theatre.findByIdAndDelete(theatreId);
    res.send({
      success: true,
      message: "The theatre has been deleted!",
    });
  } catch (error) {
    next(error);
  }
};

const getAllTheatres = async (req, res, next) => {
  try {
    const allTheatres = await Theatre.find().populate("owner");
    res.send({
      success: true,
      message: "All Theatres Fetched !",
      data: allTheatres,
    });
  } catch (error) {
    next(error);
  }
};

const getAllTheatresByOwner = async (req, res, next) => {
  try {
    // here the userId is filled while we validate the jwt token
    const allTheatres = await Theatre.find({ owner: req.body.userId });
    res.send({
      success: true,
      message: "All theatres fetched successfully!",
      data: allTheatres,
    });
  } catch (error) {
    next(error);
  }
};

module.exports = {
  addTheatre,
  updateTheatre,
  deleteTheatre,
  getAllTheatres,
  getAllTheatresByOwner,
};
