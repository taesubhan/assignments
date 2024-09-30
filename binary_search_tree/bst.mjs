import {Node} from './node.mjs';

export class Tree {
    constructor(arr=[]) {
        this.root = this.buildTree(arr);
    }

    prettyPrint(node, prefix = "", isLeft = true) {
        if (node === null) {
            return;
        }
        if (node.right !== null) {
            this.prettyPrint(node.right, `${prefix}${isLeft ? "│   " : "    "}`, false);
        }
        console.log(`${prefix}${isLeft ? "└── " : "┌── "}${node.value}`);
        if (node.left !== null) {
            this.prettyPrint(node.left, `${prefix}${isLeft ? "    " : "│   "}`, true);
        }
    }

    printTree() {
        this.prettyPrint(this.root);
    }

    cleanArr(arr) {
        return this.getUniqueArr(this.getSortedArr(arr));
    }

    getSortedArr(arr) {
        const newArr = arr;
        if (arr) {
            newArr.sort((a,b) => a - b);
        }
        return newArr;
    }

    getUniqueArr(arr) {
        return [...new Set(arr)];
    }

    buildTree(arr) {
        if (arr.length === 0) return null; 

        const array = this.cleanArr(arr);
        const mid = Math.floor(array.length/2);

        const node = new Node(array[mid]);

        node.left = this.buildTree(array.slice(0, mid));
        node.right = this.buildTree(array.slice(mid+1, array.length));

        return node;
    }

    addNode(node, value) {
        if (node === null) return new Node(value);

        if (value < node.value) {
            node.left = this.addNode(node.left, value);
        } else if (value > node.value) {
            node.right = this.addNode(node.right, value);
        } 

        return node;
    }

    insert(value) {
        this.addNode(this.root, value);
    }

    getChildrenCount(node) {
        let count = 0;
        if (!node) return count;

        Boolean(node.left) ? count++ : null;
        Boolean(node.right) ? count++ : null;
        
        return count;
    }

    getInorderSuccessor(node) {
        let successor = node.right;

        while (successor.left) {
            successor = successor.left;
        }

        return successor;
    }

    removeNode(node, value) {
        if (node === null) return null;

        if (value > node.value) {
            node.right = this.removeNode(node.right, value);
        } else if (value < node.value) {
            node.left = this.removeNode(node.left, value);
        } else if (value === node.value) {
            const childrenCount = this.getChildrenCount(node);
            if (childrenCount === 0) {
                return null;
            } else if (childrenCount === 1) {
                const childNode = Boolean(node.left) ? node.left : node.right;
                return childNode;
            } else if (childrenCount === 2) {
                const successor = this.getInorderSuccessor(node);
                this.removeNode(node, successor.value);
                node.value = successor.value;
            }
        }
        return node;
    }

    deleteItem(value) {
        this.removeNode(this.root, value);
    }

    getNode(node, value) {
        if (node === null) return null;

        if (value > node.value) {
            return this.getNode(node.right, value);
        } else if (value < node.value) {
            return this.getNode(node.left, value);
        } else {
            return node;
        }
    }

    find(value) {
        return this.getNode(this.root, value);
    }

    checkForCallback(callback) {
        if (callback === null) throw new Error('No callback in argument');
    }

    levelOrderIterative(node, callback) {
        const nodes = [node];
    
        while(nodes.length != 0) {
            const currNode = nodes.shift();
            callback(currNode);
            if (currNode.left) nodes.push(currNode.left);
            if (currNode.right) nodes.push(currNode.right);
        }       
    }

    levelOrder(callback) {
        this.checkForCallback(callback);
        this.levelOrderIterative(this.root, callback);
    }

    preOrderRecursive(node, callback) {
        if (node === null) return null;

        callback(node);
        this.preOrderRecursive(node.left, callback);
        this.preOrderRecursive(node.right, callback);
    }

    preOrder(callback) {
        this.checkForCallback(callback);
        this.preOrderRecursive(this.root, callback)
    }

    inOrderRecursive(node, callback) {
        if (node === null) return null;

        this.inOrderRecursive(node.left, callback);
        callback(node);
        this.inOrderRecursive(node.right, callback);

    }

    inOrder(callback) {
        this.checkForCallback(callback);
        this.inOrderRecursive(this.root, callback)
    }

    postOrderRecursive(node, callback) {
        if (node === null) return null;

        this.postOrderRecursive(node.left, callback);
        this.postOrderRecursive(node.right, callback);
        callback(node);
    }

    postOrder(callback) {
        this.checkForCallback(callback);
        this.postOrderRecursive(this.root, callback)
    }

    height(node) {
        if (node === null) return -1;

        let left = this.height(node.left);
        let right = this.height(node.right);

        return (left > right ? left : right) + 1;
    }

    getDepth(startNode, endNode) {
        if (startNode === null) throw new Error('No node found');
        if (startNode === endNode) return 0;

        if (startNode.value > endNode.value) {
            return this.getDepth(startNode.left, endNode) + 1;
        } else {
            return this.getDepth(startNode.right, endNode) + 1;
        }
    }

    depth(node) {
        return this.getDepth(this.root, node);
    }

    checkIfBalanced(node) {
        if (node === null) return true;
        let result = Math.abs(this.height(node.left) - this.height(node.right)) < 2;
        return result && this.checkIfBalanced(node.left) && this.checkIfBalanced(node.right);
    }

    isBalanced() {
        return this.checkIfBalanced(this.root);
    }

    rebalance() {
        const arr = [];
        const callback = (node) => {
            arr.push(node.value);
        }
        this.inOrder(callback);

        this.root = this.buildTree(arr);
    }

    getRandomNum(max) {
        return Math.floor(Math.random() * max);
    }

    generateRandomArray() {
        return Array.from(new Array(this.getRandomNum(10)+10), () => this.getRandomNum(100));

    }

    createRandomTree() {
        const randArray = this.generateRandomArray();
        this.root = this.buildTree(randArray);
    }
}