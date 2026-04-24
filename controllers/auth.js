const User = require("../models/User");
const bcrypt = require("bcryptjs");

const register = async (req, res) => {
  const { name, email, password } = req.body;
  console.log(req.body);
  const salt = await bcrypt.genSalt(10);
  const hashedPassword = await bcrypt.hash(password, 12);
  const tempUser = { name, email, password: hashedPassword };
  const user = await User.create({ ...tempUser });

  res.status(201).json({ user });
};
const login = async (req, res) => {
  res.json("login work");
};

module.exports = {
  register,
  login,
};
