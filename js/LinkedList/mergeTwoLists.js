let LinkedList = require('./linkedList');

let mergeLists = (list1, list2) => {
  let list = new LinkedList();
  list.add(0);
  let p = list.head;
  let p1 = list1.head;
  let p2 = list2.head;

  while (p1 !== null && p2 !== null) {
    if (p1.value < p2.value) {
      p.next = p1;
      p1 = p1.next;
    } else {
      p.next = p2;
      p2 = p2.next;
    }
    p = p.next;
  }

  if (p1 !== null) {
    p.next = p1;
  }

  if (p2 !== null) {
    p.next = p2;
  }
  list.remove();
  return list;

}

let list1 = new LinkedList();
list1.add(5);
list1.add(3);
list1.add(1);
list1.print();
let list2 = new LinkedList();
list2.add(6);
list2.add(4);
list2.add(2);
list2.print();

mergeLists(list1, list2).print();