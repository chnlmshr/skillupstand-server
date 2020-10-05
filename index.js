const express = require("express");
const ejs = require("ejs");
const bodyParser = require("body-parser");
require("dotenv/config");

const app = express();

app.set("view engine", "ejs");
app.set("views", __dirname + "/views");

app.use(express.static("views"));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.get("/", (req, res) => {
    res.render("index");
});

//port setup
app.listen(1947, () => {
    console.log("Server is running on port localhost:1947.");
});