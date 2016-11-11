'use strict';
function solve(arr) {
    let numbers = arr.map(x => x.split(' ')),
        countMatches = 0;

    for (let row = 0; row < numbers.length; row++) {
        for (let col = 0; col < numbers[row].length; col++) {
            if ((row === numbers.length - 1) && (col === numbers[row].length - 2)) {
                if (numbers[row][col] === numbers[row][col + 1]) {
                    countMatches += 1;
                }
            } else if ((row !== numbers.length - 1) && (col === numbers[row].length - 1)) {
                if (numbers[row][col] === numbers[row + 1][col]) {
                    countMatches += 1;
                }
            } else if (row === numbers.length - 1) {
                if (numbers[row][col] === numbers[row][col + 1]) {
                    countMatches += 1;
                }
            } else if ((row !== numbers.length - 1) && ((numbers[row][col] === numbers[row][col + 1]) && (numbers[row][col] === numbers[row + 1][col]))) {
                countMatches += 2;
            } else if ((row !== numbers.length - 1) && ((numbers[row][col] === numbers[row][col + 1]) || (numbers[row][col] === numbers[row + 1][col]))) {
                countMatches += 1;
            }
        }
    }
    console.log(countMatches);
}
//Test the code
// solve(['yo yo yo yo',
//     'yo yo yo yo',
//     'yo yo yo yo']);