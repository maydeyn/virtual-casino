// Requiring necessary npm packages
var express = require("express");
var session = require("express-session");
// Requiring passport as we've configured it
var passport = require("./config/passport");

<<<<<<< HEAD
const passport = require("./config/passport");
// const LocalStrategy = require("passport-local").Strategy;
// const mysql = require("mysql");
var PORT = process.env.PORT || PORT;
var db = require("./models");
// MySQL DB Connection Information (remember to change this with our specific credentials)
// var connection = mysql.createConnection({
//   host: "localhost",
//   port: 8889,
//   user: "root",
//   password: "root",
//   database: "login_system"
// });

// // Initiate MySQL Connection.
// connection.connect(function(err) {
//   if (err) {
//     console.error("error connecting: " + err.stack);
//     return;
//   }
//   console.log("connected as id " + connection.threadId);
// });
const app = express();
// var db = connection;
const apiroutes = require("./controllers/routes/apirouter")(app);
const html = require("./controllers/routes/html")(app);

//engine for handlebars
app.set("views", path.join(__dirname, "views"));
app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

// // bodyparser middleware
// app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
// app.use(cors());

// app.use(cookieParser());

//public or static folders

app.use(express.static(path.join(__dirname, "public")));
app.use(
  session({
    secret: "secret",
    resave: true,
    saveUninitialized: true
  })
);
// app.get("/", function (req, res) {
//   if (req.user) {
//     res.redirect("/signup");
//   } res.render(path.join(__dirname, "views/signup.handlebars"));
// });
app.use(passport.initialize());
app.use(passport.session());
db.sequelize.sync().then(function() {
  app.listen(PORT, function() {
    console.log(
      "==> 🌎 Listening on port %s. Visit http://localhost:%s/ in your browser." +
        PORT
    );
=======
// Setting up port and requiring models for syncing
var PORT = process.env.PORT || 8080;
var db = require("./models");

// Creating express app and configuring middleware needed for authentication
var app = express();
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"));
// We need to use sessions to keep track of our user's login status
app.use(session({ secret: "keyboard cat", resave: true, saveUninitialized: true }));
app.use(passport.initialize());
app.use(passport.session());

// Requiring our routes
require("./routes/html-routes")(app);
require("./routes/api-routes")(app);

// Syncing our database and logging a message to the user upon success
db.sequelize.sync().then(function () {
  app.listen(PORT, function () {
    console.log("==> 🌎  Listening on port %s. Visit http://localhost:%s/ in your browser.", PORT, PORT);
>>>>>>> 16e54a85a57ff78d62f46cdb4972b9f718951317
  });
});
