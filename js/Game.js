/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Game.js */

 class Game {
     constructor () {
        this.missed = 0,
        this.phrases = [
            {phrase: 'I am on a seafood diet I see food and I eat it'},
            {phrase: 'A balanced diet means a cupcake in each hand'},
            {phrase: 'I love you'},
            {phrase: 'Fish and visitors stink after three days'},
            {phrase: 'Humpty Dumpty was pushed'}
        ],
        //need to add 5 phrases inside this array
        this.activePhrase = null;
     }

     startGame(){
         this.activePhrase = getRandomPhrase();
     }

    //  createPhrases(){
    //      return {
    //         phrase: 'I am on a seafood diet I see food and I eat it',
    //         phrase: 'A balanced diet means a cupcake in each hand',
    //         phrase: 'I love you',
    //         phrase: 'Fish and visitors stink after three days',
    //         phrase: 'Humpty Dumpty was pushed'
    //     }
    //  }
 }

 