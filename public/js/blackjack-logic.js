


$(document).ready(function(){

var newGameButton = $('#newGameButton');
var hitButton = $('#hitButton');
var standButton = $('#standButton'); 
var betAmount = 10;

var deck = shuffle(createDecks(1000));
deck = cardImgUrl(deck);
var players = [];
var house = new Gambler(0,0);
players.push(house);
var player = new Gambler(1, 1000);
players.push(player);

newGameButton.on("click", function(){   
    players[0].hand = [];
    players[1].hand = [];
    players[0].score = 0;
    players[1].score = 0;
    for (var k = 0; k < 2; k++){
        for (var i = 0; i < players.length; i++){
            var card = deck.pop();
            players[i].hand.push(card);
            players[i].score += card.weight;


        };
        hitButton.prop('disabled', false);
        standButton.prop('disabled', false);
        $("#winOrLose").text("");
        var backCard = "back";
        $("#p1").attr('src', players[1].hand[0].img_url);
        $("#p2").attr('src', players[1].hand[1].img_url);
        $("#d1").attr('src', players[0].hand[0].img_url);

        $("#d2").attr('src', `./assets/images/cards/${backCard}.png`);
        $("#d3").attr('src', `./assets/images/cards/${backCard}.png`);
        $("#p3").attr('src', `./assets/images/cards/${backCard}.png`);
        $("#p4").attr('src', `./assets/images/cards/${backCard}.png`);
        $("#p5").attr('src', `./assets/images/cards/${backCard}.png`);
        $("#d3").attr('src', `./assets/images/cards/${backCard}.png`);
        $("#d4").attr('src', `./assets/images/cards/${backCard}.png`);
        $("#d5").attr('src', `./assets/images/cards/${backCard}.png`);

        $("#yourScore").text(players[1].score);
        $("#money").text(players[1].gambleAmount);

        winCheck21();
    })

    hitButton.on("click", function () {


        var hitCard = deck.pop();

        players[1].hand.push(hitCard);
        $("#p" + (players[1].hand.length)).attr('src', hitCard.img_url);
        players[1].score += hitCard.weight;
        $("#yourScore").text(players[1].score);
        winCheck21();
    })

    standButton.on("click", function () {
        $("#d2").attr('src', players[0].hand[1].img_url);
        if (players[1].score > players[0].score) {
            var hitCard = deck.pop();
            players[0].hand.push(hitCard);
            $("#d" + (players[0].hand.length)).attr('src', hitCard.img_url);
            players[0].score += hitCard.weight;
            $("#houseScore").text(players[0].score);

        players[0].hand.push(hitCard);
        $("#d" + (players[0].hand.length)).attr('src', hitCard.img_url);
        players[0].score += hitCard.weight;
        $("#houseScore").text(players[0].score);
        winCheck21(); 
    }
    if(players[1].score > players[0].score){

        var hitCard = deck.pop();
        players[1].hand.push(hitCard);
        $("#p" + (players[1].hand.length)).attr('src', hitCard.img_url);
        players[1].score += hitCard.weight;
        $("#yourScore").text(players[1].score);
        winCheck21();
    })

    standButton.on("click", function () {
        $("#d2").attr('src', players[0].hand[1].img_url);
        if (players[1].score > players[0].score) {
            var hitCard = deck.pop();
            players[0].hand.push(hitCard);
            $("#d" + (players[0].hand.length)).attr('src', hitCard.img_url);
            players[0].score += hitCard.weight;
            $("#houseScore").text(players[0].score);
            winCheck21();
        }
        winCheck();
    })

    function Card(suit, value, weight) {
        this.name = suit.charAt(0) + value;
        this.suit = suit;
        this.value = value;
        this.weight = weight;
        this.img_url = "";
    }

    function Gambler(id, gambleAmount) {
        this.id = id;
        this.gambleAmount = gambleAmount;
        this.score = 0;
        this.hand = [];

    }


    function createDecks(amount) {
        //var suits = ["♠", "♦", "♣", "♥"];
        var suits = ["spades", "diamonds", "clubs", "hearts"];
        var values = ["A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K"];
        var deck = [];
        for (var i = 0; suits.length > i; i++) {
            for (var k = 0; values.length > k; k++) {
                var weight = parseInt(values[k]);
                if (values[k] === "J" || values[k] === "Q" || values[k] === "K") {
                    weight = 10;
                };
                if (values[k] === "A") {
                    weight = 11;
                };
                var card = new Card(suits[i], values[k], weight);
                deck.push(card);
            }
        }
        if (amount > 1) {
            var originalDeck = deck;
            for (var i = 1; amount > i; i++) {
                deck = originalDeck.concat(deck);
            }
        }
        return deck;
    }

    winCheck();    
})

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
        winCheck();
    })

    function Card(suit, value, weight) {
        this.name = suit.charAt(0) + value;
        this.suit = suit;
        this.value = value;
        this.weight = weight;
        this.img_url = "";
    }

    function Gambler(id, gambleAmount) {
        this.id = id;
        this.gambleAmount = gambleAmount;
        this.score = 0;
        this.hand = [];

    }

    function createDecks(amount) {
        //var suits = ["♠", "♦", "♣", "♥"];
        var suits = ["spades", "diamonds", "clubs", "hearts"];
        var values = ["A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K"];
        var deck = [];
        for (var i = 0; suits.length > i; i++) {
            for (var k = 0; values.length > k; k++) {
                var weight = parseInt(values[k]);
                if (values[k] === "J" || values[k] === "Q" || values[k] === "K") {
                    weight = 10;
                };
                if (values[k] === "A") {
                    weight = 11;
                };
                var card = new Card(suits[i], values[k], weight);
                deck.push(card);
            }
        }
        if (amount > 1) {
            var originalDeck = deck;
            for (var i = 1; amount > i; i++) {
                deck = originalDeck.concat(deck);
            }
        }
        return deck;
    }


    function cardImgUrl(deckArray) {
        for (var i = 0; i < deckArray.length; i++) {
            var cardName = deckArray[i].name;

            if (cardName.charAt(1) === "J") {
                cardName = cardName.charAt(0) + "11";
            } else if (cardName.charAt(1) === "Q") {
                cardName = cardName.charAt(0) + "12";
            } else if (cardName.charAt(1) === "K") {
                cardName = cardName.charAt(0) + "13";
            } else if (cardName.charAt(1) === "A") {
                cardName = cardName.charAt(0) + "1";
            }

            deckArray[i].img_url = `./assets/images/cards/${cardName}.png`;

        };
        return deckArray;
    }

    function shuffle(deckArray) {
        for (var i = 0; deckArray.length > i; i++) {
            var rando = Math.floor(Math.random() * (deckArray.length - i));
            var temp = deckArray[i];
            deckArray[i] = deckArray[rando];
            deckArray[rando] = temp;
        }
        return deckArray;
    }

    function winCheck21() {
        if (players[1].score === 21 && players[0].score === 21) {
            $("#winOrLose").text("YOU TIED, YOU LOSE!");
            hitButton.prop('disabled', true);
            standButton.prop('disabled', true);
            players[1].gambleAmount -= betAmount;
            $("#money").text(players[1].gambleAmount);
        } else if (players[1].score === 21) {
            $("#winOrLose").text("BLACKJACK! YOU WIN!");
            hitButton.prop('disabled', true);
            standButton.prop('disabled', true);
            players[1].gambleAmount += betAmount;
            $("#money").text(players[1].gambleAmount);
        } else if (players[0].score === 21) {
            $("#winOrLose").text("HOUSE BLACKJACK! YOU LOSE!");
            hitButton.prop('disabled', true);
            standButton.prop('disabled', true);
            players[1].gambleAmount -= betAmount;
            $("#money").text(players[1].gambleAmount);
        } else if (players[1].score > 21) {
            $("#winOrLose").text("YOU BUSTED! YOU LOSE!");
            hitButton.prop('disabled', true);
            standButton.prop('disabled', true);
            players[1].gambleAmount -= betAmount;
            $("#money").text(players[1].gambleAmount);
        } else if (players[0].score > 21) {
            $("#winOrLose").text("HOUSE BUSTED! YOU WIN!");
            hitButton.prop('disabled', true);
            standButton.prop('disabled', true);
            players[1].gambleAmount += betAmount;
            $("#money").text(players[1].gambleAmount);
        }
    }

    function winCheck() {
        if (players[1].score === players[0].score) {
            $("#winOrLose").text("YOU TIED, YOU LOSE!");
            hitButton.prop('disabled', true);
            standButton.prop('disabled', true);
            players[1].gambleAmount -= betAmount;
            $("#money").text(players[1].gambleAmount);
        } else if (players[1].score > players[0].score && players[1].score <= 21) {
            $("#winOrLose").text("YOU WIN!");
            hitButton.prop('disabled', true);
            standButton.prop('disabled', true);
            players[1].gambleAmount += betAmount;
            $("#money").text(players[1].gambleAmount);
        } else if (players[0].score > players[1].score && players[0].score <= 21) {
            $("#winOrLose").text("YOU LOSE!");
            hitButton.prop('disabled', true);
            standButton.prop('disabled', true);
            players[1].gambleAmount -= betAmount;
            $("#money").text(players[1].gambleAmount);
        }
    }

})