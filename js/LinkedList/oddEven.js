let LinkedList = require('./linkedList');

let oddEven = list => {
  let p1 = list.head;
  let p2 = list.head.next;
  let connect = list.head.next;

  while (p1 !== null && p2 !== null) {
    if (p2.next == null) break;
    p1.next = p2.next;
    p1 = p1.next;

    p2.next = p1.next;
    p2 = p2.next;
  }
  p1.next = connect;
}

let list = new LinkedList();
list.add(9)
list.add(8)
list.add(7)
list.add(6)
list.add(5)
list.add(4)
list.add(3)
list.add(2)
list.add(1)
list.print();
oddEven(list);
list.print();