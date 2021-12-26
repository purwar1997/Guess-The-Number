'use strict';

let number,
  score = 20,
  highScore = 0;

const displayNumber = document.querySelector('.number');
const guessedNumber = document.querySelector('.guess');
const displayMessage = document.querySelector('.message');
const displayScore = document.querySelector('.score');
const displayHighscore = document.querySelector('.highscore');

const checkBtn = document.querySelector('.check');
const againBtn = document.querySelector('.again');

let emptyInputField = function () {
  guessedNumber.value = '';
};

let correctNumber = function () {
  number = Math.trunc(Math.random() * 20) + 1;
  console.log(number);
};

let displayInfo = function (element, info) {
  element.textContent = info;
};

let setStyles = function (width, color, bool) {
  displayNumber.style.width = width;
  document.querySelector('body').style.backgroundColor = color;
  checkBtn.disabled = bool;
};

correctNumber();
emptyInputField();

checkBtn.addEventListener('click', function () {
  let guess = guessedNumber.value;
  if (score > 1) {
    if (guess === '') {
      displayInfo(displayMessage, 'No value entered');
    } else if (guess >= 1 && guess <= 20) {
      if (Number(guess) === number) {
        if (score > highScore) {
          highScore = score;
          displayInfo(displayHighscore, highScore);
        }
        displayInfo(displayMessage, 'Correct number guessed');
        displayInfo(displayNumber, guess);
        setStyles('30rem', 'green', true);
      } else {
        score--;
        displayInfo(displayScore, score);
        displayInfo(displayMessage, guess > number ? 'Too high' : 'Too low');
      }
    } else {
      score--;
      displayInfo(displayScore, score);
      displayInfo(displayMessage, 'Enter value between 1 and 20');
    }
  } else {
    score = 0;
    displayInfo(displayScore, score);
    displayInfo(displayMessage, 'Your chances have been over');
  }
});

againBtn.addEventListener('click', function () {
  score = 20;
  correctNumber();
  emptyInputField();
  setStyles('15rem', '#222', false);
  displayInfo(displayMessage, 'Start guessing...');
  displayInfo(displayScore, score);
  displayInfo(displayNumber, '?');
});
