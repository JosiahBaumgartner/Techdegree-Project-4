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
      {phrase: "me and the boys"},
      {phrase: "now this is an avengers level threat"}
    ];
    this.activePhrase = null;
  }
  getRandomPhrase(){
  const randomNum = Math.floor(Math.random() * (5));
  return game.phrases[randomNum];
  }
}
