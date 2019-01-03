const path = require("path");
// const exphbs = require("express-handlebars");
var isAuthenticated = require("../config/middleware/isAuthenticated");

module.exports = function (app) {
    app.get("/", function (req, res) {
        // if (!req.user) {
        res.redirect("/login");

        // }
        // res.send("hello");
    });
    app.get("/signup", function (req, res) {

        // if (req.user) {
        //     res.redirect("/users-page");
        // } 
        res.render("signup");
    });
    app.get("/login", function (req, res) {
        // res.render("signup");
        console.log("i am in line 21 of htmlrouter");
        res.render(path.join(__dirname, "../views/login.handlebars"));
        // res.send("hello crazy");
    });

    app.get("/users-page", function (req, res) {
        res.render("../views/users.handlebars");
        // res.send("hello crazy");
    })
};
// module.exports = function (app) {

//     app.get("/", function (req, res) {
//         // If the user already has an account send them to the members page
//         if (req.user) {
//             res.redirect("/users-page");
//         }
//         // res.sendFile(path.join(__dirname, "../../views/signup.handlebars"));
//     });

//     app.get("/login", function (req, res) {
//         // If the user already has an account send them to the members page
//         if (req.user) {
//             res.redirect("/users-page");
//         }
//         res.sendFile(path.join(__dirname, "../../views/login.handlebars"));
//     });

//     // Here we've add our isAuthenticated middleware to this route.
//     // If a user who is not logged in tries to access this route they will be redirected to the signup page
//     app.get("/users-page", isAuthenticated, function (req, res) {
//         res.sendFile(path.join(__dirname, "../../views/users.handlebars"));
//     });

// };


