var userGuess = document.getElementById('userGuess');
let displayGuessResult = document.getElementById('highOrLow');
let submitBtn = document.getElementById('submitBtn');
let previousGuesses = document.getElementById('guessedNumbers')

submitBtn.addEventListener('click', userGuessCheck)

let generateRandomNumber = () => {
    let minRange = 1;
    let maxRange = 100;
  
    let min = Math.ceil(minRange);
    let max = Math.floor(maxRange);
    return Math.floor(Math.random() * (max - min + 1) + min);
  };

  let randomNumber = generateRandomNumber();

let userGuessCheck = () => {};


  











  console.log(randomNumber);