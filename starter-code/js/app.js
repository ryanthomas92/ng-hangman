console.log('app.js loaded!');

// initialize the application
angular
  .module("hangmanApp", [])
  .controller("HangmanController", HangmanController );

function HangmanController() {
  var vm = this;

  vm.hangman = new HangmanGame('elephant')
  vm.guessLetter = function(input) {
    vm.hangman.guess(input);
    vm.hangman.input = "";
  }
}
