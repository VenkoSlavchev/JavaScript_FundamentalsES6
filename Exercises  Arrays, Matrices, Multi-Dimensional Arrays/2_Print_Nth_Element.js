'use strict';
function solve(arr) {
    let step = +(arr.splice([arr.length - 1], 1));
    for (let i = 0; i < arr.length; i += step) {
        if (step > arr.length) {
            console.log(arr[i]);
            break;
        }
        console.log(arr[i]);
    }

}
//Test the code
// solve(['1','2','3','4','5']);