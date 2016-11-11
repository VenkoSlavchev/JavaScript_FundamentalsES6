'use strict';
function solve(arr) {
    let inputString = arr[0],
        isPalindrome = true;
    for (let i = 0, j = inputString.length - 1; i < Math.floor(inputString.length / 2) - 1, j > Math.round(inputString.length / 2); i++, j--) {
        if (inputString[i] !== inputString[j]) {
            isPalindrome = false
        }

    }
    console.log(isPalindrome)
}
//Test the code
// solve(['unitinu']);