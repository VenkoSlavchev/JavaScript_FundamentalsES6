'use strict';
function solve(arr) {
    let firstNumber = +(arr[0]),
        secondNumber = +(arr[1]),
        operator = arr[2];

    function add(num1, num2) {
        return num1 + num2;
    }

    function substract(num1, num2) {
        return num1 - num2;
    }

    function multiply(num1, num2) {
        return num1 * num2;
    }

    function divide(num1, num2) {
        return num1 / num2;
    }

    function modulus(num1, num2) {
        return num1 % num2;
    }

    switch (operator) {
        case '+' :
            console.log(add(firstNumber, secondNumber));
            break;
        case '-' :
            console.log(substract(firstNumber, secondNumber));
            break;
        case '*' :
            console.log(multiply(firstNumber, secondNumber));
            break;
        case '/' :
            console.log(divide(firstNumber, secondNumber));
            break;
        case '%' :
            console.log(modulus(firstNumber, secondNumber));
            break;
    }
}
//Test the code
// solve(['18', '-1', '*']);