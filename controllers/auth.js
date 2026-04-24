const User = require("../models/User");
const bcrypt = require("bcryptjs");

const register = async (req, res) => {
  const user = await User.create(req.body);
  const token = user.createJWT();

  res.status(201).json({ username: user.name, token });
};
const login = async (req, res) => {
  res.json("login work");
};

module.exports = {
  register,
  login,
};
