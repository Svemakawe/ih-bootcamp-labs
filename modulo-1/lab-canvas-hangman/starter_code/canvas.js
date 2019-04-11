
function HangmanCanvas(secretWord) {
  this.myCanvas = document.getElementById('hangman');
  this.ctx = this.myCanvas.getContext('2d');
  this.secretWord = secretWord;
}

HangmanCanvas.prototype.createBoard = function () {
  // clear canvas
  this.ctx.clearRect(0, 0, this.myCanvas.width, this.myCanvas.height);
  // draw base
  this.ctx.beginPath();
  this.ctx.moveTo(150, 600);
  this.ctx.lineTo(225, 650);
  this.ctx.lineTo(75, 650);
  this.ctx.fill();
  this.ctx.closePath();
  // draw base lines
  this.ctx.beginPath();
  this.ctx.moveTo(150, 600);
  this.ctx.lineTo(150, 200);
  this.ctx.lineTo(400, 200);
  this.ctx.lineTo(400, 300);
  this.ctx.stroke();
  this.ctx.closePath();
  
  
};

HangmanCanvas.prototype.drawLines = function () {
  for (let i = 0; i < this.secretWord.length; i += 1) {
    this.ctx.beginPath();
    this.ctx.moveTo(400 + i * 100, 650);
    this.ctx.lineTo(450 + i * 100, 650);
    this.ctx.stroke();
    this.ctx.closePath();
  }
};

HangmanCanvas.prototype.writeCorrectLetter = function (index) {
  console.log('writing correct letter')
};

HangmanCanvas.prototype.writeWrongLetter = function (letter, errorsLeft) {
  console.log('writing wrong letter')
};

HangmanCanvas.prototype.drawHangman = function (shape) {
  switch(shape) {
    case 'head':
    // draw head in canvas
    console.log('drawing head');
    break;
    case 'body':
    // draw body in canvas
    console.log('drawing body');
    break;
    case 'rightArm':
    // draw rightArm in canvas
    console.log('drawing rightArm');
    break;
    case 'leftArm':
    // draw leftArm in canvas
    console.log('drawing leftArm');
    break;
    case 'rightLeg':
    // draw rightLeg in canvas
    console.log('drawing rightLeg');
    break;
    case 'leftLeg':
    // draw leftLeg in canvas
    console.log('drawing leftLeg');
    break;
    case 'rightHand':
    // draw rightHand in canvas
    console.log('drawing rightHand');
    break;
    case 'leftHand':
    // draw leftHand in canvas
    console.log('drawing leftHand');
    break;
    case 'rightFoot':
    // draw rightFoot in canvas
    console.log('drawing rightFoot');
    break;
    case 'leftFoot':
    // draw leftFoot in canvas
    console.log('drawing leftFoot');
    break;
  }
};

HangmanCanvas.prototype.gameOver = function () {

};

HangmanCanvas.prototype.winner = function () {

};
