function guessGame(){

    //Generates random whole number between 1 and 100(inclusive)
    function generateRandomNumber(min, max) {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }

    let givenNumber = 22
    // let givenNumber = generateRandomNumber(1,100)

    let userGuess = document.getElementById('UserGuess')

    console.log(generateRandomNumber(1,100))
    console.log(`The hidden number is ${givenNumber}`)
    console.log('You lose');
}

guessGame();