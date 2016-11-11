'use strict';
function solve(arr) {
    let minAge = Number.parseInt(arr[0]);
    let firstPersonName = arr[1];
    let firstPersonAge = Number.parseInt(arr[2]);
    let secondPersonName = arr[3];
    let secondPersonAge = Number.parseInt(arr[4]);

    if ((firstPersonAge >= minAge) && (secondPersonAge >= minAge) && (firstPersonAge < secondPersonAge)) {
        console.log(`{ name: '${secondPersonName}', age: ${secondPersonAge} }`);
        console.log(`{ name: '${firstPersonName}', age: ${firstPersonAge} }`);
    } else if ((firstPersonAge >= minAge) && (secondPersonAge >= minAge) && (firstPersonAge > secondPersonAge)) {
        console.log(`{ name: '${firstPersonName}', age: ${firstPersonAge} }`);
        console.log(`{ name: '${secondPersonName}', age: ${secondPersonAge} }`);
    } else if (secondPersonAge > minAge) {
        console.log(`{ name: '${secondPersonName}', age: ${secondPersonAge} }`);
    } else if (firstPersonAge > minAge) {
        console.log(`{ name: '${firstPersonName}', age: ${firstPersonAge} }`);
    }

}
//Test the code
// solve(['19', 'Pesho', '119', 'Gosho', '20']);
