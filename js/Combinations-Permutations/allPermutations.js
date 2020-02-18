let remCh = (str, i) => {
  return str.slice(0, i) + str.slice(i + 1);
}

let res = [];

let permutations = (str, ans = '') => {
  if (str.length == 0) {
    res.push(ans);
    return;
  }

  for (let i = 0; i < str.length; i++) {
    let ch = str[i];
    permutations(remCh(str, i), ans + ch);
  }
  return res;
}

let perms = (str, d = str.length, ans = '') => {
  if (d == 0) {
    console.log(ans);
    return;
  }

  for (let i = 0; i < str.length; i++) {
    let ch = str[i];
    perms(str.slice(i + 1), d - 1, ans + ch);
  }
}

perms('1234', 3);
