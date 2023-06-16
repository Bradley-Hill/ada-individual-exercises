const userGuessInput = document.getElementById('userGuess')
const userButton = document.getElementById('guessBtn')
const indicatorDisplay = document.getElementById('highOrLow')

//Generates random whole number between 1 and 100(inclusive)
function generateRandomNumber(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    let randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;
    return randomNumber;
}

function inputGivenNumber(){
    let givenNumber = userGuessInput.value
    return givenNumber
}

// Verify if the givenNumber is a match
function didIWin(givenNumber, randomNumber){
    if(givenNumber < randomNumber){
        console.log(`Too small!`)
        indicatorDisplay.innerHTML = `${givenNumber} is too small! Try again`
        return false
    } else if (givenNumber > randomNumber){
        console.log(`Too big!`)
        indicatorDisplay.innerHTML = `${givenNumber} is too big! Try again`
        return false
    } else {
        console.log(`Correct!`)
        indicatorDisplay.innerHTML = `${givenNumber} is correct,YOU WIN!!!`
        return true
    }
}

let randomNumber = generateRandomNumber(1,50)
//Console log so I can cheat the game.
console.log(`The hidden number is ${randomNumber}`)

//Event listener for checking if the givenNumber is correct
userButton.addEventListener('click', function () {
    let givenNumber = inputGivenNumber();
    let gameOver = didIWin(givenNumber, randomNumber);
    didIWin(givenNumber, randomNumber);
    if (gameOver) {
        userButton.disabled = true;
        indicatorDisplay.innerHTML = `${givenNumber} is correct, well done! You win! GAME OVER`;
        if (randomNumber === givenNumber) {
        userButton.disabled = true;
    }
}
});