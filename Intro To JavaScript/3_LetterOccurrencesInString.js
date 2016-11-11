'use strict';
function solve(arr) {
    let text = arr[0];
    let letter = arr[1];
    let myRegexp = new RegExp(letter, 'gi');
    let arrayOfFoundLetters = text.match(myRegexp);
    console.log(arrayOfFoundLetters.length);
}
//Test the code
// solve(['hello', 'l']);