'use strict';
function solve(arr) {
    let numberOfElements = +(arr[0]),
        kElements = +(arr[1]),
        result = [1, 1];

    for (let i = 2; i < numberOfElements; i++) {
        result.push(findSum(result, kElements))
    }
    function findSum(array, k) {
        let sum = 0;
        if (array.length <= k) {
            array.forEach(x => sum += x);
            return sum;
        } else {
            for (let j = array.length - 1; j > array.length - 1 - k; j--) {
                sum += array[j];
            }
        }
        return sum;
    }

    console.log(result.join(' '));
}
//Test the code
//solve(['8', '2']);