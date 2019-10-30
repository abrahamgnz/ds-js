const hash = require("string-hash");

class HashDictionary {
  constructor() {
    this.table = [];
  }

  get(key) {
    return this.table[hash(key)];
  }

  set(key, value) {
    this.table[hash(key)] = value;
  }
}

const dict = new HashDictionary();

dict.set("abe", "hello");

console.log(dict.get("abe"));

dict.set("hackerAbe", "goodbye");

console.log(dict.get("hackerAbe"));
