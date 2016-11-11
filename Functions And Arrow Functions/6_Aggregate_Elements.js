'use strict';
function solve(arr) {
    let sum = 0,
        sumDividedByArrayElements = 0,
        concatenatedString = '';
    for (let obj of arr) {
        if (!(isNaN(+(obj)))) {
            sum += +(obj);
            sumDividedByArrayElements += 1 / (+(obj));
        }
        concatenatedString += obj;
    }
    console.log(`${sum}\n${sumDividedByArrayElements}\n${concatenatedString}`);

}
//Test the code
// solve(['2', '4', '8', '16']);