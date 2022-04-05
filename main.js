'use strict'
const canvas = document.getElementById('board')
const ctx = canvas.getContext('2d')
const playButton = document.querySelector('.play-button')
const exitButton = document.querySelector('.exit-button')

// Calculate size of canvas from constants.
ctx.canvas.width = COLS * BLOCK_SIZE
ctx.canvas.height = ROWS * BLOCK_SIZE

// Scale blocks
ctx.scale(BLOCK_SIZE, BLOCK_SIZE)
let board = new Board(ctx)

function play() {
  //add .hidden class to play button
  playButton.classList.add('hidden')
  //remove .hidden class from restart button
  exitButton.classList.remove('hidden')
  board.reset()
  let piece = new Piece(ctx)
  piece.draw()
  board.piece = piece
  fall()
  // create addEventListener for keydown using const KEY
  document.addEventListener('keydown', event => {
    console.log(event.keyCode) // log keyCode to console
    board.piece.clear()
    if (event.keyCode === KEY.LEFT) {
      board.piece.move(-1, 0)
      if (!board.isValidPosition(board.piece)) {
        board.piece.move(1, 0)
      }
    } else if (event.keyCode === KEY.RIGHT) {
      board.piece.move(1, 0)
      if (!board.isValidPosition(board.piece)) {
        board.piece.move(-1, 0)
      }
    } else if (event.keyCode === KEY.DOWN) {
      board.piece.move(0, 1)
      if (!board.isValidPosition(board.piece)) {
        board.piece.move(0, -1)
      }
    } else if (event.keyCode === KEY.UP) {
      board.piece.rotate()
      if (!board.isValidPosition(board.piece)) {
        board.piece.rotate(true)
      }
    }
    board.piece.draw()
  })
}

//the piece needs to fall down every second or so (1000ms)
function fall() {
  board.piece.clear()
  board.piece.move(0, 1)
  if (!board.isValidPosition(board.piece)) {
    board.piece.move(0, -1)
    board.piece.draw()
    board.addPiece(board.piece)
    board.clearFullRows(ctx)
    board.piece = new Piece(ctx)
    if (!board.isValidPosition(board.piece)) {
      alert('Game over!')
      return
    }
  }
  board.piece.draw()
  setTimeout(fall, 1000)
}

function exit() {
  //reset board
  board.reset()
  //remove .hidden class from play button
  playButton.classList.remove('hidden')
  //add .hidden class to restart button
  exitButton.classList.add('hidden')
  //clear board
  ctx.clearRect(0, 0, canvas.width, canvas.height)
  //clear score
  document.querySelector('.score').innerHTML = 0
  //clear level
  document.querySelector('.level').innerHTML = 0
  board.piece.clear()
}
