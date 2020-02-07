//  @ts-check (for type checking in vscode)

//console.log("Up and running!");

//
//const cards = ["queen", "queen", "king", "king"];

const cards = [
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
    suit: "diamonds",
    cardImage: "images/king-of-diamonds.png"
  }
];

const cardsInPlay = [];

function checkForMatch() {
  if (cardsInPlay[0] === cardsInPlay[1]) {
    console.log("You found a match!");
  } else {
    console.log("Sorry, try again.");
  }
}

function flipCard(cardId) {
  cardsInPlay.push(cards[cardId].rank);

  checkForMatch();
  console.log("User flipped " + cards[cardId].rank);

  console.log("The card suit is " + cards[cardId].suit);
  console.log("Card image: " + cards[cardId].cardImage);
}

flipCard(0);
flipCard(2);
