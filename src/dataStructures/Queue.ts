import {DataStruct} from "./DataStruct";

export class Queue {
    dataStore: any[];

    constructor(num: number) {
        this.dataStore = [];

        for (let i = 0; i < num; i++) {
            this.dataStore.push(Math.floor(Math.random() * 100));
        }
    }

    size() {
        return this.dataStore.length;
    }

    empty() {
        return !this.size();
    }

    clear() {
        this.dataStore = [];
    }

    enqueue(data: any) {
        this.dataStore.push(data);
    }

    dequeue() {
        return this.dataStore.shift();
    }

    front() {
        return this.dataStore[0];
    }

    back() {
        return this.dataStore[this.size() - 1];
    }
}