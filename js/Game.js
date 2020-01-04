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
    startGame() {
        document.addEventListener('click', () => {
            alert('clicked');
            const overlay = document.getElementById('overlay');
            overlay.classList.remove('start');
            this.getRandomPhrase();
            phrase.addPhraseToDisplay();
            this.activePhrase = this.getRandomPhrase();
        });
    }

}