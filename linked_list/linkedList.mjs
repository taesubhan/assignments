import {Node} from './node.mjs';

export class LinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
        this.size = 0;
    }

    append(value) {
        const newNode = new Node(value);
        if (this.head === null) {
            this.head = newNode;
        } else {
            this.tail.nextNode = newNode;
        }
        this.tail = newNode;
        this.size += 1;
    }

    prepend(value) {
        const newNode = new Node(value);
        if (this.head === null) {
            this.tail = newNode;
        } else {
            newNode.nextNode = this.head;
        }
        this.head = newNode;
        this.size += 1;
    }

    at(index) {
        if (index >= this.size || index < 0) {
            throw new Error('Index does not exist in Linked List');
        }

        let node = this.head;
        for (let i = 0; i < index; i++) {
            node = node.nextNode;   
        }
        return node;
    }

    pop() {
        if (this.size === 0) {
            throw new Error('Cannot use this function on an empty list');
        }

        const result = this.tail;
        let node = this.head;
        for (let i = 2; i < this.size; i++) {
            node = node.nextNode;
        }
        if (this.size === 1) {
            this.head = null;
            this.tail = null;

        } else {
            this.tail = node;
            this.tail.nextNode = null;
        }
        
        this.size -= 1;
        return result;
    }

    contains(value) {
        let node = this.head;
        while (node) {
            if(node.value === value) {
                return true;
            }
            node = node.nextNode;
        }
        return false;
    }

    find(value) {
        let node = this.head;
        let i = 0;
        while(node) {
            if(node.value === value) {
                return i;
            }
            node = node.nextNode;
            i += 1;
        }
        return null;
    }

    toString() {
        let node = this.head;
        let text = '';

        while(node) {
            text += `( ${node.value} ) -> `;
            node = node.nextNode;
        }

        text += `${node}`;
        return text;
    }

    insertAt(value, index) {
        if (index > this.size) {
            throw new Error('Index does not exist in Linked List');
        }
        let newNode = new Node(value);
        let node = this.head;
        for (let i = 1; i < index; i++) {
            node = node.nextNode;
        }
        if (index === 0) {
            newNode.nextNode = node;
            this.head = newNode;
        } else {
            newNode.nextNode = node.nextNode;
            node.nextNode = newNode;
            if (index === this.size) {
                this.tail = newNode;
            }
        }
        
        this.size += 1;
    }

    removeAt(index) {
        if (index >= this.size) {
            throw new Error('Index does not exist in Linked List');
        }
        if (index === 0) {
            this.head = this.head.nextNode;
        } else {
            let node = this.head;
            for (let i = 1; i < index; i++) {
                node = node.nextNode;
            }
            node.nextNode = node.nextNode.nextNode;
            if (index === this.size - 1) {
                this.tail = node;
            }
        }

        this.size -= 1;
    }
}

