<<<<<<< HEAD
module.exports = function(req, res, next) {
  if (req.user) {
    return next();
  } else {
    res.redirect("/");
  }
=======
// This is middleware for restricting routes a user is not allowed to visit if not logged in
module.exports = function(req, res, next) {
  // If the user is logged in, continue with the request to the restricted route
  if (req.user) {
    return next();
  }

  // If the user isn't logged in, redirect them to the login page
  return res.redirect("/");
>>>>>>> 16e54a85a57ff78d62f46cdb4972b9f718951317
};
