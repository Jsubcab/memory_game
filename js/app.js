/*
 * Create a list that holds all of your cards
 */
const baseDeck = document.querySelector(".deck");
let card = document.querySelectorAll(".card");
let deckCards = [...card];

// counter moves
let moves = document.querySelector('.moves').innerHTML;
// counter cards flipped
let flippedCards = 2;
// array cards flipped
let arrayflippedCards = [];


/* remove cards from the div .deck */
let shuffledCards = shuffle(deckCards);

    for (remove of deckCards) {
        baseDeck.removeChild(document.querySelector('.card'));
    }

    /* Add cards shuffled to the div .deck */
    for (let add = 0; add < deckCards.length; add++) {
        baseDeck.appendChild(shuffledCards[add]);

        /* activate the function to flip show */
        deckCards[add].addEventListener('click', function() {
            //you can only flip 2 cards max at the same time
            if (flippedCards > 0) {
            deckCards[add].className = 'card open show';
            arrayflippedCards.push(deckCards[add]);
            flippedCards--;
            } else if (arrayflippedCards[0] == arrayflippedCards[1]){
                flippedCards = 2;
            } else {
                deckCards[add].className='card';
                deckCards[add-1].className='card';
                flippedCards = 2;
            }
        });

    }



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

