const targetNumber = "";
const activeBets = "";
const playerMoney = "";

// for testing purposes
var test1 = process.argv[2];
var test2 = process.argv[3];
var test3 = process.argv[4];

// welcomes player to this game and displays the graphics and options (inside & outside bets)

function main(){
    placeBets();
    roulette();
    compareSuccess();
    playAgain();
}

function placeBets(){
    if (process.argv[2] === "inside") {
        placeInsideBets();
    } else if (process.argv[2] === "outside") {
        placeOutsideBets();
    }
    console.log(process.argv[2])
}

// submenu to place inside bets
function placeInsideBets(){
    var 
};

// submenu to place outside bets
function placeOutsideBets(){};

// function to run a math.random and then send to results
function roulette(){};

// function to determine payout and losses
function compareSuccess(){};

// function to change the players bank balance
function payouts(){};

// function to start over
function playAgain(){};

main();