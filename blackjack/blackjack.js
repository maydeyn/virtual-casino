
// var hitButton = $("#hitButton");
// var standButton = $("#standButton");

function Card(suit, value, weight){
    this.name = suit.charAt(0) + value;
    this.suit = suit;
    this.value = value;
    this.weight = weight;
    this.img_url = "";
}

function Gambler(id, gambleAmount){
    this.id = id;
    this.gambleAmount = gambleAmount;
    this.score = 0;
    this.hand = [];

}

// temps
// var c1 = new Card(suits[1],values[2]);
// console.log(c1.name);
// console.log(c1.suit);
// console.log(c1.value);
// console.log(c1);

$("#newGameButton").on("click", function(e){
    newGame(1,1);

});


function newGame(deckAmount, numberOfPlayers){
    var deck = shuffle(createDecks(deckAmount));
    deck = cardImgUrl(deck);
    //console.log(deck);
    var players = [];
    var house = new Gambler(0,0);
    players.push(house);

    for (var i = 1; i <= numberOfPlayers; i++){
        var player = new Gambler(i, 1000);
        players.push(player);
    }

    console.log(players);

    //start hand 
    for (var k = 0; k < 2; k++){
        for (var i = 0; i < players.length; i++){
            var card = deck.pop();
            players[i].hand.push(card);
            
        }
    }

    $("#p1").attr('src', players[1].hand[0].img_url);
    $("#p2").attr('src', players[1].hand[1].img_url);


    console.log(players);
    console.log(deck.length);
    players = hit(players, 1, deck);
    console.log(players);

}

// function startHand(playersArray, deck){
//     for (var k = 0; k < 2; k++){
//         for (var i = 0; i < playersArray.length; i++){
//             var card = deck.pop();
//             playersArray[i].hand.push(card);
//         }
//     }
// }

function createDecks(amount){
    //var suits = ["♠", "♦", "♣", "♥"];
    var suits = ["spades", "diamonds", "clubs", "hearts"];
    var values = ["A","2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K"];
    var deck = [];
    for (var i = 0; suits.length > i; i++){
        for(var k = 0; values.length > k; k++){
            var weight = parseInt(values[k]);
            if (values[k] === "J" || values[k] === "Q" || values[k] === "K" ){
                weight = 10;
            };
            if (values[k] === "A"){
                weight = 11;
            };
            var card = new Card(suits[i], values[k], weight);
            deck.push(card);
        }
    }
    if (amount > 1){
        var originalDeck = deck;
        for (var i = 1; amount > i; i++){
            deck = originalDeck.concat(deck);
        }
    }
    return deck; 
}

function cardImgUrl(deckArray){
    for (var i = 0; i < deckArray.length; i++){
        var cardName = deckArray[i].name;

        if (cardName.charAt(1) === "J"){
            cardName = cardName.charAt(0) + "11";
        }else if (cardName.charAt(1) === "Q"){
            cardName = cardName.charAt(0) + "12";
        }else if (cardName.charAt(1) === "K"){
            cardName = cardName.charAt(0) + "13";
        }else if (cardName.charAt(1) === "A"){
            cardName = cardName.charAt(0) + "1";
        }

        deckArray[i].img_url = `../public/assets/images/cards/${cardName}.png`;
    };
    return deckArray;
}

function shuffle(deckArray){
    for (var i = 0; deckArray.length > i; i++){
        var rando = Math.floor(Math.random()*(deckArray.length-i));
        var temp = deckArray[i];
        deckArray[i] = deckArray[rando];
        deckArray[rando] = temp;
    }
    return deckArray;
}

function hit(playerArray, playerID, deck){
    var card = deck.pop();
    playerArray[playerID].hand.push(card);
    return playerArray;
}

function stand(playerArray, playerID){
    //if (playerArray[playerID].)

}

// var gameDeck = createDecks(5);
// console.log(gameDeck);
// console.log(gameDeck.length);
// console.log(shuffle(gameDeck));
// console.log(gameDeck.length);
