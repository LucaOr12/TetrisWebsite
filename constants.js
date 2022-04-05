'use strict'
const COLS = 10
const ROWS = 20
const BLOCK_SIZE = 30

const KEY = {
  LEFT: 37, // left arrow
  RIGHT: 39, // right arrow
  DOWN: 40, // down arrow
  UP: 38, // up arrow
}
Object.freeze(KEY) // freeze object so it can't be changed

const PIECE = [
  {
    shape: [
      [2, 0, 0],
      [2, 2, 2],
      [0, 0, 0],
    ],
    color: 'blue',
  },
  {
    shape: [
      [0, 0, 0, 0],
      [2, 2, 2, 2],
      [0, 0, 0, 0],
      [0, 0, 0, 0],
    ],
    color: 'cyan',
  },
  {
    shape: [
      [0, 2, 2],
      [2, 2, 0],
      [0, 0, 0],
    ],
    color: 'green',
  },
  {
    shape: [
      [0, 0, 2],
      [2, 2, 2],
      [0, 0, 0],
    ],
    color: 'orange',
  },
  {
    shape: [
      [0, 2, 2],
      [0, 2, 2],
      [0, 0, 0],
    ],
    color: 'yellow',
  },
  {
    shape: [
      [0, 2, 0],
      [2, 2, 2],
      [0, 0, 0],
    ],
    color: 'purple',
  },
  {
    shape: [
      [2, 2, 0],
      [0, 2, 2],
      [0, 0, 0],
    ],
    color: 'red',
  },
]
