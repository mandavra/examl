const express = require("express");
const validate = require("../middlewares/validata");
const { userValidation } = require("../validations");
const { restrict, authanticate } = require("../middlewares/auth");2
const { userController } = require("../controllers");
const route = express.Router();
route.get("/get", authanticate,restrict(["admin"]),userController.getuser);
route.post("/register",validate(userValidation.adduser),userController.adduser);
route.post("/login", userController.loginuser);

route.delete("/delete/:id",restrict(["admin"]), userController.deleteuser);

module.exports = route;