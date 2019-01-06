// ideal roulette logic

function defineWagers(){
    
}

function renderWagers(list) {
    $("#all-wagers").empty(); // empties out the html

    // render our todos to the page
    for (var i = 0; i < list.length; i++) {
      // Create a new variable that will hold a "<p>" tag.
      // Then set the to-do "value" as text to this <p> element.
      var singleWager = $("<p>");
      singleWager.text(list[i]);

      // Create a button with unique identifiers based on what number it is in the list. Again use jQuery to do this.
      // Give your button a data attribute called data-to-do and a class called "checkbox".
      // Lastly add a checkmark inside.

      var wagerDelete = $("<button>");

      wagerDelete.attr("data-to-do", i);
      wagerDelete.addClass("checkbox");
      wagerDelete.text("x");

      // Append the button to the to do item
      singleWager = singleWager.prepend(wagerDelete);

      // Add the button and to do item to the to-dos div
      $("#all-wagers").append(singleWager);
    }
  }

  $("#add-wager").on("click", function(event) {
    event.preventDefault();

    // Get the to-do "value" from the textbox and store it as a variable
    var toDoTask = $("#to-do").val().trim();

    // Adding our new todo to our local list variable and adding it to local storage
    list.push(toDoTask);

    // Update the todos on the page
    renderWagers(list);

    // Save the todos into localstorage.
    // We need to use JSON.stringify to turn the list from an array into a string
    localStorage.setItem("todolist", JSON.stringify(list));

    // Clear the textbox when done
    $("#to-do").val("");
  });

  // When a user clicks a check box then delete the specific content
  $(document).on("click", ".checkbox", function() {
    // Get the number of the button from its data attribute and hold in a variable called  toDoNumber.
    var toDoNumber = $(this).attr("data-to-do");

    // Deletes the item marked for deletion
    list.splice(toDoNumber, 1);

    // Update the todos on the page
    renderWagers(list);

    // Save the todos into localstorage.
    // We need to use JSON.stringify to turn the list from an array into a string
    localStorage.setItem("todolist", JSON.stringify(list));
  });

  // Load the todos from localstorage.
  // We need to use JSON.parse to turn the string retrieved  from an array into a string
  var list = JSON.parse(localStorage.getItem("todolist"));

  // Checks to see if the todolist exists in localStorage and is an array currently
  // If not, set a local list variable to an empty array
  // Otherwise list is our current list of todos
  if (!Array.isArray(list)) {
    list = [];
  }

  // render our todos on page load
  renderWagers(list);

// function to take wagers from the player and push the to a json. 
// include a sub-function to check that the player has the money to commit the bet

// function to essentially say 'no more bets. the sequence of that umbrella function are as follows:
// • the player bank is debited
// • the casino runs a random number for the croupier
// • compare the croupier number against the wagers on the TableNumbers
// • pay any winning wagers
// • empty the json that holds the wagers



// toggle function
// $('.toggle').click(function(e) {
//     e.preventDefault();

//   var $this = $(this);

//   if ($this.next().hasClass('show')) {
//       $this.next().removeClass('show');
//       $this.next().slideUp(350);
//   } else {
//       $this.parent().parent().find('li .inner').removeClass('show');
//       $this.parent().parent().find('li .inner').slideUp(350);
//       $this.next().toggleClass('show');
//       $this.next().slideToggle(350);
//   }
// });


var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var panel = this.nextElementSibling;
    if (panel.style.display === "block") {
      panel.style.display = "none";
    } else {
      panel.style.display = "block";
    }
  });
}




// -------------- below this line is the original prototype --------------
// ------------ the original prototype is no longer the ideal logic ------
// ---------------- the ideal logic is above this interlude --------------

// const targetNumber = "";
// const activeBets = {};
// const playerMoney = "";

// // for testing purposes
// var test1 = process.argv[2];
// var test2 = process.argv[3];
// var test3 = process.argv[4];

// // welcomes player to this game and displays the graphics and options (inside & outside bets)

// function main(){
//     placeBets();
//     roulette();
//     compareSuccess();
//     playAgain();
// }

// function placeBets(){
//     if (process.argv[2] === "inside") {
//         placeInsideBets();
//     } else if (process.argv[2] === "outside") {
//         placeOutsideBets();
//     }
//     console.log(process.argv[2])
// }

// // submenu to place inside bets
// function placeInsideBets(){
//     var 
// };

// // submenu to place outside bets
// function placeOutsideBets(){};

// // function to run a math.random and then send to results
// function roulette(){};

// // function to determine payout and losses
// function compareSuccess(){};

// // function to change the players bank balance
// function payouts(){};

// // function to start over
// function playAgain(){};

// main();