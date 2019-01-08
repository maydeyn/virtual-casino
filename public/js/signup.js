
$(document).ready(function () {
  // Getting references to our form and input
  var signUpForm = $("form.signup");
  var emailInput = $("input#email-input");
  var passwordInput = $("input#password-input");
  // var zipcodeInput = $("#zipcode");
  // var firstNameInput = $("#first-name");
  // var lastNameInput = $("#last-name");
  // var cityInput = $("#city");
  // var stateInput = $("#state");

  // When the signup button is clicked, we validate the email and password are not blank
  signUpForm.on("submit", function (event) {
    event.preventDefault();
    var userData = {
      email: emailInput.val().trim(),
      password: passwordInput.val().trim(),
      // zipcode: zipcodeInput.val().trim(),
      // first_name: firstNameInput.val().trim(),
      // last_name: lastNameInput.val().trim(),
      // city: cityInput.val().trim(),
      // state: stateInput.val().trim()
    };

    if (!userData.email || !userData.password) {
      return;
    }
    // If we have an email and password, run the signUpUser function
    signUpUser(userData.email, userData.password);
    emailInput.val("");
    passwordInput.val("");
    // zipcodeInput.val("");
    // firstNameInput.val("");
    // last_name.val("");
    // cityInput.val("");
    // stateInput.val("");

  });

  // Does a post to the signup route. If successful, we are redirected to the members page
  // Otherwise we log any errors
  function signUpUser(email, password) {
    $.post("/api/signup", {
      email: email,
      password: password
      // zipcode: zipcode,
      // first_name: first_name,
      // last_name: last_name,
      // city: city,
      // state: state
    }).then(function (data) {
      window.location.replace(data);
      // If there's an error, handle it by throwing up a bootstrap alert
    }).catch(handleLoginErr);
  }

  function handleLoginErr(err) {
    $("#alert .msg").text(err.responseJSON);
    $("#alert").fadeIn(500);
  }
});