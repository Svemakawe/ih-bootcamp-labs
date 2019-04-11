let hangman;
let hangmanCanvas;

function Hangman() {
  this.words = ['henrique', 'mayumi', 'lucca'];
  this.secretWord = this.getWord();
  this.letters = [];
  this.wrongLetters = [];
  this.guessedLetter = '';
  this.errorsLeft = 10;
}

Hangman.prototype.getWord = function () {
  const randomNum = Math.round(Math.random() * (this.words.length - 1));
  return this.words[randomNum];
};

Hangman.prototype.checkIfLetter = function (keyCode) {
  if (keyCode >= 65 && keyCode <= 90) {
    if (this.letters.indexOf(String.fromCharCode(keyCode)) === -1) {
      this.letters.push(String.fromCharCode(keyCode));
    }
    return true;
  }
  return false;
};

Hangman.prototype.addCorrectLetter = function (key) {
  if (this.guessedLetter.indexOf(key) === -1) {
    for (let i = 0; i < this.secretWord.length; i += 1) {
      if (key === this.secretWord[i].toUpperCase()) {
        this.guessedLetter += key;
      }
    }
  }
};

Hangman.prototype.addWrongLetter = function (key) {
  if (this.wrongLetters.indexOf(key) === -1) {
    this.errorsLeft -= 1;
    this.wrongLetters.push(key);
  }
};

Hangman.prototype.checkClickedLetters = function (key) {
  if (this.secretWord.toUpperCase().indexOf(key) !== -1) {
    this.addCorrectLetter(key);
    return true;
  }
  this.addWrongLetter(key);
  return false;
};

Hangman.prototype.checkGameOver = function () {
  return this.errorsLeft === 0 ? true : false;
};

Hangman.prototype.checkWinner = function () {
  for (let i = 0; i < this.secretWord.length; i += 1) {
    if (this.guessedLetter.indexOf(this.secretWord[i].toUpperCase()) === -1) {
      return false;
    }
  }
  return true;
};

document.getElementById('start-game-button').onclick = function () {
  hangman = new Hangman();
  hangmanCanvas = new HangmanCanvas(hangman.secretWord);
  hangmanCanvas.createBoard();
  hangmanCanvas.drawLines();
};


document.onkeyup = function (e) {
  const shapes = ['head', 'body', 'rightArm', 'leftArm', 'rightLeg', 'leftLeg', 'rightHand', 'leftHand', 'rightFoot', 'leftFoot'];
  const keyCode = hangman.checkIfLetter(e.keyCode)
  if (keyCode) {
    const guessed = hangman.checkClickedLetters(String.fromCharCode(e.keyCode));
    if (guessed) {
      hangmanCanvas.writeCorrectLetter(hangman.guessedLetter);
    } else {
      hangmanCanvas.writeWrongLetter(e.keyCode, hangman.errorsLeft);
      hangmanCanvas.drawHangman(shapes[10 - hangman.errorsLeft]);
    }
    if (hangman.checkWinner()) {
      console.log('ganhou o game!');
      hangmanCanvas.winner();
    }
    if (hangman.checkGameOver()) {
      console.log('perdeu o game!');
      hangmanCanvas.gameOver();
    }
  }
};
