const User = require("../models/user");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const register = (req, res, next) => {
  bcrypt.hash(req.body.password, 10, (err, hashedPass) => {
    if (err) {
      res.json({ error: err });
    }
    const user = new User({
      name: req.body.name,
      username: req.body.username,
      password: hashedPass,
    });
    user
      .save()
      .then((user) => {
        res.json({ message: " Add new User successfully!" });
      })
      .catch((error) => {
        res.json({ message: "Error!" });
      });
  });
};
const login = (req, res, next) => {
  const { username, password } = req.body;
  User.findOne({ username: username }).then((user) => {
    if (user) {
      bcrypt.compare(password, user.password, (err, result) => {
        if (err) {
          res.json({ error: err });
        }
        if (result) {
          const token = jwt.sign({ name: user.name }, process.env.JWT_KEY, {
            expiresIn: "1h",
          });
          res.json({ message: "Login successfully!", token });
        } else {
          res.json({ message: "Password invalid!" });
        }
      });
    } else {
      res.json({ message: "No user found !" });
    }
  });
};
module.exports = {
  register,
  login,
};
