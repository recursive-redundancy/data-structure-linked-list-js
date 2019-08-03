/*
*
*
Implement a LinkedList class without using JavaScript’s built-in arrays ([]). Your LinkedList should support just 2 methods: add and has:

class LinkedList {...}
let list = new LinkedList(1, 2, 3)
list.add(4)                           // undefined
list.add(5)                           // undefined
list.has(1)                           // true
list.has(4)                           // true
list.has(6)                           // false
*
*
*/

class LinkedList {
    constructor() {
        this.next = null;
        this.value = null;
        
        if (!arguments.length) return;

        this.value = arguments[0];
        for (let i = 1, e = arguments.length; i < e; i++) {
            this.add(arguments[i]);
        }
    }
    
    add(value, node) {
        if (node == null) node = this;
        if (node.next == null) {
            let newNode = new LinkedList(value);
            node.next = newNode;
            return;
        }
        else {
            node.add(value, this.next);
        }
    }

    has(value, node) {
        if (node == null) node = this;
        if (node.value == value) return true;
        
        if (node.next != null) {
            return this.has(value, node.next);
        }
        return false;
    }
}
