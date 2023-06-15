const userGuessInput = document.getElementById('userGuess')

function inputGivenNumber(){
    let givenNumber = userGuessInput.value
    return givenNumber
}

function guessGame(){
    //Generates random whole number between 1 and 100(inclusive)
    function generateRandomNumber(min, max) {
        min = Math.ceil(min);
        max = Math.floor(max);
        let randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;
        return randomNumber;
    }


    // Verify if the givenNumber is a match
    function didIWin(userGuess){
        console.log(userGuess)
        console.log(randomNumber)
    }

    let randomNumber = generateRandomNumber(1,100)
    console.log(`The hidden number is ${randomNumber}`)

    console.log(inputGivenNumber())
    let userGuess = inputGivenNumber();
    didIWin(userGuess);

}

guessGame()