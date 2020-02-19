// Given a m * n matrix, if an element is 0, set its entire row and column to 0.
// Do it in place.

let helperSTZ = (matrix, row, column) => {
  for (let i = 0; i < matrix.length; i++) {
    matrix[i][column] = 0;
  }
  for (let j = 0; j < matrix[row].length; j++) {
    matrix[row][j] = 0;
  }
}

let setToZero = matrix => {
  let targets = [];
  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[i].length; j++) {
      if (matrix[i][j] == 0) {
        targets.push([i, j]);
      }
    }
  }
  targets.forEach(el => {
    helperSTZ(matrix, ...el);
  })
}

// IN-Place solution

let firstRowHasZero = matrix => {
  for (let j = 0; j < matrix[0].length; j++) {
    if (matrix[0][j] == 0) return true;
  }
}

let firstColHasZero = matrix => {
  for (let i = 0; i < matrix.length; i++) {
    if (matrix[i][0] == 0) return true;
  }
}

let firstRowToZero = matrix => {
  for (let j = 0; j < matrix[0].length; j++) {
    matrix[0][j] = 0;
  }
}

let firstColToZero = matrix => {
  for (let i = 0; i < matrix.length; i++) {
    matrix[i][0] = 0;
  }
}

let matrixToZeroIP = matrix => {
  let firstRow = firstRowHasZero(matrix) || false;
  let firstCol = firstColHasZero(matrix) || false;

  //Set first record of current row and coll to zero

  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[0].length; j++) {
      if (matrix[i][j] == 0) {
        matrix[i][0] = 0;
        matrix[0][j] = 0;
      }
    }
  }

  //Check if the first record of current row or coll is zero set record to zero

  for (let i = 1; i < matrix.length; i++) {
    for (let j = 1; j < matrix[0].length; j++) {
      if (matrix[i][0] == 0 || matrix[0][j] == 0) {
        matrix[i][j] = 0;
      }
    }
  }

  if (firstRow) firstRowToZero(matrix);
  if (firstCol) firstColToZero(matrix);
}


let matrix = [
  [1, 0, 1],
  [1, 1, 1],
  [1, 0, 1]
];

let matrix2 = [
  [1, 0, 1],
  [1, 1, 1],
  [1, 1, 1]
];

matrixToZeroIP(matrix2);

console.log(matrix2)