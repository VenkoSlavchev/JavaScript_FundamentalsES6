'use strict';
function solve(arr) {
    let x1 = Number(arr[0]),
        y1 = Number(arr[1]),
        z1 = Number(arr[2]),
        x2 = Number(arr[3]),
        y2 = Number(arr[4]),
        z2 = Number(arr[5]);
    console.log(Math.sqrt((Math.pow((x2 - x1), 2)) + (Math.pow((y2 - y1), 2)) + (Math.pow((z2 - z1), 2))));
}

//Test the code
// solve(['3.5','0','1','0','2','-1']);