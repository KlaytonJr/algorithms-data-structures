class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
    this.prev = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
  }

  addToHead(value) {
    const newNode = new Node(value);

    newNode.next = this.head;

    if (this.head) {
      this.head.prev = newNode;
    }

    this.head = newNode;
  }

  removeFromHead() {
    if (!this.head) {
      return null;
    }

    const removedNode = this.head;
    this.head = this.head.next;

    if (this.head) {
      this.head.prev = null;
    }

    return removedNode.value;
  }

  displayForward() {
    let arr = [];
    let currentNode = this.head;
    while (currentNode) {
      // console.log(currentNode.value);
      arr.push(currentNode.value);
      currentNode = currentNode.next;
    }

    console.log(arr);
  }

  reverseList() {
    let newList = null;
    let nextNode = null;

    while (this.head) {
      nextNode = this.head.next;
      this.head.next = newList;
      newList = this.head;
      this.head = nextNode;
    }

    this.head = newList;

    return this;
  }
}

// Add elelments to the head and tail
const linkedList = new LinkedList();
linkedList.addToHead(3);
linkedList.addToHead(2);
linkedList.addToHead(1);

linkedList.displayForward();

console.log(linkedList.reverseList());

linkedList.displayForward();