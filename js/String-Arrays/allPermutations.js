let cache = {};
let count = 0
let findAllPermutations = str => {
  console.log(count++);
  if (str.length == 0) return [str];
  let res = [];
  for (let i = 0; i < str.length; i++) {
    let subStr = str.slice(0, i) + str.slice(i + 1);
    let perms = [];
    if (cache.hasOwnProperty(subStr)) {
      perms = cache[subStr];
    } else {
      perms = findAllPermutations(subStr);
      cache[subStr] = perms;
    }
    let elPerms = perms.reduce((acc, el) => {
      return [...acc, str[i] + el];
    }, [])
    res = [...res, ...elPerms];
  }
  return res;
}


Array.prototype.swap = function (i1, i2) {
  let arr = [...this];
  [arr[i1], arr[i2]] = [arr[i2], arr[i1]];
  return arr;
}

let permute = (str, start = 0) => {
  console.log(count++);
  let arr = [];
  if (typeof str === 'string') {
    arr = str.split('');
  } else {
    arr = str;
  }
  if (start == arr.length - 1) {
    return [arr.join('')];
  }
  let res = [];
  for (let i = start; i < arr.length; i++) {
    perms = permute(arr.swap(start, i), start + 1);
    res = [...res, ...perms];
  }
  return res;
}

console.log(permute('123'));
