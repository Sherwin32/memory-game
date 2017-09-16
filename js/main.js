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
	if (cardsInPlay.length === 2) {
		if (cardsInPlay[0] === cardsInPlay[1]) {
			console.log("You found a match!");
		}else {
			console.log("Sorry, try again.");
		}
	}
}

function flipCard(cardId){
	console.log("User flipped " + cards[cardId].rank);
	console.log("cardImage: " + cards[cardId].cardImage);
	console.log("suit: " + cards[cardId].suit);
	cardsInPlay.push(cards[cardId].rank);
	checkForMatch();
}



flipCard(0);
flipCard(2);