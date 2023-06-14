let userGuess = document.getElementById('userGuess');
let displayGuessResult = document.getElementById('highOrLow');
let submitBtn = document.getElementById('submitBtn');


let randomNumber = () => {
    let minRange = 1
    let maxRange = 100

    var min = Math.ceil(minRange);
    var max = Math.floor(maxRange);
    return Math.floor(Math.random() * (max - min + 1) + min);
  }
  
let userGuessCheck = () => {
    if (userGuess < randomNumber){
        displayGuessResult.innerText = `You guessed ${userGuess}, that is too low!`;
    } else if (userGuess > randomNumber) {
        displayGuessResult.innerText = `You guessed ${userGuess}, that is too high!`;
    } else {
        displayGuessResult.innerText = `You guessed ${userGuess}, 
        that is the same as ${randomNumber}, CORRECT!`;
    }
}

submitBtn.addEventListener('click', userGuessCheck)

  console.log(randomNumber());