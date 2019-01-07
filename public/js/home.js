var myGamePiece;

function startGame() {
  myGameArea.start();
  myGamePiece = new Image("./image/character/run3.png");
}

var myGameArea = {
  canvas: document.createElement("canvas"),
  start: function () {
    this.canvas.width = 480;
    this.canvas.height = 270;
    this.context = this.canvas.getContext("2d");
    document.body.insertBefore(this.canvas, document.body.childNodes[0]);
    this.interval = setInterval(updateGameArea, 20);
    window.addEventListener("keydown", function (e) {
      myGameArea.key = e.keyCode;
    });
    window.addEventListener("keyup", function (e) {
      myGameArea.key = false;
    });
  },
  clear: function () {
    this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
  }
};

function component(width, height, color, x, y) {
  this.gamearea = myGameArea;
  this.width = width;
  this.height = height;
  this.speedX = 0;
  this.speedY = 0;
  this.x = x;
  this.y = y;
  this.update = function () {
    ctx = myGameArea.context;
    ctx.fillStyle = color;
    ctx.fillRect(this.x, this.y, this.width, this.height);
  };
  this.newPos = function () {
    this.x += this.speedX;
    this.y += this.speedY;
  };
}

function updateGameArea() {
  myGameArea.clear();
  myGamePiece.speedX = 0;
  myGamePiece.speedY = 0;
  if (myGameArea.key && myGameArea.key == 37) {
    myGamePiece.speedX = -1;
  }
  if (myGameArea.key && myGameArea.key == 39) {
    myGamePiece.speedX = 1;
  }

  myGamePiece.newPos();
  myGamePiece.update();
}

// $(function() {
//   var player = '<div id="player"></div>';
//   $("#map").append(player);

//   $(document).keydown(function(e) {
//     var position = $("#player").position();
//     var xPos = 0;

//     switch (e.keyCode) {
//       case 39: // Right
//         xPos += 5;
//         player.image = "./images/character/run3.png";
//         break;
//       case 37: // Left
//         player.image.src = "./images/character/run5.png";
//         xPos -= 5;
//     }
//   });
// });

// Opening Log-in Form
function openForm() {
  document.getElementById("myForm").style.display = "block";
}

function closeForm() {
  document.getElementById("myForm").style.display = "none";
}

// LOG IN
$(document).ready(function () {
  // Getting references to our form and inputs
  var loginForm = $("form.login");
  var emailInput = $("input#username-input");
  var passwordInput = $("input#password-input");

  // When the form is submitted, we validate there's an email and password entered
  loginForm.on("submit", function (event) {
    event.preventDefault();
    console.log(emailInput);

    var userData = {
      email: emailInput.val().trim(),
      password: passwordInput.val().trim()
    };

    if (!userData.email || !userData.password) {
      return;
    }

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
    })
      .then(function (data) {
        window.location.replace(data);
        // If there's an error, log the error
      })
      .catch(function (err) {
        console.log(err);
      });
  }
});
