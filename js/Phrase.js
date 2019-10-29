/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Phrase.js */
 class Phrase{
   constructor(phrase){
     this.phrase = phrase.toLowerCase();
   }
   addPhraseToDisplay(){
    for (let i = 0; i < phrase.phrase.length; i++){
      document.querySelector("#phrase").querySelector("ul").appendChild(document.createElement("li"));
      document.querySelector("#phrase").querySelector("ul").childNodes[i].innerText = phrase.phrase[i];
      if (document.querySelector("#phrase").querySelector("ul").childNodes[i].innerText !== ""){
        document.querySelector("#phrase").querySelector("ul").childNodes[i].classList.add("hide", "letter", phrase.phrase[i]);
    } else {
      document.querySelector("#phrase").querySelector("ul").childNodes[i].innerText = " ";
      document.querySelector("#phrase").querySelector("ul").childNodes[i].classList.add("space");
    }
    }
  }
};
