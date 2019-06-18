//
//  INITIAL DECLARATIONS
//
let baseDeck = document.querySelector(".deck");
let card = document.querySelectorAll(".card");
let deckCards = [...card];

//stars
const stars = document.querySelector('.stars');
let starsArray = [...stars.children];
//counter helps to determine if already have been decreased one star
let counter = 3;

//timer
const timer = document.querySelector('.timer');
let minutes = `00`;
let seconds = `00`;
//here is recorded the timing so i can stopped later from any function
let interval;

// restart button
const restartButton = document.querySelector('.restart');

// counter moves
let movesNum = 0;
let moves = document.querySelector('.moves');
moves.innerHTML = movesNum;

// array cards flipped
let arrayflippedCards = [];
let matchedCards = 0;


// -----------------------

function mixCards() {
    /* remove cards from the div .deck */
    let shuffledCards = shuffle(deckCards);

    for (remove of deckCards) {
        baseDeck.removeChild(document.querySelector('.card'));
    }

    /* Add cards shuffled to the div .deck */
    for (let add = 0; add < deckCards.length; add++) {
        baseDeck.appendChild(shuffledCards[add]);
    }
}

//function to count the amount of moves player does
function movesCounter() {
    movesNum++;
    moves.innerHTML = movesNum;
    if (movesNum == 1) {
        timingCount();
    }
    if ((movesNum === 10) || (movesNum === 20)) {
        starsCounter(true);
    }
}

//function for mixing cards at the beginning
mixCards();

//restart button is pressed
function restartGame() {
    arrayflippedCards = [];
    movesNum = 0;
    moves.innerHTML = movesNum;
    counter = 3;
    matchedCards = 0;

    mixCards();

    minutes = `00`;
    seconds = `00`;
    timer.innerHTML = minutes + ":" + seconds;
    clearInterval(interval);

    for (let i=0; i<deckCards.length; i++) {
        deckCards[i].classList.remove('show', 'open', 'match');
    }

    for (j=0; j<starsArray.length; j++){
        starsArray[j].style.display = 'inline-block';
    }
}

function timingCount(){
    interval = setInterval( () => {
    timer.innerHTML = minutes + ":" + seconds;
    seconds++;
    if (seconds < 10) {
        seconds = `0` + seconds;
    }
    else if (seconds == 60) {
        minutes++;
        seconds = `0`;
        if (minutes === 2) {
            starsCounter(true);
        }
    }
    }
    , 1000);
}

function starsCounter(rule) {

    if (rule) {
        starsArray[2].style.display = 'none';
    }
    if ((rule) && (counter === 2)) {
        starsArray[1].style.display = 'none';
    }
    if ((rule) && (counter === 1)) {
        starsArray[0].style.display = 'none';
    }
    counter--;
}


function end() {
 let record = document.querySelector('.record');
 let playagain = document.querySelector('#button');
 let endDiv = document.querySelector(".end");

 clearInterval(this.interval);

record.innerHTML = ` <br> Moves = ${movesNum} <br> Time = ${minutes}: ${seconds} <br> Stars = ${stars.innerHTML}`;

endDiv.style.display = 'block';
arrayflippedCards[0].classList.remove ('show', 'open');
arrayflippedCards[1].classList.remove ('show', 'open');

for (let i=0;i<deckCards.length;i++) {
    deckCards[i].classList.remove('show','open');
}

playagain.addEventListener('click', () => {
    endDiv.style.display = 'none';
    restartGame();
});

}

//eventlistener for restarting the game
restartButton.addEventListener('click', restartGame);

//Basically the main engine of the game
for (let i=0; i<deckCards.length; i++) {
    //Add eventlistener to my deck of cards one by one
    deckCards[i].addEventListener('click', function(e){
        //to every target (every card) i add the classlist
        e.target.classList.add('show', 'open');
        //Add cards to the array for checking if they match later

        arrayflippedCards.push(e.target);

        // Check if the cards match in my array and add moves
         if (arrayflippedCards.length === 2) {
            //Add one move
            movesCounter();

            if (arrayflippedCards[0].querySelector('i').classList.value === arrayflippedCards[1].querySelector('i').classList.value)
            {
                arrayflippedCards[0].classList.add('match');
                arrayflippedCards[1].classList.add('match');

                matchedCards++;
                if (matchedCards === 1) {
                        end();

                }
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

