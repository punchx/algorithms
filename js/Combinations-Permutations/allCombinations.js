let combinations = (arr, l = 1, sol = '') => {
  if (l == 0) {
    console.log(sol);
    return;
  }
  arr.forEach(el => {
    combinations(arr, l - 1, sol + el);
  });
}

let combWithRepet = (arr, l = arr.length, sol = '', start = 0) => {
  if (l == 0) {
    console.log(sol);
    return;
  }
  for (let i = start; i < arr.length; i++) {
    combWithRepet(arr, l - 1, sol + arr[i], i);
  }
}

combinations([1, 2, 3], 2);
// combWithRepet([1, 2, 3], 2);