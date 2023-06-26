class Node {
    constructor(value) {
        this.value = value;
        this.nextNode = null;
    }
}

class LinkedList {
    constructor() {
         this.head = null;
         this.tail = null;
    }

    append(value) {
        const newNode = new Node(value);
        if(this.head === null) {
            this.head = newNode;
            this.tail = newNode;
        } else {
            this.tail.nextNode = newNode;
            this.tail = newNode;
        }
    }

    prepend(value) {
        const newNode = new Node(value);
        newNode.nextNode = this.head;
        this.head = newNode;
    }

    size() {
        let count = 0;
        let currentNode = this.head;
        while(currentNode !== null) {
            count++;
            currentNode = currentNode.nextNode;
        }
        return count;
    }
    
    getHead() {
        return this.head;
    }

    getTail() {
        return this.tail;
    }

    at(index) {
        let count = 0;
        let currentNode = this.head;
        while(count < index) {
            count++;
            currentNode = currentNode.nextNode;
        }
        return currentNode;
    }

    pop() {
        let currentNode = this.head;
        while(currentNode.nextNode !== this.tail) {
            currentNode = currentNode.nextNode;
        }
        currentNode.nextNode = null;
        this.tail = currentNode;
    }

    contains(value) {
        let currentNode = this.head;
        while(currentNode.value !== value) {
            currentNode = currentNode.nextNode;
        }
        return currentNode.value === value;
    }

    find(value) {
        if (!this.head) {
            return null;
        }

        let currentNode = this.head;
        while(currentNode.value !== value) {
            currentNode = currentNode.nextNode;
        }
        return currentNode.value === value;
    }

    toString() {
        if (!this.head) {
            return '';
        }

        let currentNode = this.head;
        let result = '';
        const visitedNodes = new Set();

        while(currentNode !== null) {
            if(visitedNodes.has(currentNode)) {
                result += '[Circular]';
                break;
            }
            visitedNodes.add(currentNode);
            result += currentNode.value + ' -> ';
            currentNode = currentNode.nextNode;
        }

        return result;
    }
}

const list = new LinkedList();

list.append(1);
list.append('steve');
list.append(4)
list.append(79000000);

console.log(list.toString());
