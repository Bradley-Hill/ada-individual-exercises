//Global variables
let userGuess = document.getElementById('userGuess');
// let displayGuessResult = document.getElementById('highOrLow');
// let submitBtn = document.getElementById('submitBtn');
// let previousGuesses = document.getElementById('guessedNumbers')
// submitBtn.addEventListener('click', userGuessCheck)

// The game function to be run when the page loads.
function guessGame(){
    let winCondition = false;
    // Generate the random number to be guessed.
    let generateRandomNumber = () => {
        let minRange = 1;
        let maxRange = 100;
      
        let min = Math.ceil(minRange);
        let max = Math.floor(maxRange);
        return Math.floor(Math.random() * (max - min + 1) + min);
      };

    const givenNumber = generateRandomNumber();
    // While loop to be executed until game is won eg. winCondition === true
    while (winCondition === false){
        if(userGuess.value !== undefined && userGuess.value >= 1 && userGuess.value <= 100){
            if(userGuess.value === givenNumber){
                console.log(`Congratulations!You win the game!`)
                winCondition = true;
            }
        } else {
            prompt(`Please enter a number to guess.`);
        }
    }
}

guessGame();