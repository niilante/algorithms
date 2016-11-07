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

    bubbleSort() {
        this.dataStore = sorting.bubbleSort(this.dataStore);
    }

}