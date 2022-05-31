
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
        prevGuesses.push(getGuess())
        render()
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

// game.getGuess()
// game.play()


// felt like I had something going then got lost in my own work. Can't figure out why this won't work.