class Stack {
  constructor() {
    this.arr = {};
    this.length = 0;
  }

  push(value) {
    this.arr[this.length++] = value;
    return true;
  }

  pop() {
    let res = this.arr[this.length - 1];
    delete this.arr[this.length - 1];
    this.length--;
    return res;
  }

  print() {
    for (let i = 0; i < this.length; i++) {
      console.log(this.arr[i]);
    }
  }
}

let stack = new Stack();

stack.push(0);
stack.push(1);
stack.push(2);
stack.push(3);
stack.push(4);
stack.print()
let removed = stack.pop();
console.log(`removed element is: ${removed}`)
console.log(stack)
stack.print()