import {LinkedList} from '../linked_list/linkedList.mjs';

export class HashSet {
    capacity = 16;
    loadFactor = 0.75;

    constructor() {
        this.buckets = this.createArrayOfLinkedList(this.capacity);
    }

    createArrayOfLinkedList(num) {
        return Array.from(new Array(num), () => new LinkedList());
    }

    getHashIndex(key) {
        const hashIndex = this.hash(key);
        if (hashIndex < 0 || hashIndex >= this.capacity) {
            throw new Error('Trying to access index out of bound');
        }
        return hashIndex;
    }

    getKeyBucket(key) {
        const bucket = this.buckets[this.getHashIndex(key)];
        return bucket;
    }

    hash(key) {
        let hashCode = 0;
           
        const primeNumber = 31;
        for (let i = 0; i < key.length; i++) {
          hashCode = (primeNumber * hashCode + key.charCodeAt(i)) % this.capacity ;
        }
     
        return hashCode;
    } 

    resizeCapacity() {
        this.capacity *= 2;
        const oldBuckets = this.buckets;
        const existingKeys = this.keys();
        this.buckets = this.createArrayOfLinkedList(this.capacity);

        try {
            for (const key of existingKeys) {
                this.set(key);
            }
        } catch(err) {
            this.buckets = oldBuckets;
            this.capacity /= 2;
            console.log(err);
        }
    }

    isOverCapacity() {
        return this.length() >= Math.ceil(this.capacity * this.loadFactor)
    }

    checkForOverCapacity() {
        if (this.isOverCapacity()) this.resizeCapacity();
    }

    set(key) {
        const bucket = this.getKeyBucket(key);
        let node = bucket.head;
        
        while (node) {
            if (key === node.value) {
                return;
            }
            node = node.nextNode;
        }

        bucket.append(key);
        this.checkForOverCapacity();
    }

    has(key) {
        const bucket = this.getKeyBucket(key);
        let node = bucket.head;
        while (node) {
            if (key === node.value) return true;
            node = node.nextNode;
        }
        return false;
    }

    remove(key) {
        const bucket = this.getKeyBucket(key);
        let node = bucket.head;
        
        let index = 0;
        while (node) {
            if (key === node.value) {
                bucket.removeAt(index);
                return true;
            }
            node = node.nextNode;
            index++;
        }
        return false;
    }

    length() {
        let count = 0;
        for (const bucket of this.buckets) {
            if (bucket) count += bucket.size;
        }
        return count;
    }

    clear() {
        this.buckets = this.createArrayOfLinkedList(this.capacity);
        this.capacity = 16;
    }

    getElements(callback) {
        const results = [];
        for (const bucket of this.buckets) {
            let node = bucket.head;

            while (node) {
                results.push(callback(node));
                node = node.nextNode;
            }
        }
        return results;
    }

    keys() {
        return this.getElements((node) => node.value);
    }
}
