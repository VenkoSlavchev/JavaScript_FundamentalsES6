'use strict';
function solve(arr) {
    let input = arr.map(x => {
       return x.split(':');
    });
    input = [].concat.apply([], input);

    let productsObj = {},
        sortedObj = {},
        resultString = '';
    for (let i = 0; i < input.length; i += 2) {
        let product = input[i].trim();
        productsObj[product] = +(input[i + 1].trim());
    }
    Object.keys(productsObj)
        .sort()
        .forEach(function (v) {
            sortedObj[v] = productsObj[v];
        });
    let firstLetter = Object.keys(sortedObj)[0].charAt(0);
    resultString += firstLetter + '\n';

    for (let key in sortedObj) {
        if (firstLetter !== key[0]) {
            firstLetter = key[0];
            resultString += firstLetter + '\n'
        }
       while (firstLetter === key[0]) {
            resultString += `  ${key}: ${sortedObj[key]}\n`;
            break;
        }
    }

    console.log(resultString);
}
productsObj[product]
// solve(['Appricot : 20.4',
//     'Fridge : 1500',
//     'TV : 1499',
//     'Deodorant : 10',
//     'Boiler : 300',
//     'Apple : 1.25',
//     'Anti-Bug Spray : 15',
//     'T-Shirt : 10',
// ]);