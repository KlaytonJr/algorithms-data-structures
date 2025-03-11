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

  createCycle(pos) {
    if (pos < 0) return; // Se pos for -1, não cria ciclo

    let current = this.head;
    let targetNode = null;
    let index = 0;

    while (current.next) {
      if (index === pos) {
        targetNode = current; // Guarda o nó onde o ciclo deve começar
      }
      current = current.next;
      index++;
    }

    if (targetNode) {
      current.next = targetNode; // Conecta o último nó ao nó na posição "pos"
    }
  }

  hasCycle() {
    let slow = this.head;
    let fast = this.head;

    while (fast && fast.next) {
      slow = slow.next;
      fast = fast.next.next;

      if (slow == fast) {
        return true;
      }
    }
    return false;
  }
}

// Add elelments to the head and tail
const linkedList = new LinkedList();

linkedList.addToHead(-4);
linkedList.addToHead(0);
linkedList.addToHead(2);
linkedList.addToHead(3);

linkedList.createCycle(1);

console.log(linkedList.hasCycle());
