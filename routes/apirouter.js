const db = require("../models");
var passport = require("../config/passport");
module.exports = function (app) {
    //if a user have valid login information, it will send to users page(members)
    app.post("/api/login", passport.authenticate("local"), function (req, res) {
        console.log("i am in line 6 of apirouter");
        // res.send("hello i am logged in")
        res.json("/users-page");
        // res.render(path.join(__dirname, "../../views/users.handlebars"));
    });

    app.post("/api/signup", function (req, res) {
        console.log(req.body.email);
        console.log(req.body.password);
        db.User.create({
            email: req.body.email,
            password: req.body.password,
            first_name: req.body.first_name,
            last_name: req.body.last_name,
            city: req.body.city,
            state: req.body.state,
            zipcode: req.body.zipcode
        }).then(function () {
            res.redirect(307, "/api/login");
        }).catch(function (err) {
            console.log(err); res.json(err);
            // res.status(422).json(err.errors[0].message);
        });
    });
    app.get("/logout", function (req, res) {
        req.logout();
        res.redirect("/");
    });
    app.get("/api/user-database", function (req, res) {
        if (!req.user) {
            res.json({});
        } else {
            res.json({
                email: req.user.email,
                id: req.user.id
            });
        }
    });
};

