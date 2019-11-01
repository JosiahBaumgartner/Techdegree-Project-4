/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Game.js */

class Game {
  constructor(){
    this.missed = 0;
    this.phrases = [
      {phrase: "say sike right now"},
      {phrase: "stonks"},
      {phrase: "flex tape"},
      {phrase: "we live in a society"},
      {phrase: "now this is an avengers level threat"}
    ];
    this.activePhrase = null;
  }

  /**
  * Selects random phrase from phrases property
  * @return {Object} Phrase object chosen to be used
  */
  getRandomPhrase(){
  const randomNum = Math.floor(Math.random() * (5));
  const randomPhrase = new Phrase(game.phrases[randomNum]);
  return randomPhrase;
  }

  /**
  * Begins game by selecting a random phrase and displaying it to user
  */
  startGame(){
    document.querySelector("#overlay").style.display = "none";
    this.activePhrase = this.getRandomPhrase();
    this.activePhrase.addPhraseToDisplay();
  };

  /**
  * Checks for winning move
  * @return {boolean} True if game has been won, false if game wasn't
  won
  */
  checkForWin(){
    let win = document.querySelectorAll(".hide").length === 0;
    return win;
  };

  /**
  * Increases the value of the missed property
  * Removes a life from the scoreboard
  * Checks if player has remaining lives and ends game if player is out
  */
  removeLife(){
    document.querySelectorAll(".tries")[this.missed].innerHTML = '<img src="images/pika-surprised.png" alt="Surprised Pikachu" height="100" width="100">';
    this.missed++;
    if(this.missed === 5){
      game.gameOver(false);
    }
  };

  /**
  * Displays game over message
  * @param {boolean} gameWon - Whether or not the user won the game
  */
  gameOver(gameWon){
    if (gameWon){
      document.querySelector("#game-over-message").innerText = "You're meme supreme"
      document.querySelector("#overlay").classList.remove("start");
      document.querySelector("#overlay").classList.remove("lose");
      document.querySelector("#overlay").classList.add("win");
      document.querySelector("#overlay").style.display = "";
    } else {
      document.querySelector("#game-over-message").innerText = "That ain't it cheif"
      document.querySelector("#overlay").classList.remove("start");
      document.querySelector("#overlay").classList.remove("win");
      document.querySelector("#overlay").classList.add("lose");
      document.querySelector("#overlay").style.display = "";
    }
  };
  /**
  * Handles onscreen keyboard button clicks
  * @param (HTMLButtonElement) button - The clicked button element
  */
  handleInteraction(button) {
  button.disabled = true;
  if(game.activePhrase.checkLetter(button.textContent) === false){
    button.classList.add("wrong");
    game.removeLife();
  } else if (game.activePhrase.checkLetter(button.textContent) === true) {
    button.classList.add("chosen");
    game.activePhrase.showMatchedLetter(button.textContent);
    if(game.checkForWin()){
      game.gameOver(true);
    }
  }
  };
};
