/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Phrase.js */
class Phrase {
    constructor(phrase) {
        this.phrase = phrase;
        
    }

    addPhraseToDisplay() {
        //str.match(/[a-z]/i
        let ul = document.querySelector('UL'),
        li;
        let displayPhrase = this.phrase;  
        for (let i = 0; i < displayPhrase.length; i++){
            if(displayPhrase[i].match(/[a-z]/i)) {
                li = document.createElement('LI');
                li.classList.add('hide', 'letter');
                li.innerText = displayPhrase[i];
                ul.appendChild(li);
            } else if(displayPhrase[i].match('')) {
                li = document.createElement('LI');
                li.classList.add('space');
                li.innerText = displayPhrase[i];
                ul.appendChild(li);
            }
        }  
    }

    checkLetter() {}

    showMatchedLetter() {

    }
}