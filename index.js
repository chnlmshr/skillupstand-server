const express = require("express");
const ejs = require("ejs");
const bodyParser = require("body-parser");
const aboutRoute = require("./routes/about");
const eventsRoute = require("./routes/events");
const contactRoute = require("./routes/contact");
const homeRoute = require("./routes/index");
require("dotenv/config");
const app = express();

app.set("view engine", "ejs");
app.set("views", __dirname + "/views");

app.use(express.static("views"));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use("/about", aboutRoute);
app.use("/events", eventsRoute);
app.use("/contact", contactRoute);
app.use("/", homeRoute);

app.listen(1947, () => {
    console.log("Server is running on port localhost:1947.");
});