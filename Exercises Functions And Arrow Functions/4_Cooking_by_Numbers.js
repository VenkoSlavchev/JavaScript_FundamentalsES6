'use strict';
function solve(arr) {
    let inputNumber = +(arr[0]);

    function operation(operator, number) {
        switch (operator) {
            case 'chop' :
                console.log(number / 2);
                return number / 2;
                break;
            case 'dice' :
                console.log(Math.sqrt(number));
                return Math.sqrt(number);
                break;
            case 'spice' :
                console.log(number + 1);
                return number + 1;
                break;
            case 'bake' :
                console.log(number * 3);
                return number * 3;
                break;
            case 'fillet' :
                console.log(number - (number * 0.2));
                return (number - (number * 0.2));
                break;
            default :
                break;
        }
    }

    operation(arr[5], operation(arr[4], operation(arr[3], operation(arr[2], operation(arr[1], inputNumber)))));
}
//Test the code
// solve(['9','dice','spice','chop','bake','fillet']);