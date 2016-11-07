export function bubbleSort(debugMode = false) {
    if (debugMode) console.log("--------------");

    for (let outer = this.size(); outer >= 2; --outer) {
        for (let inner = 0; inner <= outer - 2; ++inner) {
            if (this.getElement(inner) > this.getElement(inner + 1)) {
                this.swap(inner, inner + 1);
            }
        }
        
        if (debugMode) console.log(this.toString());
    }

    if (debugMode) console.log("--------------");
}