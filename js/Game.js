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

    checkForWin() {
        let list = document.querySelectorAll('.letter');
        console.log(list)
        const alltrue = [];

        list.forEach(li => {
            if (li.classList.contains('show')) {
                alltrue.push(li);
            }
        })
        if (alltrue.length === list.length) {
            console.log('win')
        }
    }


}