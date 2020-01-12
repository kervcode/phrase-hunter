/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Game.js */

class Game {
    constructor() {
        this.missed = 0;
        this.phrases = [
            new Phrase("I am on a seafood diet I see food and I eat it"),
            new Phrase("A balanced diet means a cupcake in each hand"),
            new Phrase("I love you"),
            new Phrase("Fish and visitors stink after three days"),
            new Phrase("Humpty Dumpty was pushed")
        ];

        //need to add 5 phrases inside this array
        this.activePhrase = null;
    }
    /**
     * Selects random phrase from phrases property
     * @return {Object} Phrase object chosen to be used
     */
    getRandomPhrase() {
        let randomPhrase = Math.floor(Math.random() * this.phrases.length);
        return this.phrases[randomPhrase];
    }

    /**
     * Begins game by selecting a random phrase and displaying it to user
     */
    startGame() {
        //hide the start screen overlay
        const overlay = document.getElementById("overlay");
        overlay.style.visibility = "hidden";

        //call the the getRandomPhrase
        let select = this.getRandomPhrase();
        this.activePhrase = select;
        select.addPhraseToDisplay();

        //selected phrase
        console.log(this.activePhrase);
    }

    /**
     * check if there's a win
     * @return {boolean} True if game has been won, false if game wasn't won
     */
    checkForWin() {
        const list = document.querySelectorAll(".letter");
        const alltrue = [];

        list.forEach(li => {
            if (li.classList.contains("show")) {
                alltrue.push(li);
            }
        });
        if (alltrue.length === list.length) {
            console.log("win");
            return true;
        } else {
            console.log(false);
            return false;
        }
    }
    /**
     * Increases the value of the missed property
     * Removes a life from the scoreboard
     * Checks if player has remaining lives and ends game if player is out
     */
    removeLife() {
        // Removes a life from the scoreboard
        if (this.missed < 5) {
            const lifes = document.querySelectorAll(".tries img");
            let totalLives = lifes.length - this.missed - 1;
            lifes[totalLives].setAttribute('src', '../images/lostHeart.png');
        }
        //Increases the value of the missed property
        this.missed += 1;

        //Checks if player has remaining lives and ends game if player is out
        if (this.missed === 5) {
            this.gameOver();
        }


    }

    gameOver(gameWon) {
        const overlay = document.getElementById("overlay");
        const gameStatus = document.getElementById("game-over-message");
        overlay.style.visibility = "visible";
        //Check for win
        if (this.checkForWin()) {
            gameStatus.innerText = "Whoooo, you won!!!";
        } else { // check for lost
            gameStatus.innerText = "Sorry, better luck next time.";
        }
    }
}