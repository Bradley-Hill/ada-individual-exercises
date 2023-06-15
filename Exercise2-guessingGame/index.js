const userGuess = document.getElementById('UserGuess')
const previousGuesses = document.getElementById('guessedNumbers')
const outputToUser = document.getElementById('highOrLow')
const buttonGuess = document.getElementById('guessBtn')

buttonGuess.addEventListener('click', e => {outputToUser.innerHTML = `Here is a clue.`})

// function displayClue(){
//     outputToUser.innerHTML = `Here is a clue.`
// }

function guessGame(){

    //Generates random whole number between 1 and 100(inclusive)
    function generateRandomNumber(min, max) {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }

    let givenNumber = 22
    // let givenNumber = generateRandomNumber(1,100)

    console.log(generateRandomNumber(1,100))
    console.log(`The hidden number is ${givenNumber}`)
    console.log('You lose');

}

guessGame();