export interface DataStruct {
    dataStore: any[],
    pos: number,

    size(): number,
    toString(): string,

    append(el: any): void,
    insert(el: any, pos: number): boolean,
    remove(el: any): boolean,
    
    clear(): void,
    find(el: any): any,
    getElement(index: number): any,
    
    reset(): void,
    first(): void,
    next(): void,
    hasNext(): boolean,
    each(el: (item: any) => void): void,

    swap(index1: number, index2: number): void
}