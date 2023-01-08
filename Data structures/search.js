class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class SearchTree {
  constructor() {
    this.root = null;
  }
  isEmpty() {
    return this.root === null;
  }
  insert(value) {
    let node = new Node(value);
    if (this.isEmpty()) {
      this.root = node;
    } else {
      return this.insertNode(this.root, node);
    }
  }
  insertNode(root, node) {
    if (node.value < root.left) {
      if (root.left === null) {
        root.left = node;
      } else {
        return this.insertNode(root.left, node);
      }
    } else {
      if (root.right === null) {
        root.right = node;
      } else {
        return this.insertNode(root.right, node);
      }
    }
  }
  min(root) {
    if (!root.left) {
      return root.value;
    } else {
      return this.min(root.left);
    }
  }
  max(root) {
    if (!root.right) {
      return root.value;
    } else {
      return this.max(root.right);
    }
  }
  search(value) {
    if (this.isEmpty()) {
      return false;
    } else {
      return this.searchValue(this.root, value);
    }
  }
  searchValue(root, value) {
    if (value === root.value) {
      return true;
    } else if (value < root.value) {
      return this.searchValue(root.left, value);
    } else {
      return this.searchValue(root.right, value);
    }
  }
  preOrder(root) {
    if (root) {
      console.log(root.value);
      this.preOrder(root.left);
      this.preOrder(root.right);
    }
  }
  inOrder(root) {
    if (root) {
      this.inOrder(root.left);
      console.log(root.value);
      this.inOrder(root.right);
    }
  }
  postOrder(root) {
    if (root) {
      this.postOrder(root.left);
      this.postOrder(root.right);
      console.log(root.value);
    }
  }
}

const list = new SearchTree();
list.insert(10);
list.insert(11);
list.insert(50);
list.insert(17);
list.insert(12);
list.insert(28);
list.insert(61);

console.log(list.search(10));
// list.postOrder(list.root);
console.log(list.min(list.root))
console.log(list.max(list.root))
