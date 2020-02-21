let LinkedList = require('./linkedList');

let isCycle = list => {
  let slow = list.head;
  let fast = list.head;

  while (fast !== null && slow !== null) {
    slow = slow.next;
    fast = fast.next.next;
    if (slow == fast) return true;
  }
  return false;
}



let list = new LinkedList();

list.add(4);
list.add(3);
list.add(2);
list.add(1);

let head = list.head;
let curr = list.head;

while (curr.next !== null) {
  curr = curr.next;
}
curr.next = head;

console.log(isCycle(list))
