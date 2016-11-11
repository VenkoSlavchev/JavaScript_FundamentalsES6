'use strict';
function solve(arr) {
    let sumRows = 0,
        sumCols = 0,
        sum = 0,
        sumI = 0,
        matrix = arr.map(x => x.split(' ').map(Number)),
        rowsSumsAreEqual = false,
        colsSumsAreEqual = false;
    for (let row = 0; row < matrix.length; row++) {
        sumRows = 0;
        for (let col = 0; col < matrix[row].length; col++) {
            sumRows += matrix[row][col];
        }
        if (row === 0) {
            sumCols = sumRows;
        } else if (sumCols !== sumRows) {
            break;
        } else if ((row === matrix.length - 1) && (sumCols === sumRows)) {
            rowsSumsAreEqual = true;
            break;
        } else if (sumCols === sumRows) {
            sumCols = sumRows;
        }
    }

    for (let col = 0; col < matrix.length; col++) {
        sum = 0;
        for (let row = 0; row < matrix.length; row++) {
            sum += matrix[row][col]
        }
        if (col === 0) {
            sumI = sum;
        } else if (sumI !== sum) {
            break;
        } else if ((col === matrix.length - 1) && (sumI === sum)) {
            colsSumsAreEqual = true;
            break;
        } else if (sumI === sum) {
            sumI = sum;
        }
    }


    if (rowsSumsAreEqual && colsSumsAreEqual) {
        console.log('true');
    } else {
        console.log('false');
    }

}
//Test the code
// solve(['1 0 0',
//        '0 0 1',
//        '0 1 0'
//      ]);