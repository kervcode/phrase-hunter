/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Game.js */

 class Game {
     constructor () {
        this._missed = 0,
        this._phrases = [], //need to add 5 phrases inside this array
        this._activePhrase = null;
     }

     startGame(){
         this._activePhrase = getRandomPhrase();
     }
 }