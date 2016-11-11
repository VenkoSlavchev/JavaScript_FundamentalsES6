'use strict';
function solve(arr) {
    let x = Number(arr[0]),
        y = Number(arr[1]),
        xMinValue = Number(arr[2]),
        xMaxValue = Number(arr[3]),
        yMinValue = Number(arr[4]),
        yMaxValue = Number(arr[5]);
    if ((x <= xMaxValue && x >= xMinValue) && (y <= yMaxValue && y >= yMinValue)) {
        console.log('inside');
    } else {
        console.log('outside');
    }


}
//Test the code
//solve(['12.5','-1','2','12','-3','3']);