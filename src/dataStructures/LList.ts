class Node {
    el: any;
    next: Node;

    constructor(el: any) {
        this.el = el;
        this.next = null;
    }
}

export class LList {
    head: Node;

    constructor(length: any, ...values: any[]) {
        this.head = new Node("head"); 

        for (let i = 0; i < length; i++) {
            this.insert(values[i] == undefined ? Math.floor(Math.random() * 100) : values[i]);
        }
    }

    size() {
        let currNode = this.head;
        let length = 0;

        while (currNode.next != null) {
            length++;
            currNode = currNode.next;
        }

        return length;
    }

    getElement(index: number) {
        let currNode = this.head;

        while (currNode.next != null && index-- != 0) {
            currNode = currNode.next;
        }

        return currNode;
    }

    insert(newElem: any, item: any = null) {
        var newNode = new Node(newElem);
        var curr = this.find(item);
        newNode.next = curr.next; 
        curr.next = newNode;   
    } 

    find(item: any): Node {
        let currNode = this.head;

        while (currNode.el != item && currNode.next != null) {
            currNode = currNode.next;
        }

        return currNode;
    }

    findPrevious(item: any) {
        var currNode = this.head;
        while (!(currNode.next == null) && (currNode.next.el != item)) {
            currNode = currNode.next;
        }

        return currNode;
    }

    remove(item: any) {
        var prevNode = this.findPrevious(item);
        if (!(prevNode.next == null)) {
            prevNode.next = prevNode.next.next;
        }
    }

    toString() {
        let currNode = this.head;
        let buffer = "";

        while (!(currNode.next == null)) {
            buffer += currNode.next.el + " ";
            currNode = currNode.next;
        }

        return buffer.trim();
    }

}