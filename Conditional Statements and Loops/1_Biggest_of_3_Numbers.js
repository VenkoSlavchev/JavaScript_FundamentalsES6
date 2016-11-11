'use strict';
function solve(arr) {
    let firstNumber = Number([arr[0]]),
        secondNumber = Number(arr[1]),
        thirdNumber = Number(arr[2]);
    console.log(Math.max(firstNumber, secondNumber, thirdNumber));
}
//Test the code
//solve(['5','-2','7']);