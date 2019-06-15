/*
 * Create a list that holds all of your cards
 */
const baseDeck = document.querySelector(".deck");
let card = document.querySelectorAll(".card");
let deckCards = [...card];

// counter moves
let moves = document.querySelector('.moves').innerHTML;
// counter cards flipped
let flippedCards = 0;
// array cards flipped
let arrayflippedCards = [];


function mixCards() {
    /* remove cards from the div .deck */
    const shuffledCards = shuffle(deckCards);

    for (remove of deckCards) {
        baseDeck.removeChild(document.querySelector('.card'));
    }

    /* Add cards shuffled to the div .deck */
    for (let add = 0; add < deckCards.length; add++) {
        baseDeck.appendChild(shuffledCards[add]);
    }

}

function turnCards() {
    for (let i=0; i<deckCards.length; i++) {
            deckCards[i].addEventListener('click', function(){
                deckCards[i].classList.add('show', 'open');
                arrayflippedCards.push(deckCards[i].childNodes[1]);
                flippedCards++;
            });
    }
}

function startGame() {
    mixCards();
    turnCards();
}

startGame();

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

