const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");
const { response } = require("express");
const jwt = require("jsonwebtoken");
require("dotenv").config();
const secret_Key = process.env.Key;
const UserSchema = new mongoose.Schema({
  name: {
    type: String,
    //required: true,
  },
  email: {
    type: String,
    //required: true,
  },
  password: {
    type: String,
    //required: true,
  },
  role: {
    type: String,
    default: "user",
  },
  createdDate: {
    type: Date,
    default: Date.now,
  },
  tokens: [
    {
      token: {
        type: String,
        required: true,
      },
    },
  ],
});
UserSchema.pre("save", async function (next) {
  const salt = await bcrypt.genSalt(10);
  this.password = await bcrypt.hash(this.password, salt);

  next();
});
UserSchema.methods.generateToken = async function () {
  try {
    let usertoken = jwt.sign({ _id: this.id }, secret_Key);
    this.tokens = this.tokens.concat({ token: usertoken });
    await this.save();
    return usertoken;
  } catch (error) {
    response.status(422).send(error);
  }
};
UserSchema.methods.cleartoken = async function () {
  this.tokens = null;
  await this.save();
};

const User = mongoose.model("admin", UserSchema);

module.exports = User;
