class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
    this.prev = null;
  }
}

export class DoublyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
  }

  addToHead(value) {
    const newNode = new Node(value);

    newNode.next = this.head;
    
    if (this.head) {
      this.head.prev = newNode;
    } else {
      this.tail = newNode;
    }

    this.head = newNode;
  }

  addToTail(value) {
    const newNode = new Node(value);

    newNode.prev = this.tail;

    if (this.tail) {
      this.tail.next = newNode;
    } else {
      this.head = newNode;
    }

    this.tail = newNode;
  }

  removeFromHead() {
    if (!this.head) {
      return null;
    }

    const removedNode = this.head;
    this.head = this.head.next;

    if (this.head ) {
      this.head.prev = null;
    } else {
      this.tail = null;
    }

    return removedNode.value;
  }

  removeFromTail() {
    if (!this.tail) {
      return null;
    }

    const removedNode = this.tail;
    this.tail = this.tail.prev;

    if (this.tail) {
      this.tail.next = null;
    } else {
      this.head = null;
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

  displayBackward() {
    let arr = [];
    let currentNode = this.tail;
    while (currentNode) {
      // console.log(currentNode.value);
      arr.push(currentNode.value);
      currentNode = currentNode.prev;
    }

    console.log(arr);
  }
}

// Add elelments to the head and tail
const doublyLinkedList = new DoublyLinkedList();
doublyLinkedList.addToHead(3);
doublyLinkedList.addToHead(2);
doublyLinkedList.addToHead(1);
doublyLinkedList.addToTail(4);
doublyLinkedList.addToTail(5);

doublyLinkedList.displayForward();
doublyLinkedList.displayBackward();

console.log(doublyLinkedList.removeFromHead());
console.log(doublyLinkedList.removeFromTail());

doublyLinkedList.displayForward();
doublyLinkedList.displayBackward();