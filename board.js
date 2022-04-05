class Board {
  //reset board when new game starts
  reset() {
    this.grid = this.getEmptyBoard()
  }

  //get matrix filled with zeros
  getEmptyBoard() {
    return Array.from({ length: ROWS }, () => Array(COLS).fill(0))
  }
  //implement isValidPosition function
  isValidPosition(piece) {
    for (let y = 0; y < piece.shape.length; y++) {
      for (let x = 0; x < piece.shape[y].length; x++) {
        if (piece.shape[y][x] !== 0) {
          if (this.grid[y + piece.y] === undefined || this.grid[y + piece.y][x + piece.x] === undefined || this.grid[y + piece.y][x + piece.x] !== 0) {
            return false
          }
        }
      }
    }
    return true
  }
  //implement addPiece function
  addPiece(piece) {
    for (let y = 0; y < piece.shape.length; y++) {
      for (let x = 0; x < piece.shape[y].length; x++) {
        if (piece.shape[y][x] !== 0) {
          this.grid[y + piece.y][x + piece.x] = piece.shape[y][x]
        }
      }
    }
  }
  //implement clearRows function
  clearRows() {
    let rows = 0
    for (let y = ROWS - 1; y >= 0; y--) {
      let isRowFull = true
      for (let x = 0; x < COLS; x++) {
        if (this.grid[y][x] === 0) {
          isRowFull = false
          break
        }
      }
      if (isRowFull) {
        rows++
        this.grid.splice(y, 1)
        this.grid.unshift(Array(COLS).fill(0))
      }
    }
    return rows
  }
  //implement updateScore function
  updateScore(rows) {
    switch (rows) {
      case 1:
        this.score += 40 * (this.level + 1)
        break
      case 2:
        this.score += 100 * (this.level + 1)
        break
      case 3:
        this.score += 300 * (this.level + 1)
        break
      case 4:
        this.score += 1200 * (this.level + 1)
        break
    }
  }
  //implement clearFullRows function
  clearFullRows(ctx) {
    let rows = 0
    for (let y = ROWS - 1; y >= 0; y--) {
      let isRowFull = true
      for (let x = 0; x < COLS; x++) {
        if (board.grid[y][x] === 0) {
          isRowFull = false
          break
        }
      }
      if (isRowFull) {
        rows++
        board.grid.splice(y, 1)
        board.grid.unshift(Array(COLS).fill(0))
      }
    }
    if (rows > 0) {
      board.updateScore(rows)
      board.draw(ctx)
    }
  }

  //implement draw function
  draw(ctx) {
    this.grid.forEach((row, y) => {
      row.forEach((value, x) => {
        if (value > 0) {
          ctx.fillRect(x, y, 1, 1)
        }
      })
    })
  }
}
