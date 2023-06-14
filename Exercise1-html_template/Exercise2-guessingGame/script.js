let randomNumber = () => {
    let minRange = 1
    let maxRange = 100

    var min = Math.ceil(minRange);
    var max = Math.floor(maxRange);
    return Math.floor(Math.random() * (max - min + 1) + min);
  }
  
  console.log(randomNumber());