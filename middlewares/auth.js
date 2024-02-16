const jwt = require("jsonwebtoken");
const user = require("../models/user.model");
const secret = "werthnbsdc";

const createToken = (data) => {
  const login_token = jwt.sign({ data }, secret);
  return login_token;
};

const verifyToken = (login_token) => {
  return jwt.verify(login_token, secret);
};

const authanticate = (req, res, next) => {
  const login_token = req.cookie.login_token;
  console.log(login_token);
  if (!login_token) {
    res.status(400).json({
      message: "not login",
    });
  }
  
  req.user = user;
  next();
};

const restrict = ([...role]) => {
  return (req, res, next) => {
    const user = req.user;
    console.log(user, "res");
    if (role.includes(user.data.role)) {
      next();
    } else {
      res.status(400).json({ message: "you are unauthorised" });
    }
  };
};

module.exports = { createToken, verifyToken, authanticate, restrict };
