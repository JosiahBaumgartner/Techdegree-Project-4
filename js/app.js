/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * app.js */
let game

// Event listener for start button, wipes all previous phrase li (if any), resets all keyboard keys and lives and starts a new game
document.querySelector("#btn__reset").addEventListener("click", () => {
  document.querySelector("#phrase").querySelector("ul").innerHTML = "";
  document.querySelectorAll(".key").forEach((key) => {
    key.classList.remove("chosen", "wrong")
    key.disabled = false;
  });
  document.querySelectorAll(".tries").forEach((life) => life.innerHTML = '<img src="images/pika-happy.png" alt="Happy Pikachu" height="60" width="60">');
  game = new Game();
  game.startGame();
});

document.addEventListener("click", () => {
  if(event.target.className === "key" ){
    game.handleInteraction(event.target);
  }
});


// Extra Credit keyboard interaction.
// document.addEventListener("keyup", () => {
//   if(event.keyCode > 64 && event.keyCode < 91){
//     game.handleInteraction(event.code.slice(3,4).toLowerCase());
//   }
// });
