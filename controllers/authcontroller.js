const User = require("../models/user");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const register = (req, res) => {
  bcrypt.hash(req.body.password, 10, (err, hashedPass) => {
    if (err) {
      res.json({ error: err });
    }
    const user = new User({
      name: req.body.name,
      gender: req.body.gender,
      birthday: req.body.birthday,
      avatar: req.body.avatar,
      email: req.body.email,
      password: hashedPass,
    });
    user
      .save()
      .then((user) => {
        res.status(200).json({ message: " Add new User successfully!", user });
      })
      .catch((error) => {
        res.status(400).json({ message: "Error!" });
      });
  });
};
const login = (req, res) => {
  const { email, password } = req.body;
  User.findOne({ email: email }).then((user) => {
    if (user) {
      bcrypt.compare(password, user.password, (err, result) => {
        if (err) {
          res.json({ error: err });
        }
        if (result) {
          const token = jwt.sign({ name: user.name }, process.env.JWT_KEY, {
            expiresIn: "365d",
          });
          res.status(200).json({ message: "Login successfully!", user, token });
        } else {
          res.status(400).json({ message: "Password invalid!" });
        }
      });
    } else {
      res.status(404).json({ message: "No user found !" });
    }
  });
};
module.exports = {
  register,
  login,
};
