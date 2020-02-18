// Given an input string, reverse the string word by word. A word is defined as a sequence of non-space characters.
// The input string does not contain leading or trailing spaces and the words are always separated by a single space.

let reverseWords01 = (str) => {
  return str.split(' ').map(el => el.split('').reverse().join('')).join(' ');
}

let reverseWords02 = (str, index = 0, sol = '') => {
  if (index >= str.length) return sol.trim();
  let temp = [];
  while (str[index] != ' ' && index < str.length) {
    temp.push(str[index]);
    index++;
  }
  let rWord = '';
  while (temp.length > 0) rWord += temp.pop();
  return reverseWords02(str, index + 1, sol + rWord + ' ');
}

let reverseWords03 = str => {
  return str.split(' ').reverse().join(' ');
}

let reverseWords04 = (str = str.split('')) => {
  if (str.length == 0) return '';
  let isWord = true;
  let word = '';
  let i = 0;
  while (isWord) {
    word += str[i];
    i++;
    if (str[i] == ' ' || i == str.length) isWord = false;
  }
  return reverseWords04(str.slice(i + 1)) + ' ' + word;
}

//reverse words in-place

let reverse = (arr, i1, i2) => {
  while (i1 < i2) {
    [arr[i1], arr[i2]] = [arr[i2], arr[i1]];
    i1++;
    i2--;
  }
}

let reverseWords05 = arr => {
  for (let i = 0, s = 0; i <= arr.length; i++) {
    if (arr[i] == ' ' || i == arr.length) {
      reverse(arr, s, i - 1);
      s = i + 1;
    }
  }
  reverse(arr, 0, arr.length - 1);
}

let str = 'the sky is blue'.split('');
reverseWords05(str);
console.log(str);