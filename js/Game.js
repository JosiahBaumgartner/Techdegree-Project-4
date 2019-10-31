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
  getRandomPhrase(){
  const randomNum = Math.floor(Math.random() * (5));
  const randomPhrase = new Phrase(game.phrases[randomNum]);
  return randomPhrase;
  }
  startGame(){
    document.querySelector("#overlay").style.display = "none";
    this.activePhrase = this.getRandomPhrase().phrase.phrase;
    const livePhrase = new Phrase(this.activePhrase);
    livePhrase.addPhraseToDisplay();
  };
}
