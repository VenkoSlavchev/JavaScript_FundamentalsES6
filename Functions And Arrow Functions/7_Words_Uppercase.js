'use strict';
function solve(arr) {
    let text = arr[0],
        result = [],
        outputString = '';
    result = text.match(/[A-Za-z0-9]+/g).map(function (element) {
        return element.toUpperCase();
    });
    result.forEach(function (element) {
        outputString+=`${element}, `;
    });
    outputString = outputString.slice(0,-2);
    console.log(outputString);
}
//Test the code
// solve(['Functions in JS can be nested, i.e. hold other functions']);