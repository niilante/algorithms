import {DataStruct} from "./DataStruct";

import * as sorting from "../algorithms/sorting";

export class List implements DataStruct {
    dataStore: any[];
    pos: number;

    constructor(num: number) {
        this.dataStore = [];
        this.pos = 0;

        for (let i = 0; i < num; i++) {
            this.dataStore[i] = Math.floor(Math.random() * 100);
        }
    }
    
    size() {
        return this.dataStore.length;
    }

    toString() {
        return this.dataStore.toString();
    }

    append(el: any) {
        this.dataStore.push(el);
    }

    insert(el: any, pos: number) {
        if (pos > -1) {
            this.dataStore.splice(pos, 0, el);
            return true;
        }

        return false;
    }

    remove(el: any) {
        var pos = this.find(el);
        if (pos > -1) {
            this.dataStore.splice(pos, 1);
            return true;
        }

        return false;
    }

    clear() {
        for (let el of this.dataStore) {
            el = null;
        }
    }

    find(searched: any) {
        this.dataStore.forEach((val, index) => {
            if (val == searched) return index;
        });

        return -1;
    }

    getElement(index: number) {
        return this.dataStore[index];
    }

    reset() {
        this.pos = 0;
    }

    first() {
        this.reset();
        return this.next();
    }

    next() {
        return this.dataStore[this.pos++];
    }

    hasNext() {
        return this.pos <= this.size();
    }
    
    each(callback: (item: any) => void) {
        for (var item = this.first(); this.hasNext(); item = this.next()) {
            callback(item);
        }
    }

    swap(index1: number, index2: number) {
        let temp = this.dataStore[index1];
        this.dataStore[index1] = this.dataStore[index2];
        this.dataStore[index2] = temp;
    }

    setValue(index: number, val: any) {
        if (index >= 0 && index < this.size()) {
            this.dataStore[index] = val;
        }
    }

    bubbleSort() {
        sorting.bubbleSort.call(this);
    }

    selectionSort() {
        sorting.selectionSort.call(this)
    }

    insertionSort() {
        sorting.insertionSort.call(this);
    }

    quickSort() {
        this.dataStore = sorting.quickSort(this.dataStore);
    }

    shellSort() {
        sorting.shellSort.call(this);
    }

}