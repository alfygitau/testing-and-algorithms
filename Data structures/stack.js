class Stack {
  constructor() {
    this.stack = [];
    this.size = 0;
  }
  push(value) {
    this.stack.push(value);
    this.size++;
  }
  isEmpty() {
    return this.size === 0;
  }
  getSize() {
    return this.size;
  }
  peek() {
    return this.stack[this.stack.length - 1];
  }
  print() {
    return this.stack.toString();
  }
}

const stack = new Stack();
stack.push(1);
stack.push(2);
stack.push(3);
stack.push(4);
stack.push(5);
stack.push(6);
stack.push(7);
stack.push(8);
console.log(stack.print());
console.log(stack.peek());
console.log(stack.getSize());
