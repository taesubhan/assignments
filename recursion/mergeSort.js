function mergeSort(arr) {
    if (arr.length == 1) return arr;

    const half = Math.ceil(arr.length/2);
    const left = mergeSort(arr.slice(0,half));
    const right = mergeSort(arr.slice(half));

    const sortedArray = []
    while (left.length > 0 && right.length > 0) {
        if (left[0] <= right[0]) {
            sortedArray.push(left.shift());
        } else {
            sortedArray.push(right.shift());
        }
    }

    return sortedArray.concat(left, right);
}

console.log(mergeSort([3, 2, 1, 13, 8, 5, 0, 1]));
console.log(mergeSort([105, 79, 100, 110]));