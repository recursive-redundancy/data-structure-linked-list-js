/**
 * Extremely simple script to test for expected values in NodeJS
 */

const LinkedList = require('../linked-list.js');

console.log("TEST BEGIN");
console.log("----------");
console.log("let list = new LinkedList(1, 2, 3)");
let list = new LinkedList(1, 2, 3);
console.log("list.add(4)");
list.add(4); // undefined
console.log("list.add(5)");
list.add(5); // undefined
console.log("----------");
console.log("list.has(1)")
console.log("expect: true");
console.log("result: " + list.has(1));
console.log("----------");
console.log("list.has(4)")
console.log("expect: true");
console.log("result: " + list.has(4));
console.log("----------");
console.log("list.has(6)")
console.log("expect: false");
console.log("result: " + list.has(6));
console.log("----------");
console.log("TEST END");