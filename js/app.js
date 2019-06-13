/*
 * Create a list that holds all of your cards
 */
const baseDeck = document.querySelector(".deck");
let card = document.querySelectorAll(".card");
let deckCards = [...card];
/*
 * Display the cards on the page
 *   - shuffle the list of cards using the provided "shuffle" method below
 *   - loop through each card and create its HTML
 *   - add each card's HTML to the page
 */

/* addEventListener to the deckCards */
for (let i=0; i <= deckCards.length; i++) {
let cards = deckCards[i];

cards.addEventListener('click', function() {
    deckCards[i].className = 'card open show';
});
}

/* shuffle */
function start() {
    let shuffledCards = shuffle(deckCards);
    let newArrayCards = [];

    for (let i = 0; i < shuffledCards.length; i++){
    newArrayCards.push(shuffledCards[i]);
    }
    baseDeck.appendChild(newArrayCards);
    
    /*
    const shuffledCards = shuffle(deckCards);
    for (let i=0; i < shuffledCards.length; i++) {
        [].forEach.call(shuffledCards, function(eachCard) {
                baseDeck.appendChild(eachCard);
            }
        );
    }*/
}
window.onload = start();

/* function to check if is 2 cards open it */
/*
function isOpen () {
let openCount = 0;

    if (openCount < 2) {
        if () {

        }
    } else {
        restLives();
    }
}*/

// Shuffle function from http://stackoverflow.com/a/2450976
function shuffle(array) {
    var currentIndex = array.length, temporaryValue, randomIndex;

    while (currentIndex !== 0) {
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;
        temporaryValue = array[currentIndex];
        array[currentIndex] = array[randomIndex];
        array[randomIndex] = temporaryValue;
    }

    return array;
}


/*
 * set up the event listener for a card. If a card is clicked:
 *  - display the card's symbol (put this functionality in another function that you call from this one)
 *  - add the card to a *list* of "open" cards (put this functionality in another function that you call from this one)
 *  - if the list already has another card, check to see if the two cards match
 *    + if the cards do match, lock the cards in the open position (put this functionality in another function that you call from this one)
 *    + if the cards do not match, remove the cards from the list and hide the card's symbol (put this functionality in another function that you call from this one)
 *    + increment the move counter and display it on the page (put this functionality in another function that you call from this one)
 *    + if all cards have matched, display a message with the final score (put this functionality in another function that you call from this one)
 */

