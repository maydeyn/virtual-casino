// logic for accordion menus

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

// ideal roulette logic
// function to take wagers from the player and push the to a json. 
// include a sub-function to check that the player has the money to commit the bet

// function to essentially say 'no more bets. the sequence of that umbrella function are as follows:
// • the player bank is debited
// • the casino runs a random number for the croupier
// • compare the croupier number against the wagers on the TableNumbers
// • pay any winning wagers
// • empty the json that holds the wagers

$(document).ready(function(){
    $("input[type='submit']").click(function(){
        var radioValue = $("input[name='table-wager']:checked").val();
        if(radioValue){
            alert("Your wager is on " + radioValue);
        }
    });   
});






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





// table of contents: first section is the table numbers and their traits. second section is bet characteristics [ctrl-f/command-f "#bet-definition-tbl"]. third section is victor conditions and if-else statements [ctrl-f/command-f "#win-condition-tbl"]

// this constructor templates the table numbers

function newBet(betOption){
    if (betOption === "straight"){
        
    }else if(betOption === "split"){
        
    }else if(betOption === "street"){

    }else if(betOption === "doublestreet"){

    }else if(betOption === "corner"){

    }else if(betOption === "column"){

    }else if(betOption === "dozen"){

    }else if(betOption === "evenodd"){

    }else if(betOption === "redblack"){

    }else if(betOption === "highlow"){

    }else if(betOption === "basket"){

    }
    // split
    // street
    // doublestreet
    // corner
    // column
    // dozen
    // evenOrOdd
    // redBlack
    // highLow
    // basket
}

function TableNumbers (value, red, even, zero){
    this.value = value;
    this.isRed = red;
    this.isEven = even;
    this.isZero = zero
}

// I use a boolean for zero to prevent bugs related to the player betting even/odd and accidentally winning or similar situations

const num0 = new TableNumbers(0, false, false, true);
const num1 = new TableNumbers(1, true, false, false);
const num2 = new TableNumbers(2, false, true, false);
const num3 = new TableNumbers(3, true, false, false);
const num4 = new TableNumbers(4, false, true, false);
const num5 = new TableNumbers(5, true, false, false);
const num6 = new TableNumbers(6, false, true, false);
const num7 = new TableNumbers(7, true, false, false);
const num8 = new TableNumbers(8, false, true, false);
const num9 = new TableNumbers(9, true, false, false);
const num10 = new TableNumbers(10, false, true, false);
const num11 = new TableNumbers(11, false, false, false);
const num12 = new TableNumbers(12, true, true, false);
const num13 = new TableNumbers(13, false, false, false);
const num14 = new TableNumbers(14, true, true, false);
const num15 = new TableNumbers(15, false, false, false);
const num16 = new TableNumbers(16, true, true, false);
const num17 = new TableNumbers(17, false, false, false);
const num18 = new TableNumbers(18, true, true, false);
const num19 = new TableNumbers(19, true, false, false);
const num20 = new TableNumbers(20, false, true, false);
const num21 = new TableNumbers(21, true, false, false);
const num22 = new TableNumbers(22, false, true, false);
const num23 = new TableNumbers(23, true, false, false);
const num24 = new TableNumbers(24, false, true, false);
const num25 = new TableNumbers(25, true, false, false);
const num26 = new TableNumbers(26, false, true, false);
const num27 = new TableNumbers(27, true, false, false);
const num28 = new TableNumbers(28, false, true, false);
const num29 = new TableNumbers(29, false, false, false);
const num30 = new TableNumbers(30, true, true, false);
const num31 = new TableNumbers(31, false, false, false);
const num32 = new TableNumbers(32, true, true, false);
const num33 = new TableNumbers(33, false, false, false);
const num34 = new TableNumbers(34, true, true, false);
const num35 = new TableNumbers(35, false, false, false);
const num36 = new TableNumbers(36, true, true, false);
const numDoubleAught = new TableNumbers(37, false, false, true)

// testing for Constructor function
// console logs to test the tablenumbers
// var croup = num18;

// console.log(croup.value);
// if (croup.value >= 19) {
//     console.log("top half");
// } else {
//     console.log("bottom half");   
// }



// the collections of victory conditions "#bet-char-tbl"

var columns = {
    columnA: [1, 4, 7, 10, 13, 16, 19, 22, 25, 28, 31, 34],
    columnB: [2, 5, 8, 11, 14, 17, 20, 23, 26, 29, 32, 35],
    columnC: [3, 6, 9, 12, 15, 18, 21, 24, 27, 30, 33, 36]
}

