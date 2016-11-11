'use strict';
function solve(arr) {
    let year = Number(arr[0]);
    if (((year % 4) === 0) && ((year % 100) !== 0)) {
        return console.log('yes');
    } else if ((year % 400) === 0) {
        return console.log('yes');
    } else {
        return console.log('no')
    }
}
//Test the code
//solve(['2011']);