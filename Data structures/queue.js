class Queue {
  constructor() {
    this.items = {};
    this.front = 0;
    this.rear = 0;
  }
  getSize() {
    return this.rear - this.front;
  }
  isEmpty() {
    return this.rear - this.front === 0;
  }
  enqueue(element) {
    this.items[this.rear] = element;
    this.rear++;
  }
  dequeue() {
    let item = this.items[this.front];
    delete this.items[this.front];
    this.front++;
    return item;
  }
  print() {
    return this.items;
  }
  top() {
    return this.items[this.front];
  }
  last() {
    return this.items[this.rear - 1];
  }
}

const queue1 = new Queue();
queue1.enqueue(10);
queue1.enqueue(20);
queue1.enqueue(30);
queue1.enqueue(40);
console.log(queue1.print());
console.log(queue1.dequeue());
console.log(queue1.print());
