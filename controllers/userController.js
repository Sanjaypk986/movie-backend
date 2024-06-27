const bcrypt = require('bcrypt');
const saltRounds = 10;
const User = require("../models/userModel");

const getAllUser = async (req, res) => {
  res.send("hellow world");
};
const getUserById = async (req, res) => {
  res.send("hellow world");
};
const addUser = async (req, res) => {
  // get data from req.body
  const data = req.body
  // store password 
  const password = req.body.password
  // encrypt the password
  const hash = bcrypt.hashSync(password, saltRounds);
  // create document using req.body and pass as object and change password from data
  const user = new User({
    ...data,
    password: hash
  });
  // save document
  await user.save();
  // response
  res.json(user);
};
const updateUser = async (req, res) => {
  res.send("hellow world");
};
const deleteUser = async (req, res) => {
  res.send("hellow world");
};

module.exports = {
  getAllUser,
  getUserById,
  addUser,
  updateUser,
  deleteUser,
};
