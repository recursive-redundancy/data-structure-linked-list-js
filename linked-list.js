/*
* Linked List - Javascript
* solution by Daniel Morgan
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
