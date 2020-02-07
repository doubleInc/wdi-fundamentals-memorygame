//  @ts-check (for type checking in vscode)

//console.log("Up and running!");

//
const cards = ["queen", "queen", "king", "king"];

const cardsInPlay = [];

function checkForMatch() {
  if (cardsInPlay[0] === cardsInPlay[1]) {
    console.log("You found a match!");
  } else {
    console.log("Sorry, try again.");
  }
}

function flipCard(cardId) {
  cardsInPlay.push(cards[cardId]);

  checkForMatch();
  console.log("User flipped " + cards[cardId]);
}

flipCard(0);
flipCard(2);
