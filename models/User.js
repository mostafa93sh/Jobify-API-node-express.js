const mongoose = require("mongoose");
const UserSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "user name must be provided"],
    minLength: 3,
    maxLength: 50,
  },
  email: {
    type: String,
    required: [true, "user email must be provided"],
    match: [
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
      "must be valid email",
    ],
    unique: true,
  },
  password: {
    type: String,
    required: [true, "password must be provided"],
    minLength: 6,
  },
});
