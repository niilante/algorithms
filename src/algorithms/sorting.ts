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

export function selectionSort(debugMode = false) {
    if (debugMode) console.log("--------------");

    let min, temp;
    for (let outer = 0; outer <= this.size() - 2; ++outer) {
        min = outer;
        for (let inner = outer + 1; inner <= this.size() - 1; ++inner) {
            if (this.getElement(inner) < this.getElement(min)) {
                min = inner;
            }
        }
        this.swap(outer, min);

        if (debugMode) console.log(this.toString());
    }

    if (debugMode) console.log("--------------");
}

export function insertionSort(debugMode = false) {
    if (debugMode) console.log("--------------");

    let temp, inner;
    for (let outer = 1; outer <= this.size() - 1; ++outer) {
        temp = this.getElement(outer);
        inner = outer;
        while (inner > 0 && (this.getElement(inner - 1) >= temp)) {
            this.setValue(inner, this.getElement(inner - 1));
            inner--;
        }
        this.setValue(inner, temp);

        if (debugMode) console.log(this.toString());
    }

    if (debugMode) console.log("--------------");
}