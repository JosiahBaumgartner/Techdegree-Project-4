/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Phrase.js */
 class Phrase{
   constructor(phrase){
     this.phrase = phrase;
   };

   /**
   * Display phrase on game board
   */
   addPhraseToDisplay(){
    const ul = document.querySelector("#phrase").querySelector("ul")
    for (let i = 0; i < this.phrase.phrase.length; i++){
      ul.appendChild(document.createElement("li"));
      ul.childNodes[i].innerText = this.phrase.phrase[i];
      if (ul.childNodes[i].innerText !== ""){
        ul.childNodes[i].classList.add("hide", "letter", this.phrase.phrase[i]);
    } else {
      ul.childNodes[i].innerText = " ";
      ul.childNodes[i].classList.add("space");
      }
    }
  };

  /**
  * Checks if passed letter is in phrase
  * @param (string) letter - Letter to check
  */
  checkLetter(letter){
    return this.phrase.phrase.includes(letter);
  };

  /**
  * Displays passed letter on screen after a match is found
  * @param (string) letter - Letter to display
  */
  showMatchedLetter(letter){
    document.querySelectorAll("."+letter).forEach((li) => {
      li.classList.remove("hide");
      li.classList.add("show");
    });
  };

};
