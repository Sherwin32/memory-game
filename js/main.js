//Just to make sure the js file is connected to index.html
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

//If cardsInPlay.length < 2, flip the card and wait for the next card.
//If cardsInPlay.length = 2, tell the player if he found a match or not.
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

//Get the card data-id and push that card into the cardsInPlay array
function flipCard(){
	var cardId = this.getAttribute('data-id'); 
	cardsInPlay.push(cards[cardId].rank);
}

//To reset the game
//Set the cards to the back one by one using for loop, then clear the cardInPlay array.
function resetButton(){
	for (var i = 0; i < cards.length; i++){
		var cardElement = document.getElementById('card'+i);
		cardElement.setAttribute('src', 'images/back.png');
	}
	cardsInPlay = [];
}

//Start the game by creating the four cards
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