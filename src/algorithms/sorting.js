"use strict";
var lib = require('../lib/funcs');
function bubbleSort(arr, debugMode) {
    if (debugMode === void 0) { debugMode = false; }
    if (debugMode)
        console.log("--------------");
    for (var outer = arr.length; outer >= 2; --outer) {
        for (var inner = 0; inner <= outer - 2; ++inner) {
            if (arr[inner] > arr[inner + 1]) {
                lib.swap(arr, inner, inner + 1);
            }
        }
        if (debugMode)
            console.log(arr);
    }
    if (debugMode)
        console.log("--------------");
    return arr;
}
exports.bubbleSort = bubbleSort;
