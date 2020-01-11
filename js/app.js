/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * app.js */


/*
 * Game Started
 */

let game;

document.getElementById('btn__reset').addEventListener('click', () => {
  game = new Game();
  game.startGame();
  // game.checkForWin();
  // game.handleInteraction();
})

//STEP 3 TESTS WORKED
// const phrase = new Phrase('Life is like a box of chocolates');
// console.log(`Phrase - phrase: ${phrase.phrase}`);

// STEP 4 TESTS WORKED
// const game = new Game();
// game.phrases.forEach((phrase, index) => {
// console.log(`Phrase ${index} - phrase: ${phrase.phrase}`);
// });

// STEP 5 TESTS WORKED
// const game = new Game();
// const logPhrase = (phrase) => {
//   console.log(`Phrase - phrase: `, phrase.phrase);
// };

// logPhrase(game.getRandomPhrase());
// logPhrase(game.getRandomPhrase());
// logPhrase(game.getRandomPhrase());
// logPhrase(game.getRandomPhrase());
// logPhrase(game.getRandomPhrase());

//STEP 6 TEST WORKED
// const game = new Game();
// const randomPhrase = game.getRandomPhrase();
// const phrase = new Phrase(randomPhrase.phrase);
// phrase.addPhraseToDisplay();


//STEP 7 TESTS
// const game = new Game();
// game.startGame();

// console.log(`Active Phrase - phrase: ${game.activePhrase.phrase}`);