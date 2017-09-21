//to make sure the js file is connected to index.html
console.log("Up and running!");

var cards = [
	{
		rank: "queen",
		suit: "hearts",
		cardImage: "images/queen-of-hearts.png"
	},
	{
		rank: "queen",
		suit: "diamonds",
		cardImage: "images/queen-of-diamonds.png"
	},
	{
		rank: "king",
		suit: "hearts",
		cardImage: "images/king-of-hearts.png"
	},
	{
		rank: "king",
		suit: "hearts",
		cardImage: "images/king-of-diamonds.png"
	}
];

var cardsInPlay = [];

function checkForMatch(){
	var cardId = this.getAttribute('data-id');
	this.setAttribute('src', cards[cardId].cardImage);
	if (cardsInPlay.length === 2) {
		if (cardsInPlay[0] === cardsInPlay[1]) {
			console.log("You found a match!");
			alert("You found a match!");
		}else {
			console.log("Sorry, try again.");
			alert("Sorry, try again.");
		}
	}
}

function flipCard(){
	var cardId = this.getAttribute('data-id'); 
	console.log("User flipped " + cards[cardId].rank);
	console.log("cardImage: " + cards[cardId].cardImage);
	console.log("suit: " + cards[cardId].suit);
	cardsInPlay.push(cards[cardId].rank);
}

function resetButton(){
	for (var i = 0; i < cards.length; i++){
		var cardElement = document.getElementById('card'+i);
		console.log(cardElement.id);
		cardElement.setAttribute('src', 'images/back.png');
	}
	cardsInPlay = [];
}

function createBoard(){
	for (var i = 0; i < cards.length; i++) {
		var cardElement = document.createElement('img');
		cardElement.setAttribute('src', 'images/back.png');
		cardElement.setAttribute('data-id', i);
		cardElement.id = 'card' + i;
		cardElement.addEventListener('click', flipCard);
		cardElement.addEventListener('click', checkForMatch);
		document.getElementById('game-board').appendChild(cardElement);
	}
	var resetElement = document.getElementById('reset-button');
	resetElement.addEventListener('click', resetButton);
}

createBoard();