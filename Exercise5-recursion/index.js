function sumOne(tableOfNumbers){
    //begins
    let total = 0
    for(let i = 0; i < tableOfNumbers.length; i++){
        total += tableOfNumbers[i]
        console.log(total)
    }
    console.log(total)
    return total
}

let randomTable = [1,2,3,4,5,6,7,8,9,10,11,12]

sumOne(randomTable)