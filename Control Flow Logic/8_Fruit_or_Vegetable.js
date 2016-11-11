'use strict';
function solve(arr) {
    let product = arr[0],
        fruits = ['banana', 'apple', 'kiwi', 'cherry', 'lemon', 'grapes', 'peach'],
        vegetables = ['tomato', 'cucumber', 'pepper', 'onion', 'garlic', 'parsley'],
        isFruit = false,
        isVegetable = false;
    fruits.forEach(function (productForCheck) {
        if (productForCheck === product) {
            isFruit = true;
            console.log('fruit')
        }
    });
    vegetables.forEach(function (productForCheck) {
        if (productForCheck === product) {
            isVegetable = true;
            console.log('vegetable')
        }
    });
    if ((!isVegetable && !isFruit)) {
        console.log('unknown')
    }
}
//Test the code
// solve(['pineapple']);