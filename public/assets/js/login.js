$(document).ready(function () {
    // Getting references to our form and inputs
    var login = $("#submit-login");
    var emailInput = $("input#email-input");
    var passwordInput = $("input#password-input");

    // When the form is submitted, we validate there's an email and password entered
    login.on("submit", function (event) {
        event.preventDefault();
        var userData = {
            email: emailInput.val().trim(),
            password: passwordInput.val().trim()
        };

        if (!userData.email || !userData.password) {
            return;
        }
        console.log("hello:" + userData);

        // If we have an email and password we run the loginUser function and clear the form
        loginUser(userData.email, userData.password);
        emailInput.val("");
        passwordInput.val("");
    });

    // loginUser does a post to our "api/login" route and if successful, redirects us the the members page
    function loginUser(email, password) {
        $.post("/api/login", {
            email: email,
            password: password
        }).then(function (data) {
            window.location.replace(data);
            // console.log(data);
            // $.get("/users-page").then(function (data) {
            //     alert("hello")
            // })

            // If there's an error, log the error
        }).catch(function (err) {
            console.log(err);
        });
    }

});