var dozens = {
    firstDoz: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
    middleDoz: [13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24],
    topDoz: [25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36]
}

var lowerHalf = [];
for (var i = 1 ; i <= 18; i++) {
    lowerHalf.push(i);
}
var upperHalf = [];
for (let i = 19; i <= 36; i++) {
    upperHalf.push(i);
}

// even/odd checks via isEven boolean

// red/black checks via isRed boolean

var streets = {
    streetA: [1, 2, 3],
    streetB: [4, 5, 6],
    streetC: [7, 8, 9],
    streetD: [10, 11, 12],
    streetE: [13, 14, 15],
    streetF: [16, 17, 18],
    streetG: [19, 20, 21],
    streetH: [22, 23, 24],
    streetI: [25, 26, 27],
    streetJ: [28, 29, 30],
    streetK: [31, 32, 33], 
    streetL: [34, 35, 36]
}

var doubleStreets = {
    double1: [1, 2, 3, 4, 5, 6],
    double2: [4, 5, 6, 7, 8, 9],
    double3: [7, 8, 9, 10, 11, 12],
    double4: [10, 11, 12, 13, 14, 15],
    double5: [13, 14, 15, 16, 17, 18],
    double6: [16, 17, 18, 19, 20, 21],
    double7: [19, 20, 21, 22, 23, 24], 
    double8: [22, 23, 24, 25, 26, 27], 
    double9: [25, 26, 27, 28, 29, 30],
    double10: [28, 29, 30, 31, 32, 33],
    double11: [31, 32, 33, 34, 35, 36]
}

var basket = [0, 1, 2, 3, 37]

var splits = {
    vertical: 
    {
        colA: [[1, 4], [4, 7], [7, 10], [10, 13], [13, 16], [16, 19], [19, 22], [22, 25], [25, 28], [28, 31], [31, 34]],
        colB: [[2, 5], [5, 8], [8, 11], [11, 14], [14, 17], [17, 20], [20, 23], [23, 26], [26, 29], [29, 32], [32, 35]],
        colC: [[3, 6], [6, 9], [9, 12], [12, 15], [15, 18], [18, 21], [21, 24], [24, 27], [27, 30], [30, 33], [33, 36]]
        },
    horizontal: 
    {
        lowStreets: [[1, 2], [2, 3], [4, 5], [5, 6], [7, 8], [8, 9], [10, 11], [11, 12], [13, 14], [14, 15], [16, 17], [17, 18]],
        highStreets: [[19, 20], [20, 21], [22, 23], [23, 24], [25, 26], [26, 27], [28, 29], [29, 30], [31, 32], [32, 33], [34, 35], [35, 36]]
    }
    
}

var corners = [
    [1, 2, 4, 5], [2, 3, 5, 6], [4, 5, 7, 8], [5, 6, 8, 9], 
    [7, 8, 10, 11], [8, 9, 11, 12], [10, 11, 13, 14], [11, 12, 14, 15], 
    [13, 14, 16, 17], [14, 15, 17, 18], [16, 17, 19, 20], [17, 18, 20, 21], 
    [19, 20, 22, 23], [20, 21, 23, 24], [22, 23, 25, 26], [23, 24, 26, 27],
    [25, 26, 28, 29], [26, 27, 29, 30], [28, 29, 31, 32], [29, 30, 32, 33],
    [31, 32, 34, 35], [32, 33, 35, 36]
]


// testing the ability to call characteristics from objects

// console.log(splits.vertical.colB[5])
// console.log(splits.horizontal.lowStreets[3])
// console.log(corners[1]);




// the collection of conditions that define a victory "#win-condition-tbl"

// var croupier is the casino/the target number for a round. use the variables defined on table-numbers.js
// wagers get pushed to an array of objects, where the object includes a class describing the style of wager (single, street, basket, etc), an integer value for the wager, and the attributes of the wager (the numbers/conditions that will apply)

var croupier = "";

// wagers is a collection of user bets pushed to a database for the duration of the round. 
var wagers = {}

// the following is the comparison logic charted out. it does not yet include functions and it's very raw.

// the wager is red
if (croupier.isRed == true && croupier.isZero == false) {
    console.log("win 1:1");
    // function to pay out winnings to player bank goes here
    } else {
        console.log("lose");
    }

// the wager is black
if (croupier.isRed == false && croupier.isZero == false) {
    console.log("win 1:1");
} else {
    console.log("lose");
}

