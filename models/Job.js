const mongoose = require("mongoose");
const JobSchema = new mongoose.Schema(
  {
    company: {
      type: String,
      required: [true, "company name must be provided"],
      maxlength: 50,
    },
    position: {
      type: String,
      required: [true, "position must be provided"],
      maxlength: 100,
    },
    status: {
      type: String,
      enum: ["interview", "pending", "declined"],
      default: "pending",
    },
    createdBy: {
      type: mongoose.Types.ObjectId,
      ref: "User",
    },
  },
  { timestamps: true },
);

module.exports = mongoose.model("Job", JobSchema);
