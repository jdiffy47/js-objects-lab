
const game = {
  title: 'Guess the Number!',
  biggestNum: 100,
  smallestNum: 1,
  secretNum: null,
  prevGuesses: [],
  play: function() {
    this.secretNum = Math.floor(Math.random() * 
      (this.biggestNum - this.smallestNum + 1)) + this.smallestNum
      do {
        getGuess()
        prevGuesses.push(guess)
      } while (guess !== this.secretNum)
  },
  getGuess: function() {
    let guess = ''
    while (guess > this.smallestNum || guess < this.biggestNum) {
      guess = parseInt(
        prompt(`Enter a guess between ${this.smallestNum} and ${this.biggestNum}`)
      )
    }
    return guess
  }
}
game.play()
game.getGuess()


// while (sku !== 'quit') {
//   sku = prompt('Enter SKU or "quit" to exit: ')
//   if (sku in catalog) {
//     let price = catalog[sku]
//     alert(`The price of ${sku} is ${price}`) 
//   } else if (sku !== 'quit') {
//     alert('Invalid SKU - try again')
//   }







// console.log(game)
















// const catalog = {
//   AB4747: 4.50,
//   CD5876: 10.25,
//   DG9856: 15.75
// }

// let sku = ''

// while (sku !== 'quit') {
//   sku = prompt('Enter SKU or "quit" to exit: ')
//   if (sku in catalog) {
//     let price = catalog[sku]
//     alert(`The price of ${sku} is ${price}`) 
//   } else if (sku !== 'quit') {
//     alert('Invalid SKU - try again')
//   }
    

//   }

//   for (let key in game) {
//     console.log(`The value of the ${key} property is ${game[key]}`)
//   }

// game.play = function() {
//   this.secretNum = Math.floor(Math.random() * 
//     (this.biggestNum - this.smallestNum + 1)) + this.smallestNum
// }