

let outPut = document.getElementById("answer");
let submitBtn = document.getElementById("submitValue");
let replayBtn = document.getElementById('replayButton');
let numberOfattempts = document.getElementById("atempts");
let numOFCorrectGuesses = document.getElementById("correctGuess")
let numOFInCorrectGuesses = document.getElementById("incorrectGuess")

let correctGuess = 0;
let incorrectGuess = 0;
let numberOfTrials = [];
let numofIncorrectGuess = 0;


function play() {
  let valueEntered = document.getElementById("displayResult").value;
  randNum = parseInt((Math.random() * 100) + 1)
  console.log(randNum)
 
  if (valueEntered == randNum) {
    outPut.innerHTML = "Congratulations, you guessed it right";
      outPut.style.color = "red";

    numberOfTrials.push(valueEntered)
    correctGuess++
    valueReset()
  }
  else if (valueEntered > randNum && valueEntered < 100) {
    outPut.innerHTML = `Guess was too high! Right guess is: ${randNum}`;
    numberOfTrials.push(valueEntered)
    incorrectGuess++
  }
  else if (valueEntered < randNum && valueEntered > 1) {
    outPut.innerHTML = `Guess was too low! Right guess is: ${randNum}`
    numberOfTrials.push(valueEntered)
    numofIncorrectGuess++
    incorrectGuess++
  }
  else if (isNaN(valueEntered)) {
    outPut.innerHTML = `${valueEntered} is not a number`
    numberOfTrials.push(valueEntered)
    incorrectGuess++
  }
  else if (valueEntered == " " || valueEntered == null) {
    outPut.innerHTML = `Enter a number`

  }
  else if (valueEntered < 1) {
    outPut.innerHTML = "Higher, it has to be between 1 and 100"
    numberOfTrials.push(valueEntered)
  }
  else if (valueEntered > 100) {
    outPut.innerHTML = " Lower, it has to be between 1 and 100"
    numberOfTrials.push(valueEntered);
  }
}

function valueReset() {
  outPut.innerHTML = " "
  document.getElementById("displayResult").value = " "
}


let timer = document.getElementById("timeValue")
let timeSecond = 25;

displayTime(timeSecond);

const timeCountDown = setInterval(() => {
  timeSecond--;
  displayTime(timeSecond);
  if (timeSecond <= 0 || timeSecond < 1) {
    clearInterval(timeCountDown);
    document.getElementById("displayResult").disabled = true;
    document.getElementById("submitValue").disabled = true;

    timeOut()
    valueReset()

  }
}, 1000)

function displayTime(second) {
  const min = Math.floor(second / 60);
  const sec = second % 60;
  timer.innerHTML = `${(min < 10 ? "0" : "")}${min}:${(sec < 10 ? "0" : "")}${sec}`;

}
function timeOut() {
  // document.write("OOPS! TIME OUT")
  // Document.write("Reload the page to continue")

  timer.innerHTML = "TIME OUT"
  finalExp();
}

replayBtn.addEventListener('click', () => {
  location.reload()
})

function finalExp() {
  numOFCorrectGuesses.innerHTML = ` nice number of correct Guess: ${correctGuess}`;
  numOFInCorrectGuesses.innerHTML = `oop! number of incorrect Guess: ${incorrectGuess}`;
  numberOfattempts.innerHTML = `guesses: ${numberOfTrials}`;

}
