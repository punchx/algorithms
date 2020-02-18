let isSafe = (x, y, board) => {
  return (x >= 0 && x < board.length &&
    y >= 0 && y < board.length &&
    board[x][y] != 1);
}

let solveRAM = (x, y, board, sol) => {
  if (x == board.length - 1 && y == board.length - 1) return true;

  let nextX = x + 1;
  let nextY = y + 1;
  if (isSafe(nextX, y, board)) {
    sol[nextX][y] = 1;
    if (solveRAM(nextX, y, board, sol)) return true;
    sol[nextX][y] = 0;
  }
  if (isSafe(x, nextY, board)) {
    sol[x][nextY] = 1;
    if (solveRAM(x, nextY, board, sol)) return true;
    sol[x][nextY] = 0;
  }
  return false;
}

let ratAndMaze = board => {
  let sol = [];
  for (let i = 0; i < board.length; i++) {
    sol[i] = [];
    for (let j = 0; j < board.length; j++) {
      sol[i][j] = 0;
    }
  }
  sol[0][0] = 1;
  if (solveRAM(0, 0, board, sol)) return sol;
  console.log('Solution not found!');
  return false;
}

let board = [
  [0, 1, 1, 1],
  [0, 0, 1, 0],
  [1, 0, 0, 1],
  [1, 1, 0, 0]];

console.log(ratAndMaze(board));