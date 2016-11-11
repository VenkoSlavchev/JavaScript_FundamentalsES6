'use strict';
function solve(arr) {
    let number = Number(arr[0]),
        precision = Number(arr[1]);

    function roundToTwo(num, precision) {
        return +(Math.round(num + `e+${precision}`) + `e-${precision}`);
    }

    if (precision > 15)
        precision = 15;

    console.log(roundToTwo(number, precision));
}
//Test the code
// solve(['3.1415926535897932384626433832795', '4']);