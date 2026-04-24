const User = require("../models/User");
const bcrypt = require("bcryptjs");

const register = async (req, res) => {
  const user = await User.create(req.body);

  res.status(201).json({ user });
};
const login = async (req, res) => {
  res.json("login work");
};

module.exports = {
  register,
  login,
};
