export class Node {
    constructor(value = null, nextNode = null) {
        this.value = value;
        this.nextNode = nextNode;
    }

    getValue() {
        return this.value;
    }

    // getNextNode() {
    //     return this.nextNode;
    // }

    setNextNode(nextNode) {
        this.nextNode = nextNode;
    }


}