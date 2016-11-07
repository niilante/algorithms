export function swap(arr: any[], index1: number, index2: number) {
    let temp = arr[index1];
    arr[index1] = arr[index2];
    arr[index2] = temp;
}