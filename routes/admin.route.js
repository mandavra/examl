const express = require("express");
const validate = require("../middlewares/validata");
const { adminValidation } = require("../validations");
const {  authanticate } = require("../middlewares/auth");
const { adminController } = require("../controllers");
const route = express.Router();
route.get("/get", authanticate,adminController.getadmin);
route.post("/register",validate(adminValidation.addadmin),adminController.addadmin);
route.post("/login", adminController.loginadmin);

route.delete("/delete/:id", adminController.deleteadmin);

module.exports = route;