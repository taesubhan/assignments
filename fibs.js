function fibs(num) {
    const arr = [];
    let primary = 0;
    let secondary = 1;
    if (num >= 1) {
        arr.push(primary);
    }
    if (num >= 2) {
        arr.push(secondary);
    }
    for (let i = 3; i <= num; i++) {
        let sum = primary + secondary;
        arr.push(sum);
        primary = secondary;
        secondary = sum;
    }

    return arr;
}

function fibsRec(num) {
    if (num <= 1) {
        return [0];
    } else if (num == 2) {
        return [0, 1];
    }
    const arr = fibsRec(num-1);
    return arr.concat([arr[arr.length-1] + arr[arr.length-2]]);
}
console.log('Iterative fibonacci sequence')
console.log(fibs(1));
console.log(fibs(2));
console.log(fibs(8));

console.log('Recursive fibonacci sequence')
console.log(fibsRec(1));
console.log(fibsRec(2));
console.log(fibsRec(8));