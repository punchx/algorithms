//Solution for Knight Tout problem
//Input: Board size n
//Output: matrix with move number of knight

let boardInit = n => {
  let board = [];
  for (let i = 0; i < n; i++) {
    board[i] = [];
    for (let j = 0; j < n; j++) {
      board[i][j] = null;
    }
  }
  board[0][0] = 0;
  return board;
}

let isSafe = (x, y, board) => {
  return (x >= 0 && x < board.length &&
    y >= 0 && y < board.length &&
    board[x][y] === null);
}

let solveKT = (x, y, mCount, board, moveX, moveY) => {
  if (mCount == board.length ** 2) return true;

  for (let i = 0; i < board.length; i++) {
    let nextX = x + moveX[i];
    let nextY = y + moveY[i];
    if (isSafe(nextX, nextY, board)) {
      board[nextX][nextY] = mCount;
      if (solveKT(nextX, nextY, mCount + 1, board, moveX, moveY)) return true;
      board[nextX][nextY] = null;
    }
  }
  return false;
}

let knightTour = n => {
  let board = boardInit(n);
  let moveX = [2, 1, -1, -2, -2, -1, 1, 2];
  let moveY = [1, 2, 2, 1, -1, -2, -2, -1];
  if (solveKT(0, 0, 1, board, moveX, moveY)) {
    return board;
  } else {
    console.log('Solution not found!');
    return false;
  }
}

console.log(knightTour(8));