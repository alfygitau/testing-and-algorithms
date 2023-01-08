class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.size = 0;
  }
  isEmpty() {
    return this.size === 0;
  }
  getSize() {
    return this.size;
  }
  prepend(value) {
    let node = new Node(value);
    if (this.isEmpty()) {
      this.head = node;
      this.tail = node;
    } else {
      node.next = this.head;
      this.head = node;
    }
    this.size++;
  }
  append(value) {
    let node = new Node(value);
    if (this.isEmpty()) {
      this.head = node;
      this.tail = node;
    } else {
      this.tail.next = node;
      this.tail = node;
    }
    this.size++;
  }
  removeFromEnd() {
    if (this.isEmpty()) {
      return null;
    } else {
      let cur = this.head;
      while (cur.next !== this.tail) {
        cur = cur.next;
      }
      cur.next = null;
      this.tail = cur;
      this.size--;
    }
    if (this.size === 1) {
      this.head = null;
      this.tail = null;
      this.size--;
    }
  }
  removeFromFront() {
    if (this.isEmpty()) {
      return null;
    }
    if (this.size === 1) {
      this.head = null;
      this.tail = null;
      this.size--;
    } else {
      this.head = this.head.next;
      this.size--;
    }
  }
  reverse() {
    let prev = null;
    let curr = this.head;
    while (curr) {
      let next = curr.next;
      curr.next = prev;
      prev = curr;
      curr = next;
    }
    this.head = prev;
  }
  toArray() {
    if (this.size === 0) {
      console.log("list is empty");
    }
    let cur = this.head;
    let result = [];
    while (cur) {
      result.push(cur.value);
      cur = cur.next;
    }
    return result;
  }
}

const list = new LinkedList();
list.prepend(1);
list.prepend(2);
list.prepend(3);
console.log(list.toArray());
console.log(list.getSize());
list.append(4);
list.append(5);
list.append(6);
list.removeFromEnd();
console.log(list.toArray());
console.log(list.getSize());
list.removeFromFront();
console.log(list.toArray());
console.log(list.getSize());
list.reverse();
console.log(list.toArray());
