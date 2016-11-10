import {DataStruct} from "./DataStruct";

export class Stack {
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

    push(data: any) {
        this.dataStore.push(data);
    }

    pop() {
        return this.dataStore.pop();
    }

    peek() {
        return this.dataStore[this.size() - 1];
    }

    clear() {
        this.dataStore = [];
    }
}