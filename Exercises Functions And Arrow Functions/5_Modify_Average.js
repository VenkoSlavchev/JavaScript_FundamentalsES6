'use strict';
function solve(arr) {
    let inputNumber = arr[0];

    while (!checkAllDigitsSumForAverageOverFive(inputNumber)) {
        inputNumber += '9';
    }
    console.log(+(inputNumber));


    function checkAllDigitsSumForAverageOverFive(numberAsString) {
        let average = 0,
            sum = 0,
            numberToArray = numberAsString.match(/./g);
        numberToArray.forEach(function (x) {
            sum += +(x);
        });
        average = sum / numberToArray.length;

        if (5 < average) {
            return true;
        } else {
            return false;
        }
    }
}
//Test the code
// solve(['5835']);