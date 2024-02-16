const express = require("express");
const validate = require("../middlewares/validata");
const { blogvalidation } = require("../validations");
const {  authanticate } = require("../middlewares/auth");
const { blogController } = require("../controllers");
const route = express.Router();
route.get("/get", authanticate,blogController.getblog);
route.post("/register",authanticate,validate(blogvalidation.addblog),blogController.addblog);

route.delete("/delete/:id", authanticate,blogController.deleteblog);

module.exports = route;