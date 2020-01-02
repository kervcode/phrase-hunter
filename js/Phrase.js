/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Phrase.js */
class Phrase {
    constructor(phrase) {
        this.phrase = phrase;
    }

    addPhraseToDisplay() {
        //str.match(/[a-z]/i
        let li = document.createElement('LI'),
            phraseUl = document.getElementsByTagName('ul');
        for (let i = 0; i < phrase.length; i++) {
            if (phrase[i].match(/[a-z]/i)) {
                li.innerHTML(phrase[i]);
                li.classList.add('letter', 'hide')
            }
            if (phrase[i] === '') {
                li.innerHTML(phrase[i]);
                li.classList.add('space')
            }
            phraseUl.appendChild(li)
        }
    }

    checkLetter() {}

    showMatchedLetter() {

    }
}