/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Game.js */

class Game {
    constructor() {
        this.missed = 0;
        this.phrases = [
            new Phrase('I am on a seafood diet I see food and I eat it'),
            new Phrase('A balanced diet means a cupcake in each hand'),
            new Phrase('I love you'),
            new Phrase('Fish and visitors stink after three days'),
            new Phrase('Humpty Dumpty was pushed'),
        ];

        //need to add 5 phrases inside this array
        this.activePhrase = null;
    }

    getRandomPhrase() {
        let randomPhrase = Math.floor(Math.random() * this.phrases.length);
        return this.phrases[randomPhrase];
    }

    /*
     *
     */
    startGame() {
        //hide the start screen overlay
        const overlay = document.getElementById('overlay');
        overlay.style.display = 'none';

        //call the the getRandomPhrase
        let select = this.getRandomPhrase();
        this.activePhrase = select;
        select.addPhraseToDisplay();

        //selected phrase
        console.log(this.activePhrase);
    }

    /* This method control the user interaction with the game
     */
    handleInteraction() {
        
        this.checkLetter(this.activePhrase.phrase);
        this.showMatchedLetter();
        
        //check if button match letter on the screen

        //if not matched, disable select letter - add selected letter

        // if matched, 

    }


    /**
    * Checks if passed letter is in phrase
    * @param (string) letter - Letter to check
    */
    checkLetter(letter){
        let keyboard = document.getElementById('qwerty');
        // let activePhrase = this.activePhrase.phrase;
        let letterCheck;
        //check if button is clicked
        keyboard.addEventListener('click', (e) =>{
            let keyPush = e.target;
            if (letter.includes(keyPush.innerText)){
                letterCheck = keyPush.innerText;
                console.log(letterCheck)
                return letterCheck;
            }
        });
        // this.showMatchedLetter();
      
        // return letterCheck;
    }
}