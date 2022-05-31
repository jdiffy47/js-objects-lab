
const game = {
  title: 'Guess the Number!',
  biggestNum: 100,
  smallestNum: 1,
  secretNum: null,
  prevGuesses: [],
  render: function() {
    if (this.prevGuesses === this.secretNum) {
      alert(`Congrats! You have guessed the number in ${this.prevGuesses.length} guesses.`)
    } else {
        alert(`Your guess is too ${this.prevGuesses > this.secretNum ? 'high' : 'low'}`)
      }
    },
  play: function() {
    this.secretNum = Math.floor(Math.random() * 
      (this.biggestNum - this.smallestNum + 1)) + this.smallestNum
      do {
        getGuess()
        render()
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