function sumOne(tableOfNumbers){
    //begins
    let total = 0
    for(let i = 0; i < tableOfNumbers.length; i++){
        total += tableOfNumbers[i]
    }
    console.log(total)
    return total
}

function sumTwo(tableOfNumbers,i,total=0){
    //recursion
    if(i >= tableOfNumbers.length){
        console.log(total)
        return total
    }
    total += tableOfNumbers[i]
    sumTwo(tableOfNumbers,i+1,total)
}

function factorialRecursion(numberToFactorise){
    if(numberToFactorise === 0){
        return 1
    }
    console.log(`The factorial is ${numberToFactorise}`)
    const result = numberToFactorise * factorialRecursion(numberToFactorise-1)

    return result
}

let randomTable = [1,2,3,4,5,6,7,8,9,10,11,12]

sumOne(randomTable)
sumTwo(randomTable,0)
let result = factorialRecursion(5)
console.log(result)