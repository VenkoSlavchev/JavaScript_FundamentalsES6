'use strict';
function solve(arr) {
    let input = arr.map(x => {
        return x.split('=>');
    });
    input = [].concat.apply([], input);
    let sumOfQuantity = {},
        result = {};


    for (let i = 0; i < input.length; i += 2) {
        let fruit = input[i].trim(),
            quantity = +(input[i + 1]);
        if (!sumOfQuantity[fruit]) {
            sumOfQuantity[fruit] = 0;
        }
        sumOfQuantity[fruit] += quantity;
        if (sumOfQuantity[fruit] >= 1000) {
            if (!result[fruit]) {
                result[fruit] = sumOfQuantity[fruit];
            }
            result[fruit] = Math.floor(sumOfQuantity[fruit] / 1000);
        }
    }
    for (let key in result) {
        console.log(key + ' => ' + result[key]);
    }

}
 //Test the code
// solve(['Kiwi => 234',
//     'Pear => 2345',
//     'Watermelon => 3456',
//     'Kiwi => 4567',
//     'Pear => 5678',
//     'Watermelon => 6789'
// ]);