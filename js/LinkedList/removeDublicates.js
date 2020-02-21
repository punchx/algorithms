let LinkedList = require('./linkedList');

let removeDbs = list => {
  let set = new Set();
  let p = list.head;
  while (p !== null) {
    if (!set.has(p.value)) {
      set.add(p.value);
    }
    if (p.next !== null && set.has(p.next.value)) {
      p.next = p.next.next;
      p.next.next = null;
    }
    p = p.next;
  }
}

let removeDuplicates = list => {
  let prev = list.head;
  let curr = list.head.next;

  while (curr !== null) {
    if (curr.value == prev.value) {
      prev.next = curr.next;
      curr = curr.next;
    } else {
      prev = prev.next;
      curr = curr.next;
    }
  }
}

let list = new LinkedList();

list.add('c')
list.add('c')
list.add('b')
list.add('b')
list.add('b')
list.add('a')
list.print()
// removeDbs(list);
removeDuplicates(list);
list.print();