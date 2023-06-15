const userGuessInput = document.getElementById('userGuess')
const userButton = document.getElementById('guessBtn')

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
function didIWin(givenNumber){
    if(givenNumber < randomNumber){
        console.log(`Too small!`)
    } else if (givenNumber > randomNumber){
        console.log(`Too big!`)
    } else {
        console.log(`Correct!`)
    }
}

let randomNumber = generateRandomNumber(1,100)
console.log(`The hidden number is ${randomNumber}`)

//Event listener for checking if the givenNumber is correct
userButton.addEventListener('click', function () {
    let givenNumber = inputGivenNumber();
    didIWin(givenNumber);
  });

function guessGame(){
    
    let givenNumber = inputGivenNumber();
    didIWin(givenNumber)



}



guessGame()