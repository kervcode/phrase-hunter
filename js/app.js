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

const buttons = document.querySelectorAll('.key');

buttons.forEach(button => {
  button.addEventListener('click', (event) => {
    game.handleInteraction(event)
  })
});

// click, addEventListener('click', (event) => {
//   game.handleInteration(event)
// })