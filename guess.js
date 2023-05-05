"use strict";

document.querySelector(".play-game").addEventListener("click", function () {
  document.querySelector(".pick-levels").classList.remove("display-none");
  document.querySelector(".play-game").classList.add("display-none");
});

// const game =() =>{

let chances;
let randomNumber;
let userNumber;
document.querySelector(".easy").addEventListener("click", function () {
  randomNumber = Math.trunc(Math.random() * 10 + 1);

  chances = 5;

  document.querySelector(".pick-levels").classList.add("display-none");
  console.log(randomNumber, "easy");
  document.querySelector(".head").classList.remove("display-none");
  document.querySelector(".title").classList.add("display-none");
  document.querySelector(".guess").classList.remove("display-none");
  document.querySelector(".match").classList.remove("display-none");
  document.querySelector(".message").classList.remove("display-none");
  document.querySelector(".msg-score").classList.remove("display-none");
});

document.querySelector(".match").addEventListener("click", function () {
  console.log("mt", chances);
  userNumber = Number(document.querySelector(".guess").value);
  console.log("click");

  if (!userNumber) {
    document.querySelector(".message").textContent = "No value";
  } else if (userNumber === randomNumber) {
    document.querySelector(".container").classList.add("bg-green");
    document.querySelector(".guess").classList.add("display-none");
    document.querySelector(".match").classList.add("display-none");
    document.querySelector(".message").classList.add("display-none");
    document.querySelector(".msg-score").classList.add("display-none");
    document.querySelector(".win").classList.remove("display-none");
    document.querySelector(".number").textContent = randomNumber;
  } else if (userNumber !== randomNumber) {
    if (chances > 1) {
      chances--;
      document.querySelector(".message").textContent =
        userNumber > randomNumber ? "Guess Lower" : "Guess Higher";
      document.querySelector(".score").textContent = chances;
    } else {
      chances = 0;
      document.querySelector(".score").textContent = "0";
      document.querySelector(".container").classList.add("bg-red");
      document.querySelector(".guess").classList.add("display-none");
      document.querySelector(".match").classList.add("display-none");
      document.querySelector(".message").classList.add("display-none");
      document.querySelector(".msg-score").classList.add("display-none");
      document.querySelector(".lose").classList.remove("display-none");
      document.querySelector(".play-again").classList.remove("display-none");
      document.querySelector(".number").textContent = randomNumber;
    }
  }
});

function checkLevel() {}

document.querySelector(".play-again").addEventListener("click", function () {
  chances = 5;

  document.querySelector(".container").classList.remove("bg-red");
  document.querySelector(".head").classList.add("display-none");
  document.querySelector(".lose").classList.add("display-none");
  document.querySelector(".play-again").classList.add("display-none");
  document.querySelector(".title").classList.remove("display-none");
  document.querySelector(".pick-levels").classList.remove("display-none");
  document.querySelector(".number").textContent = "??";
  document.querySelector(".guess").value = "??";
  document.querySelector(".message").textContent = "Let's Start";
  document.querySelector(".score").textContent = "5";
  // game();
});
