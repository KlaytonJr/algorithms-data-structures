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

  middleList() {
    let ahead = this.head;

    while (ahead && ahead.next) {
      ahead = ahead.next.next;
      this.head = this.head.next;
    }

    // return this.head;

    // Criar um array do meio até o final
    let result = [];
    let current = this.head;
    while (current) {
      result.push(current.value);
      current = current.next;
    }

    return result;
  }
}

// Add elelments to the head and tail
const linkedList = new LinkedList();
linkedList.addToHead(6);
linkedList.addToHead(5);
linkedList.addToHead(4);
linkedList.addToHead(3);
linkedList.addToHead(2);
linkedList.addToHead(1);

linkedList.displayForward();

console.log(linkedList.middleList());
