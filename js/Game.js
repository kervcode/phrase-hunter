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
      new Phrase("You cannot win this"),
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
    //clear ul before game start
    this.reset()
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
   *
   * @param {*} event
   */
  handleInteraction(event) {
    let button = event.target;
    let letter = event.target.innerText;
    const gameStatus = document.getElementById("game-over-message");

    //check clicked letter
    if (this.activePhrase.checkLetter(letter)) {
      //disable the selected button
      button.setAttribute("disabled", true);
      // call show matched letter
      this.activePhrase.showMatchedLetter(letter);

      // add chosen class
      button.classList.add("chosen");

      // call check for win
      this.checkForWin();
      console.log(this.checkForWin());
      // if check for win return true
      if (this.checkForWin()) {
        this.gameOver(this.checkForWin())
      }
    } else {
      console.log(button);
      //add wrong class
      button.classList.add("wrong");
      //disable the selected button
      button.setAttribute("disabled", true);
      //remove a life
      this.removeLife();
    }
    // button.setAttribute('disabled', true);
  }

  /**
   * Check for a win
   * 
   * @return {boolean} True if game has been won, false if game wasn't won
   */
  checkForWin() {
    const list = document.querySelectorAll(".show");
    const letters = document.querySelectorAll('.letter')

    if (list.length === letters.length) {
      return true;
    }

    console.log(list.length);
    console.log(letters.length);
  }
  /**
   * Increases the value of the missed property
   * Removes a life from the scoreboard
   * Checks if player has remaining lives and ends game if player is out
   */
  removeLife() {
    // Removes a life from the scoreboard
    if (this.missed < 5) {
      //grab all image 
      const lifes = document.querySelectorAll(".tries img");
      //counter to determine which life to remove in the lifes array
      let totalLives = lifes.length - this.missed - 1;
      //change the source attribute of the life that needs to be removed
      lifes[totalLives].setAttribute("src", "../images/lostHeart.png");
    }
    //Increases the value of the missed property
    this.missed += 1;

    //Checks if player has remaining lives and ends game if player is out
    if (this.missed === 5) {
      this.gameOver();
    }
  }

  /**
   * Displays game over message
   * @param {boolean} gameWon - Whether or not the user won the game
   */
  gameOver(gameWon) {
    const overlay = document.getElementById("overlay");
    const gameStatus = document.getElementById("game-over-message");
    overlay.style.visibility = "visible";
    //Check for win
    if (gameWon) {
      gameStatus.innerText = 'Woohoo, You Won!!!'
    } else {
      gameStatus.innerText = 'Sorry, Wishing you better luck next time !!!'
    }

  }

  /**
   * reset game elements before initiate new game
   */
  reset() {
    //remove all li elements in the UL
    document.querySelector('UL').innerHTML = '';
    //reset button element
    const keys = document.querySelectorAll('.key');

    /**
     * remove disable attribute from onscreen button
     * removed chosen and wrong class
     */
    keys.forEach(key => {
      key.removeAttribute("disabled");
      key.classList.remove('wrong');
      key.classList.remove('chosen')
    });

    /**
     * reset all life heart images
     */
    const hearts = document.querySelectorAll('#scoreboard img');

    hearts.forEach(heart => {
      heart.setAttribute('src', '../images/liveHeart.png')
    })

  }
}