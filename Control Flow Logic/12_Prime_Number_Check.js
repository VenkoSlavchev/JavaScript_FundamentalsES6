'use strict';
function solve(arr) {
    let number = Number(arr[0]);
    if(((number%1===0) && (number%number===0) && (number%2!==0) && (number%3!==0) && (number>0) && number!==1 || number === 2 || number === 3)){
        console.log(true);
    } 
    else{
        console.log(false);
    }
}
solve(['1']);