// You are given two linked lists representing two non-negative numbers.
// The digits are stored in reverse order and each of their nodes contain a single digit.
// Add the two numbers and return it as a linked list.

// Input: (2 -> 4 -> 3) + (5 -> 6 -> 4)
// Output: 7 -> 0 -> 8


let LinkedList = require('./linkedList.js');

let addNumbers = (list1, list2) => {
  let l1 = list1.head;
  let l2 = list2.head;
  let carry = 0;
  let resList = new LinkedList();
  while (l1 !== null || l2 !== null) {
    let sum = 0;
    if (l1 !== null) {
      sum += l1.value;
      l1 = l1.next;
    }
    if (l2 !== null) {
      sum += l2.value;
      l2 = l2.next;
    }
    if (carry) sum = sum + carry;
    if (sum >= 10) {
      sum = sum - 10;
      carry = 1;
    } else {
      carry = 0;
    }
    resList.append(sum);
  }
  return resList;
}

let l1 = new LinkedList();
l1.add(3)
l1.add(4)
l1.add(2)
l1.print()
let l2 = new LinkedList();
l2.add(8)
l2.add(4)
l2.add(6)
l2.add(5)
l2.print()

addNumbers(l1, l2).print();