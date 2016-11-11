'use strict';
function solve(arr) {
    let date = new Date();
    date.setFullYear(Number(arr[2]), Number(arr[1] - 1), 0);
    console.log(date.getUTCDate());

}
//Test the code
// solve(['13', '12', '2004']);