'use strict';
function solve(arr) {
    let resultArray = [];

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === 'add') {
            resultArray.push(i + 1);
        } else if (arr[i] === 'remove') {
            resultArray.splice(i - 1, 1);
        }
    }
    if (resultArray.length > 0) {
        resultArray.forEach(x => console.log(x));
    } else {
        console.log('Empty');
    }
}
//Test the code
// solve(['remove', 'remove', 'add']);