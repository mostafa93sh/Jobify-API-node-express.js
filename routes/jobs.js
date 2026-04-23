const express = require("express");
const {
  getAllJobs,
  getJobById,
  createJob,
  updateJob,
  deleteJob,
} = require("../controllers/jobs");
const router = express.Router();

router.get("/", getAllJobs);
router.get("/:id", getJobById);
router.post("/:id", createJob);
router.patch("/:id", updateJob);
router.delete("/:id", deleteJob);

module.exports = router;
