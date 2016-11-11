'use strict';
function solve(arr) {
    let numbers = arr.map(Number),
        resultArray = [];
    for (let el in numbers) {
        if (el % 2 !== 0) {
            resultArray.push(numbers[el] * 2);
        }
    }
    console.log(resultArray.reverse().join(' '));
}
//Test the code
//solve(['3', '0', '10', '4', '7', '3']);