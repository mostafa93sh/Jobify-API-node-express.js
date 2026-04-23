const getAllJobs = async (req, res) => {
  res.json("get all jobs work");
};
const getJobById = async (req, res) => {
  res.json("single job  work");
};
const createJob = async (req, res) => {
  res.json("create job work");
};
const updateJob = async (req, res) => {
  res.json("update job work");
};
const deleteJob = async (req, res) => {
  res.json("delete job work");
};

module.exports = {
  getAllJobs,
  getJobById,
  createJob,
  updateJob,
  deleteJob,
};
