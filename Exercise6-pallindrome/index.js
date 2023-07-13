// function isValidDate(date){
//     const dateRegex = /^(?:(?:31(\/|-|\.)(?:0?[13578]|1[02]))\1|(?:(?:29|30)(\/|-|\.)(?:0?[13-9]|1[0-2])\2))(?:(?:1[6-9]|[2-9]\d)?\d{2})$|^(?:29(\/|-|\.)0?2\3(?:(?:(?:1[6-9]|[2-9]\d)?(?:0[48]|[2468][048]|[13579][26])|(?:(?:16|[2468][048]|[3579][26])00))))$|^(?:0?[1-9]|1\d|2[0-8])(\/|-|\.)(?:(?:0?[1-9])|(?:1[0-2]))\4(?:(?:1[6-9]|[2-9]\d)?\d{2})$/;
//     return dateRegex.test(date)
// }


// function isPalindrome(date){

//     let dateArray = date.split('')
//     let reversedArray = dateArray.slice().reverse()
//     dateArray = dateArray.filter((num)=>{return num !== '/';})
//     reversedArray = reversedArray.filter((num)=>{return num !== '/';})
//     // console.log(dateArray)
//     // console.log(reversedArray)
//     if(dateArray.join('') === reversedArray.join('')){
//         console.log('A palindrome!')
//        }
// }

function isPalindrome(string) {
  const cleanedString = string.replace(/[\/\s\p{P}]/gu, ''); 

  for (let i = 0; i < Math.floor(cleanedString.length / 2); i++) {
    if (cleanedString[i] !== cleanedString[cleanedString.length - 1 - i]) {
      return console.log("It's not a palindrome.");
    }
  }

  return console.log("It's a palindrome!");
}


function isDatePalindrome(string) {
  const cleanedString = string.replace(/[\/\s\p{P}]/gu, '');
  
    for (let i = 0; i < Math.floor(cleanedString.length / 2); i++) {
      if (cleanedString[i] !== cleanedString[cleanedString.length - 1 - i]) {
        return false;
      }
    }
  
    return true;
  }

function nextDatePalindromes(count){
    let date = new Date();
    let palindromesFound = 0;
    const palindromeArray = [];

    while(palindromesFound < count) {
        date.setDate(date.getDate() + 1);
        const formattedDate = date.toLocaleDateString('en-GB', { day: '2-digit', month: '2-digit', year: 'numeric' });
        // console.log('1')

        if(isDatePalindrome(formattedDate)){
            palindromeArray.push(formattedDate);
            palindromesFound++;
        }
    }
    console.log(palindromeArray)
}

// console.log(formattedDate);

// isPalindrome(formattedDate)
nextDatePalindromes(5)
isPalindrome('kayak')