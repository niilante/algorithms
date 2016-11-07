"use strict";
function bubbleSort(debugMode) {
    if (debugMode === void 0) { debugMode = false; }
    if (debugMode)
        console.log("--------------");
    for (var outer = this.size(); outer >= 2; --outer) {
        for (var inner = 0; inner <= outer - 2; ++inner) {
            if (this.getElement(inner) > this.getElement(inner + 1)) {
                this.swap(inner, inner + 1);
            }
        }
        if (debugMode)
            console.log(this.toString());
    }
    if (debugMode)
        console.log("--------------");
}
exports.bubbleSort = bubbleSort;
