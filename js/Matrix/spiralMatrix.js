let moveRight = (matrix, pos, steps) => {
  let arr = [];
  for (let j = 0; j < steps; j++) {
    arr.push(matrix[pos.y][pos.x++]);
  }
  return arr;
}

let moveDown = (matrix, pos, steps) => {
  let arr = [];
  for (let i = 0; i < steps; i++) {
    arr.push(matrix[pos.y++][pos.x]);
  }
  return arr;
}

let moveLeft = (matrix, pos, steps) => {
  let arr = [];
  for (let j = 0; j < steps; j++) {
    arr.push(matrix[pos.y][pos.x--]);
  }
  return arr;
}

let moveUp = (matrix, pos, steps) => {
  let arr = [];
  for (let i = 0; i < steps; i++) {
    arr.push(matrix[pos.y--][pos.x]);
  }
  return arr;
}


let spiralMatrix = matrix => {
  let n = matrix[0].length;
  let m = matrix.length;
  let pos = { x: 0, y: 0 }
  let sol = [];
  while (m > 0 && n > 0) {
    if (m == 1) {
      for (let i = 0; i < n; i++) {
        sol.push(matrix[pos.y][pos.x++]);
      }
      break;
    } else if (n == 1) {
      for (let i = 0; i < m; i++) {
        sol.push(matrix[pos.y++][pos.x]);
      }
      break;
    }
    sol = [
      ...sol,
      ...moveRight(matrix, pos, n - 1),
      ...moveDown(matrix, pos, m - 1),
      ...moveLeft(matrix, pos, n - 1),
      ...moveUp(matrix, pos, m - 1)
    ];
    pos.x++;
    pos.y++;
    m = m - 2;
    n = n - 2;
  }
  return sol;
}

let matrix = [
  [1, 2, 3, 4],
  [5, 6, 7, 8],
  [9, 10, 11, 12]
]

console.log(spiralMatrix(matrix));