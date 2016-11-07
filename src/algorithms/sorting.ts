import * as lib from '../lib/funcs';

export function bubbleSort(arr: any[], debugMode = false) {
    if (debugMode) console.log("--------------");

    for (let outer = arr.length; outer >= 2; --outer) {
        for (let inner = 0; inner <= outer - 2; ++inner) {
            if (arr[inner] > arr[inner + 1]) {
                lib.swap(arr, inner, inner + 1);
            }
        }
        
        if (debugMode) console.log(arr);
    }

    if (debugMode) console.log("--------------");
    
    return arr;
}