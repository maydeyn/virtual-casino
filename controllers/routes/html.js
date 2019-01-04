const path = require("path");
const exphbs = require("express-handlebars");
var isAuthenticated = require("../../config/middleware/isAuthenticated");

module.exports = function (app) {
    app.get("/", function (req, res) {
        if (req.user) {
            res.redirect("/login");

        } res.render(path.join(__dirname, "../../views/login.handlebars"));
        // res.send("hello");
    });
    app.get("/signup", function (req, res) {

        if (req.user) {
            res.redirect("/members");
        } res.render(path.join(__dirname, "../../views/signup.handlebars"));
    });
    app.get("/members", isAuthenticated, function (req, res) {


        res.render(path.join(__dirname, "../../views/login.handlebars"));

    });
};


