Array.prototype.swap = function (i1, i2) {
  [this[i1], this[i2]] = [this[i2], this[i1]];
}

let count = 0;
// let nHorses = (arr, l, start = 0) => {
//   // console.log(count++)
//   if (start == l) {
//     console.log(arr.slice(0, l));
//     return;
//   }
//   for (let i = start; i < arr.length; i++) {
//     arr.swap(start, i);
//     nHorses(arr, l, start + 1);
//     arr.swap(start, i);
//   }
// }

Array.prototype.remove = function (index = 0, seg = 1) {
  let temp = [...this];
  temp.splice(index, seg);
  return temp;
}

let nHorses = (arr, l, index = 0) => {
  if (l == 0) return [];
  let res = [];
  for (let i = 0; i < arr.length; i++) {
    if (index == l - 1) {
      res.push([arr[i]]);
    } else {
      let combs = nHorses(arr.remove(i), l, index + 1);
      res = [...res, ...combs.map(el => [arr[i], ...el])];
    }
  }
  return res;
}

nHorses([1, 2, 3, 4, 5, 6], 3).forEach(el => console.log(el));