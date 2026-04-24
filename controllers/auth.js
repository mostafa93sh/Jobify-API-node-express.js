const { BadRequestError, UnauthenticatedError } = require("../errors");
const User = require("../models/User");
const bcrypt = require("bcryptjs");
const StatusCode = require("http-status-codes");

const register = async (req, res) => {
  const user = await User.create(req.body);
  const token = user.createJWT();

  res.status(201).json({ username: user.name, token });
};
const login = async (req, res) => {
  const { email, password } = req.body;
  console.log(req.body);
  if (!email || !password) {
    throw new BadRequestError("you should provide email and password");
  }
  const user = await User.findOne({ email });
  if (!user) {
    throw new UnauthenticatedError("invalid credentials");
  }
  const isPasswordCorrect = await user.comparePassword(password);
  if (!isPasswordCorrect) {
    throw new UnauthenticatedError("invalid credentials");
  }
  const token = user.createJWT();
  res.status(StatusCode.StatusCodes.OK).json({ username: user.name, token });
};

module.exports = {
  register,
  login,
};
