// ideal roulette logic


// function to take wagers from the player and push the to a json. 
// include a sub-function to check that the player has the money to commit the bet

// function to essentially say 'no more bets. the sequence of that umbrella function are as follows:
// • the player bank is debited
// • the casino runs a random number for the croupier
// • compare the croupier number against the wagers on the TableNumbers
// • pay any winning wagers
// • empty the json that holds the wagers








// -------------- below this line is the original prototype --------------
// ------------ the original prototype is no longer the ideal logic ------
// ---------------- the ideal logic is above this interlude --------------

const targetNumber = "";
const activeBets = {};
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