class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

module.exports = class LinkedList {
  constructor() {
    this.head = null;
  }

  add(value) {
    let newNode = new Node(value);
    [this.head, newNode.next] = [newNode, this.head];
  }

  addAfter(node, value) {
    let newNode = new Node(value);
    [node.next, newNode.next] = [newNode, node.next];
  }

  append(value) {
    if (this.head === null) {
      this.head = new Node(value);
      return true;
    }
    let last = this.head;
    while (last.next != null) {
      last = last.next;
    }
    this.addAfter(last, value);
    return true;
  }

  remove(key) {
    let res = false;
    if (this.head !== null) {
      if (key === undefined) {
        res = this.head;
        this.head = this.head.next;
        return res;
      }
      let curr = this.head;
      while (curr.next != null) {
        if (curr.next.value == key) {
          res = curr.next;
          curr.next = curr.next.next;
          res.next = null;
          return res;
        }
        curr = curr.next;
      }
    }
    return false;
  }

  print(n) {
    let curr = this.head;
    let res = '';
    let i = 0;
    let nnd = false;
    if (n == undefined) {
      n = 1;
      nnd = true;
    }
    while (curr != null && i < n) {
      res += ' -> ' + curr.value;
      curr = curr.next;
      if (nnd) n++;
      i++;
    }
    console.log(res.slice(4));
  }
}
