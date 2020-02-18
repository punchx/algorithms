let nDices = (dices, lSides) => {
  let sides = [];
  for (let i = 1; i <= lSides; i++) {
    sides[i - 1] = i;
  }
  return combsWithRepetitions([], sides, 0, dices, 0);
}

let res = []
let count = 1;

let combsWithRepetitions = (chosen, arr, index, r, start) => {
  if (r == index) {
    let comb = '';
    for (let i = 0; i < r; i++) {
      comb += arr[chosen[i]];
    }
    res.push(comb);
    return;
  }

  for (let i = start; i < arr.length; i++) {
    chosen[index] = i;
    combsWithRepetitions(chosen, arr, index + 1, r, i);
  }
  return res;
}

console.log(nDices(3, 3));