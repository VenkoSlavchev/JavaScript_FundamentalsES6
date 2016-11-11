'use strict';
function solve(arr) {
    let numbers = arr.map(Number),
        orderedNumbersArray = [];
    numbers.map(function (element) {
        element < 0 ? orderedNumbersArray.unshift(element) : orderedNumbersArray.push(element);
    });
    orderedNumbersArray.forEach(x => console.log(x));
}
//Test the code
//solve(['3','-2','0','-1']);