// the wager is evens
if (croupier.isEven == true && croupier.isZero == false) {
    console.log("win 1:1");
} else {
    console.log("lose");
}

// the wager is odds
if (croupier.isEven == false && croupier.isZero == false) {
    console.log("win 1:1");
} else {
    console.log("lose");
}

// wager is lower half
if (croupier.value <= 18 && croupier.isZero == false){
    console.log("win 1:1");
} else {
    console.log("lose");
}

// wager top half
if (croupier.value >= 19 && croupier.isZero == false){
    console.log("win 1:1");
} else {
    console.log("lose");
} 

// wager column A: if croupier.value matches any of the 12 values on the chart of numbers from combo-bets.js, then it needs to log a victory condition
if (columns.columnA.indexOf(croupier.value) > -1 && croupier.isZero == false){
    console.log("win 2:1");
} else {
    console.log("lose");
} 

// wager column B: if croupier.value matches any of the 12 values on the chart of numbers from combo-bets.js, then it needs to log a victory condition
if (columns.columnB.indexOf(croupier.value) > -1 && croupier.isZero == false){
    console.log("win 2:1");
} else {
    console.log("lose");
}; 

// wager column C: if croupier.value matches any of the 12 values on the chart of numbers from combo-bets.js, then it needs to log a victory condition
if (columns.columnC.indexOf(croupier.value) > -1 && croupier.isZero == false){
    console.log("win 2:1");
} else {
    console.log("lose");
} 

// wager first dozen
if (dozens.firstDoz.indexOf(croupier.value) > -1 && croupier.isZero == false){
    console.log("win 2:1");
} else {
    console.log("lose");
} 

// wager second dozen
if (dozens.middleDoz.indexOf(croupier.value) > -1 && croupier.isZero == false){
    console.log("win 2:1");
} else {
    console.log("lose");
} 

// wager third dozen
if (dozens.topDoz.indexOf(croupier.value) > -1 && croupier.isZero == false){
    console.log("win 2:1");
} else {
    console.log("lose");
} 

// wager on streetA
if (streets.streetA.indexOf(croupier.value) > -1){
    console.log("win 11:1");
} else {
    console.log("lose");
} 

// wager on streetB
if (streets.streetB.indexOf(croupier.value) > -1){
    console.log("win 11:1");
} else {
    console.log("lose");
} 

// wager on streetC
if (streets.streetC.indexOf(croupier.value) > -1){
    console.log("win 11:1");
} else {
    console.log("lose");
} 

// wager on streetD
if (streets.streetD.indexOf(croupier.value) > -1){
    console.log("win 11:1");
} else {
    console.log("lose");
} 

// wager on streetE
if (streets.streetE.indexOf(croupier.value) > -1){
    console.log("win 11:1");
} else {
    console.log("lose");
} 

// wager on streetF
if (streets.streetF.indexOf(croupier.value) > -1){
    console.log("win 11:1");
} else {
    console.log("lose");
} 

// wager on streetG
if (streets.streetG.indexOf(croupier.value) > -1){
    console.log("win 11:1");
} else {
    console.log("lose");
} 

// wager on streetH
if (streets.streetH.indexOf(croupier.value) > -1){
    console.log("win 11:1");
} else {
    console.log("lose");
} 

// wager on streetI
if (streets.streetI.indexOf(croupier.value) > -1){
    console.log("win 11:1");
} else {
    console.log("lose");
} 

// wager on streetJ
if (streets.streetJ.indexOf(croupier.value) > -1){
    console.log("win 11:1");
} else {
    console.log("lose");
} 

// wager on streetK
if (streets.streetK.indexOf(croupier.value) > -1){
    console.log("win 11:1");
} else {
    console.log("lose");
} 

// wager on streetL
if (streets.streetL.indexOf(croupier.value) > -1){
    console.log("win 11:1");
} else {
    console.log("lose");
} 

// wager on double1
if (doubleStreets.double1.indexOf(croupier.value) > -1){
    console.log("win 5:1");
} else {
    console.log("lose");
} 



// everything below this line is function tests

// var targetNumber = {
//     value: 5,
//     isRed: true,
//     isEven: false,
//     isZero: false
// }

// var croupier = targetNumber;

// console.log(doubleStreets.double1);

if (doubleStreets.double1.indexOf(croupier.value) > -1){
    console.log("win 5:1");
} else {
    console.log("lose");
} 

if (croupier.isRed == true && croupier.isZero == false) {
    console.log("win 1:1");
    // function to pay out winnings to player bank goes here
    } else {
        console.log("lose");
    }
