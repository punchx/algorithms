// Rotate an array of n elements by k steps.
// For example, with n = 7 and k = 3, the array [1,2,3,4,5,6,7] is rotated to [5,6,7,1,2,3,4].
// How many different ways do you know to solve this problem?

let arrayRotate01 = (arr, k = k - 1) => {
  let dIndex = arr.length - k;
  return [...arr.slice(dIndex), ...arr.slice(0, dIndex)];
}

let arrayRotate02 = (arr, k = k - 1) => {
  let rArray = [];

  for (let i = 0, j = k; i < arr.length; i++ , j++) {
    if (j >= arr.length) j = 0;
    rArray[i] = arr[j];
  }
  return rArray;
}

//rotate in place time - O(n), space - O(1)

let gcd = (a, b) => {
  if (b == 0)
    return a;
  return gcd(b, a % b);
}

let arrayRotate03 = (arr, k = k - 1) => {
  let rArray = [...arr];
  let len = arr.length - gcd(arr.length, k);

  for (let i = 0, j = k; i < len; i++ , j++) {
    if (j > rArray.length - 1) j = len;
    [rArray[i], rArray[j]] = [rArray[j], rArray[i]];
  }
  return rArray;
}

console.log(arrayRotate03([1, 2, 3, 4, 5, 6, 7], 3));