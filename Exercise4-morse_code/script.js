function encode(string) {
//convert to uppercase to prevent issues with key/value search
function getLatinCharacterList(string){
    return string.toUpperCase().split("");
}

function translateLatinCharacters(char){
    const latinToMorse = {
        'A':'.-',
        'B':'-...',
        'C':'-.-.',
        'D':'-..',
        'E':'.',
        'F':'..-.',
        'G':'--.',
        'H':'....',
        'I':'..',
        'J':'.---',
        'K':'-.-',
        'L':'.-..',
        'M':'--',
        'N':'-.',
        'O':'---',
        'P':'.--.',
        'Q':'--.-',
        'R':'.-.',
        'S':'...',
        'T':'-',
        'U':'..-',
        'V':'...-',
        'W':'.--',
        'X':'-..-',
        'Y':'-.--',
        'Z':'--..',
        // added grammar to morse code dictionary
        ',':'--..--',
        '.':'.-.-.-',
        ' ':'/'
    }

    return latinToMorse[char];
}

const stringArray = getLatinCharacterList(string)

// map method iterates through the array stringArray and uses the translateLatinCharacters function to
// output an array of the transformed characters from stringArray
const morseCodes = stringArray.map(translateLatinCharacters)


//use join method to create a string with spaces between the items from stringArray
return morseCodes.join(" ");

}

encode("Hello, World")
console.log(encode("Hello, World"));

function decode(morseString){

    function getMorseCharacterList(morseString){
        return morseString.split(/[\/ ]/);
    }

    function translateMorseCharacters(char){
    const morseToLatin = {
        '-': "T",
        '--': "M",
        '---': "O",
        '--.': "G",
        '--.-': "Q",
        '--..': "Z",
        '-.': "N",
        '-.-': "K",
        '-.--': "Y",
        '-.-.': "C",
        '-..': "D",
        '-..-': "X",
        '-...': "B",
        '.': "E",
        '.-': "A",
        '.--': "W",
        '.---': "J",
        '.--.': "P",
        '.-.': "R",
        '.-..': "L",
        '..': "I",
        '..-': "U",
        '..-.': "F",
        '...': "S",
        '...-': "V",
        '....': "H",
        //added grammar to morse code dictionary
        '--..--':',',
        '.-.-.-':'.',
        '/':' '
      }
      return morseToLatin[char];
    }
    const morseArray = getMorseCharacterList(morseString);
    const latinCode = morseArray.map(translateMorseCharacters)

    return latinCode.join("");
}

console.log(decode('.... . .-.. .-.. --- --..-- / .-- --- .-. .-.. -..'));