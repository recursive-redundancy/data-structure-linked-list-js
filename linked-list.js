/** 
 * Linked List - Javascript (singly linked list)
 * solution by Daniel Morgan
 */

 
 /**
  * Class representing a LinkedList, which
  * also represents an individual
  * node within a LinkedList. These cumulative nodes 
  * represent a LinkedList, with the first 
  * node in the list being the head - this 
  * head node is representative of the entire LinkedList.
  */
class LinkedList {
    /**
     * Create new LinkedList instance.
     * @param {...number|...string|null} - value(s) of new linked list
     */
    constructor(value, ...varValues) {
        this.next = null;
        this.value = value;

        varValues.forEach((val) => {
            this.add(val);
        });
    }

    /**
     * Add a new item into the linked list. Item is inserted at the end of the list.
     * @param  {number, string} value - The value of the new item being added
     * @param  {Object, null} node - Current node (item)
     * in recursive loop. If null, node is set as calling node
     * @return {void} Does not return a value
     */
    add(value, node) {
        if (node == null) node = this;
        if (node.next == null) {
            // current node is end of list
            // create new node and insert as next node
            let newNode = new LinkedList(value);
            node.next = newNode;
        }
        else {
            // continue recursively to next node in search of end
            node.add(value, this.next);
        }
    }

    /**
     * Search list for a specific item
     * @param  {number, string} value The value of the new item being added
     * @param  {Object, null} node - Current node (item)
     * in recursive loop. If null, node is set as calling node
     * @return {boolean} True if item found, False if not found
     */
    has(value, node) {
        if (node == null) node = this;

        // value found on current node
        if (node.value == value) return true;
        
        if (node.next != null) {
            // recursively search next node for value
            return this.has(value, node.next);
        }

        // end reached with value not found
        return false;
    }
}

module.exports = LinkedList;