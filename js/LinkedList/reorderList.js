let LinkedList = require('./linkedList.js');



let reorderList = list => {

  let slow = list.head;
  let fast = list.head;

  while (fast !== null && fast.next !== null && fast.next.next) {
    slow = slow.next;
    fast = fast.next.next;
  }

  let p1 = list.head;
  let p2 = slow.next;
  slow.next = null;
  p2 = reverseList(p2);

  while (p2 !== null) {
    let t1 = p1.next;
    let t2 = p2.next;

    p1.next = p2;
    p2.next = t1;

    p1 = t1;
    p2 = t2;
  }

}

let reverseList = head => {
  if (head == null || head.next == null) {
    return head;
  }

  let prev = head;
  let curr = head.next;

  while (curr !== null) {
    let temp = curr.next;
    curr.next = prev;
    prev = curr;
    curr = temp;
  }

  head.next = null;
  return prev;
}

let list = new LinkedList();

list.add(6);
list.add(5);
list.add(4);
list.add(3);
list.add(2);
list.add(1);
list.print();

reorderList(list);
list.print();