//  @ts-check (for type checking in vscode)

//console.log("Up and running!");

//
const cards = ["queen", "queen", "king", "king"];

// console.log("User flipped " + cardOne);
// console.log("User flipped " + cardThree);

let cardOne = cards[0];
let cardTwo = cards[2];

const cardsInPlay = [];

cardsInPlay.push(cardOne);
cardsInPlay.push(cardTwo);
cardsInPlay;

console.log("User flipped " + cardOne);
console.log("User flipped " + cardTwo);

if (cardsInPlay.length === 2) {
  if (cardsInPlay[0] === cardsInPlay[1]) {
    alert("You have found a match!");
  } else {
    alert("Sorry, try again!");
  }
}
