const express = require("express");
const validate = require("../middlewares/validata");
const { commentedValidation } = require("../validations");
const {  authanticate } = require("../middlewares/auth");
const { commentedController } = require("../controllers");
const route = express.Router();
route.get("/get", authanticate,commentedController.getcommented);
route.post("/register",authanticate ,validate(commentedValidation.addcommented),commentedController.addcommented);
route.delete("/delete/:id", authanticate,commentedController.deletecommented);

module.exports = route;