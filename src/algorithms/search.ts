export function binarySearch(data: any): number {
    let upperBound = this.size() - 1;
    let lowerBound = 0;

    while (lowerBound <= upperBound) {
        let mid = Math.floor((upperBound + lowerBound) / 2);

        if (this.getElement(mid) < data) {
            lowerBound = mid + 1;
        } else if (this.getElement(mid) > data) {
            upperBound = mid - 1;
        } else {
            return mid;
        }
    } 

    return -1;
}