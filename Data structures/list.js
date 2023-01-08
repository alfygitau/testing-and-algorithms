class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.size = 0;
  }
  getSize() {
    return this.size;
  }
  isEmpty() {
    return this.size === 0;
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
  remove(value) {
    if (this.isEmpty()) {
      return null;
    } else if (this.size === 1) {
      this.head = null;
      this.tail = null;
      this.size--;
    } else if (this.tail.data === value) {
      let cur = this.head;
      while (cur.next !== this.tail) {
        cur = cur.next;
      }
      cur.next = null;
      this.tail = cur;
      this.size--;
    } else {
      let cur = this.head;
      while (cur.next.data !== value) {
        cur = cur.next;
      }
      cur.next = cur.next.next;
      this.size--;
    }
  }
  toArray() {
    let cur = this.head;
    let output = [];
    while (cur) {
      output.push(cur.data);
      cur = cur.next;
    }
    return output;
  }
}

let li = new LinkedList();
li.append(10);
li.append(20);
li.append(30);
li.append(40);
li.remove(30);
li.prepend(5);
li.remove(10);
console.log(li.toArray());
