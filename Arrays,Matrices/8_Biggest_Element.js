'use strict';
function solve(arr) {
    let numbers = arr.map(x => x.split(' ').map(Number)),
        biggestNum = Number.NEGATIVE_INFINITY;

    numbers.forEach(
        x => x.forEach(
            e => biggestNum = Math.max(biggestNum, e))
    );

    console.log(biggestNum);
}
//test the code
// solve(['20 50 10',
//     '8 33 145']);