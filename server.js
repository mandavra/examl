require("dotenv").config();
const http = require("http");
const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const { connectDB } = require("./db/db.connection");
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());



const routes=require("./routes")
// Database connection file
connectDB();
app.use("/v1", routes);


//port
http.createServer(app).listen(process.env.PORT, () => {
  console.log("server started");
});