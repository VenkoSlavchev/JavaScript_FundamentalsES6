"use strict";
function solve(arr) {
    let delimeter = arr[1],
        inputString = arr[0];
    inputString.split(delimeter).forEach(x => console.log(x));

}
//Test the code
// solve(['http://platform.softuni.bg','.']);