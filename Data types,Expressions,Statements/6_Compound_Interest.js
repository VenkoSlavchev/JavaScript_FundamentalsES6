'use strict';
function solve(arr) {
    let principalSum = Number(arr[0]),
        interestRate = Number(arr[1]),
        compoundingFrequency = (12 / Number(arr[2])),
        time = Number(arr[3]);

    console.log((principalSum * Math.pow((Math.pow((1 + ((interestRate / 100) / compoundingFrequency)),
        compoundingFrequency)), time)).toFixed(2));
}

//Test the code
// solve(['1500', '4.3', '3', '6']);