const express = require("express");
const router = express.Router();
const EVENTS = require('../views/shared/events');
const { renderFile, render } = require("ejs");
const deliverables = {
    home_button_route: "/",
    about_button_route: "../about",
    events_button_route: "../events",
    contact_button_route: "../contact",
    home_button_class: "active",
    about_button_class: "",
    contact_button_class: "",
    events_button_class: "",
    title: "Home",
    events: EVENTS
}
router.get("/", (req, res) => {
    res.render("index", deliverables);
    return;
});

module.exports = router;