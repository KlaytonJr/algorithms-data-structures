class Node {
  constructor(key, value) {
    this.key = key;
    this.value = value;
    this.prev = null;
    this.next = null;
  }
}

class LRUCache {
  constructor(capacity) {
    this.capacity = capacity;
    this.cache = new Map(); // chave -> nó

    // Sentinelas esquerda (mais recente) e direita (menos recente)
    this.left = new Node(0, 0); // cabeça (início)
    this.right = new Node(0, 0); // cauda (fim)
    this.left.next = this.right;
    this.right.prev = this.left;
  }

  // Remove um nó da lista
  _remove(node) {
    const prev = node.prev;
    const next = node.next;
    prev.next = next;
    next.prev = prev;
  }

  // Insere um nó logo após o nó left (início da lista)
  _insert(node) {
    const next = this.left.next;
    this.left.next = node;
    node.prev = this.left;
    node.next = next;
    next.prev = node;
  }

  get(key) {
    if (this.cache.has(key)) {
      const node = this.cache.get(key);
      this._remove(node);
      this._insert(node);
      return node.value;
    }
    return -1;
  }

  put(key, value) {
    if (this.cache.has(key)) {
      this._remove(this.cache.get(key));
    }

    const newNode = new Node(key, value);
    this.cache.set(key, newNode);
    this._insert(newNode);

    if (this.cache.size > this.capacity) {
      // Remove o menos recentemente usado (antes da sentinela right)
      const lru = this.right.prev;
      this._remove(lru);
      this.cache.delete(lru.key);
    }
  }
}

const lru = new LRUCache(2);

lru.put(1, 1);
lru.put(2, 2);
console.log(lru.get(1)); // 1
lru.put(3, 3); // remove chave 2
console.log(lru.get(2)); // -1 (não encontrado)
lru.put(4, 4); // remove chave 1
console.log(lru.get(1)); // -1
console.log(lru.get(3)); // 3
console.log(lru.get(4)); // 4
