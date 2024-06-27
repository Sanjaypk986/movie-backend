const User = require("../models/userModel");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const login = async (req, res) => {
  // get the data from req.body
  const data = req.body;
  // check user in database with given email.
  const user = await User.findOne({ email: data.email }).exec();
  //   if statment to check user available
  if (!user) {
    return res.status(401).send("Invalid Email or Password");
  }
  // check password in database with given password
  const passwordsmatch = bcrypt.compareSync(data.password, user.password);
  if (passwordsmatch) {
    const token = jwt.sign(
      { _id: user._id, email: user.email },
      process.env.JWT_KEY,
      { expiresIn: "1hr" }
    );
    res.cookie("token", token, { httpOnly: true });
    res.send("Logged In");
  } else {
    res.status(401).send("Unauthoraized Access! Wrong Password");
  }
};

const Verify = async (req, res) => {
  if (req.cookies && req.cookies.token) {
    try {
      const payload = jwt.verify(req.cookies.token, process.env.JWT_KEY);
      res.json({ verified: true });
    } catch (error) {
      console.error('JWT verification error:', error);
      res.status(401).send("Unauthorized Access!");
    }
  } else {
    res.json({ verified: false });
  }
};
const Logout = async (req, res) => {
  res.cookie("token", "", { expires: new Date(0), httpOnly: true });
  res.send("Logged Out");
};
module.exports = { login, Verify, Logout };
