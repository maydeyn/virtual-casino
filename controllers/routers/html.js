const path = require("path");
var isAuthenticated = require("../../config/middleware/isAuthenticated");
module.exports = function (app) {
    app.get("/", function (req, res) {
        if (req.user) {
            res.redirect("/signup");
        } res.sendFile(path.join(__dirname, "../views/signup.handlebars"));
    });
    app.get("/login", function (req, res) {

        if (req.user) {
            res.redirect("/members");
        } res.sendFile(path.join(__dirname, "../views/login.handlebars"));
    });
    app.get("/members", isAuthenticated, function (req, res) {
        res.sendFile(path.join(__dirname, "../public/assets/main.html"));
    });
};


