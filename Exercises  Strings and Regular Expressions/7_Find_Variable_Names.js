'use strict';
function solve(arr) {
    let myRegex = /\b_{1}([A-Za-z0-9]+)\b/g;
    let inputString = arr[0];
    let myArray,
        stringResult = [];
    while ((myArray = myRegex.exec(inputString)) !== null) {
        stringResult.push(myArray[1]);
    }
    console.log(stringResult.join());
}
//Test the code
// solve(['__invalidVariable _evenMoreInvalidVariable_ _validVariable']);