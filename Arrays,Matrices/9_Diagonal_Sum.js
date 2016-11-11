'use strict';
function solve(arr) {
    let numbers = arr.map(x => x.split(' ').map(Number)),
        mainDiagonalSum = 0,
        secondDiagonalSum = 0;
    for (let row = 0, col = 0; row < numbers.length; row++, col++) {
        mainDiagonalSum += numbers[row][col];
        secondDiagonalSum += numbers[row][numbers.length - 1 - row];
    }

    console.log(`${mainDiagonalSum} ${secondDiagonalSum}`);
}
//Test the code
// solve(['3 5 17',
//       '-1 7 14',
//       '1 -8 89']
// );