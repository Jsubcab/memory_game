//
//  INITIAL DECLARATIONS
//
const baseDeck = document.querySelector(".deck");
let card = document.querySelectorAll(".card");
let deckCards = [...card];

// counter moves
let movesNum = 0;
let moves = document.querySelector('.moves');

// array cards flipped
let arrayflippedCards = [];

// -----------------------

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

function movesCounter() {
    movesNum++;
    moves.innerHTML = movesNum;
}

//function for mixing cards at the beginning
mixCards();
//restart the moves to 0
moves.innerHTML = movesNum;

//Basically the main engine of the game
for (let i=0; i<deckCards.length; i++) {
    //Add eventlistener to my deck
    deckCards[i].addEventListener('click', function(){
        deckCards[i].classList.add('show', 'open');
        //Add cards to the array for checking if they match later
        arrayflippedCards.push(this);

        // Check if the cards match in my array and add moves
         if (arrayflippedCards.length === 2) {
            //Add one move
            movesCounter();

            if (arrayflippedCards[0].querySelector('i').classList.value === arrayflippedCards[1].querySelector('i').classList.value)
            {
                arrayflippedCards[0].classList.add('match');
                arrayflippedCards[1].classList.add('match');
                arrayflippedCards = [];
            } else {
                //IMPORTANT: timing for hiding, if not hides instantly
                setTimeout(() => {
                    arrayflippedCards[0].classList.remove('show', 'open');
                    arrayflippedCards[1].classList.remove('show', 'open');
                    arrayflippedCards = [];
                }, 300);
               
            }
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

