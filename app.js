/** @format */

let numberGenerator = Math.floor(Math.random() * 10);

// console.log(numberGenerator);

let Score = 20;

let Highscore = 0;

let msg = document.querySelector(".message");

let num = document.querySelector(".number");

let btn = document.querySelector(".check");

let data = Number(document.querySelector(".guess").value);

let again = document.querySelector(".again");

let score = document.querySelector(".score");

let highscore = document.querySelector(".highscore");

// console.log(typeof data);

function chat(message) {
  msg.textContent = message;
}

function ss(high) {
  // highscore.textContent = high;

  if (high > Highscore) {
    highscore.textContent = high;
    Highscore = high;
  }
}

// function confirm() {
//   let data = Number(document.querySelector(".guess").value);

//   if (score.textContent < highscore.textContent) {
//     data = highscore.textContent;
//   } else if (score.textContent >= highscore.textContent) {
//     highscore.textContent = score;
//   }
// }

function cheq() {
  let data = Number(document.querySelector(".guess").value);

  if (!data) {
    chat("type a number");
    document.body.style.backgroundColor = "black";
    num.textContent = "?";
  } else if (data === numberGenerator) {
    chat("Correct");
    ss(Score);
    num.textContent = numberGenerator;
    document.body.style.backgroundColor = "green";
  } else {
    chat("try again");
    document.body.style.backgroundColor = "red";
    num.textContent = "?";
    Score--;
    score.textContent = Score;
  }
}

function againf() {
  // location.reload();
  Score = 20;
  num.textContent = "?";
  document.body.style.backgroundColor = "blue";
  score.textContent = "20";
}

btn.addEventListener("click", cheq);
again.addEventListener("click", againf);
