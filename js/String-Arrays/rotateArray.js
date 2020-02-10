// Rotate an array of n elements to the right by k steps.
// For example, with n = 7 and k = 3, the array [1,2,3,4,5,6,7] is rotated to [5,6,7,1,2,3,4].
// How many different ways do you know to solve this problem?

let arrayRotate01 = (arr, k) => {
  let dIndex = arr.length - k;
  return [...arr.slice(dIndex), ...arr.slice(0, dIndex)];
}

console.log(arrayRotate01([1, 2, 3, 4, 5, 6, 7], 5));