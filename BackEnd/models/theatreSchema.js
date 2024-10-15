const mongoose = require("mongoose");

const theatreSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    address: {
      type: String,
      required: true,
    },
    phone: {
      type: Number,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    // associating with whom this theatre was created
    owner: {
      type: mongoose.Types.ObjectId,
      ref: "users",
    },
    isActive: {
      type: Boolean,
      default: false,
    },
  },
  { timestamps: true }
);

const Theatre = mongoose.model("theatres", theatreSchema);

module.exports = Theatre;
