class Piece {
  constructor(ctx) {
    this.ctx = ctx
    var ind = PIECE[Math.floor(Math.random() * PIECE.length)]
    //generate random piece from the pieces array
    this.shape = ind.shape
    this.color = ind.color
    // Starting position.
    this.x = 3
    this.y = 0
  }

  draw() {
    this.ctx.fillStyle = this.color
    this.shape.forEach((row, y) => {
      row.forEach((value, x) => {
        if (value > 0) {
          this.ctx.fillRect(this.x + x, this.y + y, 1, 1)
        }
      })
    })
  }
  //implement move function
  move(deltaX, deltaY) {
    this.x += deltaX
    this.y += deltaY
  }
  //implement rotate function
  rotate(isClockwise) {
    let offset = 1
    if (isClockwise) {
      offset = -1
    }
    for (let y = 0; y < this.shape.length; y++) {
      for (let x = 0; x < y; x++) {
        ;[this.shape[x][y], this.shape[y][x]] = [this.shape[y][x], this.shape[x][y]]
      }
    }
    this.shape.forEach(row => row.reverse())
  }
  //implement clear function
  clear() {
    this.shape.forEach((row, y) => {
      row.forEach((value, x) => {
        if (value > 0) {
          this.ctx.clearRect(this.x + x, this.y + y, 1, 1)
        }
      })
    })
  }
}
