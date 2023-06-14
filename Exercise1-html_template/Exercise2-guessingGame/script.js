let userGuess = document.getElementById('userGuess');
let displayGuessResult = document.getElementById('highOrLow');
let submitBtn = document.getElementById('submitBtn');



let generateRandomNumber = () => {
    let minRange = 1;
    let maxRange = 100;
  
    let min = Math.ceil(minRange);
    let max = Math.floor(maxRange);
    return Math.floor(Math.random() * (max - min + 1) + min);
  };

let randomNumber = generateRandomNumber();
  
let userGuessCheck = () => {
    let guess = parseInt(userGuess.value);

    if (guess < randomNumber){
        displayGuessResult.innerText = `You guessed ${guess}, 
        that is too low! Guess again...`;
    } else if (guess > randomNumber) {
        displayGuessResult.innerText = `You guessed ${guess}, 
        that is too high! Guess again...`;
    } else {
        displayGuessResult.innerText = `You guessed ${guess}, 
        that is the same as ${randomNumber}, CORRECT!`;
    }
}


submitBtn.addEventListener('click', userGuessCheck)

  console.log(randomNumber);