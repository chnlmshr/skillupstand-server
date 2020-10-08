const express = require("express");
const router = express.Router();
const COUNTS = require('../views/shared/counts');
const MEMBERS = require("../views/shared/members");
const { renderFile, render } = require("ejs");

const deliverables = {
    home_button_route: "../",
    about_button_route: "/",
    events_button_route: "../events",
    contact_button_route: "../contact",
    home_button_class: "",
    about_button_class: "active",
    contact_button_class: "",
    events_button_class: "",
    title: "About",
    counts: COUNTS,
    members: MEMBERS
}

router.get("/", (req, res) => {
    res.render("about", deliverables);
    return;
});

module.exports = router;