'use strict';
function solve(arr) {
    let input = arr.map(Number),
        biggestSum = Number.NEGATIVE_INFINITY,
        sum = 1,
        isZero = false;

    for (let i = 0; i < input.length; i++) {

        if (input[i] <= 9 && input[i] >= 0) {
            let indexOfDigit = i;
            if (input[i] !== 0) {
                isZero = true;
            }
            for (let j = i + 1; j < input[i] + indexOfDigit + 1; j++) {
                sum *= input[j];
            }
        }

        if (sum > biggestSum) {
            biggestSum = sum;
        }

    }
    if (!isZero) {
        console.log(0);
    } else {
        console.log(biggestSum);
    }


}
//Test the code
// solve([
//     '10',
//     '20',
//     '2',
//     '30',
//     '44',
//     '123',
//     '3',
//     '56',
//     '20',
//     '24'
// ]);
// solve([
//     '0',
//     '0',
//     '1',
//     '2',
//     '3',
//     '0',
//     '0',
//     '0',
//     '0'
// ])