/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Phrase.js */
 class Phrase{
   constructor(phrase){
     this.phrase = phrase;
   }
   addPhraseToDisplay(){
    for (let i = 0; i < this.phrase.length; i++){
      document.querySelector("#phrase").querySelector("ul").appendChild(document.createElement("li"));
      document.querySelector("#phrase").querySelector("ul").childNodes[i].innerText = this.phrase[i];
      if (document.querySelector("#phrase").querySelector("ul").childNodes[i].innerText !== ""){
        document.querySelector("#phrase").querySelector("ul").childNodes[i].classList.add("hide", "letter", this.phrase[i]);
    } else {
      document.querySelector("#phrase").querySelector("ul").childNodes[i].innerText = " ";
      document.querySelector("#phrase").querySelector("ul").childNodes[i].classList.add("space");
    }
    }
  }
};
