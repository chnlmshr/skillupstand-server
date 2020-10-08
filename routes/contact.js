const express = require("express");
const router = express.Router();
const { renderFile, render } = require("ejs");
const deliverables = {
    home_button_route: "../",
    about_button_route: "../about",
    events_button_route: "../events",
    contact_button_route: "/",
    home_button_class: "",
    about_button_class: "",
    contact_button_class: "active",
    events_button_class: "",
    title: "Home"
}
router.get("/", (req, res) => {
    res.render("contact", deliverables);
    return;
});

module.exports = router;