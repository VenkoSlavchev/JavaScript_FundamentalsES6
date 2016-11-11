'use strict';
function solve(arr) {
    arr.forEach(function (inputElements) {
        if (inputElements>0){
            console.log(Math.log2(Number(inputElements)));
        }
    });
}
solve(['3','2','1','1024']);