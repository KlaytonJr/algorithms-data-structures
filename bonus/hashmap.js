class HashMap {
  constructor(size = 100) {
    this.size = size;
    this.buckets = Array.from({ length: size }, () => []);
  }

  _hash(key) {
    const stringKey = typeof key === "string" ? key : JSON.stringify(key);
    let hash = 0;
    for (let i = 0; i < stringKey.length; i++) {
      hash = (hash << 5) - hash + stringKey.charCodeAt(i);
      hash |= 0; // Convert to 32bit integer
    }
    return Math.abs(hash) % this.size;
  }

  put(key, value) {
    const index = this._hash(key);
    const bucket = this.buckets[index];

    for (let i = 0; i < bucket.length; i++) {
      const [k, v] = bucket[i];
      if (this._isEqual(k, key)) {
        bucket[i] = [key, value];
        return;
      }
    }

    bucket.push([key, value]);
  }

  get(key) {
    const index = this._hash(key);
    const bucket = this.buckets[index];

    for (const [k, v] of bucket) {
      if (this._isEqual(k, key)) {
        return v;
      }
    }

    return null;
  }

  remove(key) {
    const index = this._hash(key);
    const bucket = this.buckets[index];

    for (let i = 0; i < bucket.length; i++) {
      const [k, v] = bucket[i];
      if (this._isEqual(k, key)) {
        bucket.splice(i, 1);
        return;
      }
    }
  }

  _isEqual(a, b) {
    return typeof a === "object" && typeof b === "object"
      ? JSON.stringify(a) === JSON.stringify(b)
      : a === b;
  }

  toString() {
    return JSON.stringify(
      this.buckets
        .filter((bucket) => bucket.length > 0)
        .map((bucket) => Object.fromEntries(bucket)),
      null,
      2
    );
  }
}

const hashMap = new HashMap();

hashMap.put("augusto", 30);
hashMap.put("matheus", 25);
hashMap.put(17, ["cachorro", 13]);

console.log(hashMap.toString());

console.log(hashMap.get("augusto")); // 30

hashMap.remove("augusto");

console.log(hashMap.get("augusto")); // null
