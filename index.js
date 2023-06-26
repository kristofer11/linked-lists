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

        if (!this.head) {
            this.head = newNode;
            this.tail = newNode;
        } else { 
            this.tail.nextNode = newNode
        }
    }
}

const value1 = new Node(4);

console.log(value1)