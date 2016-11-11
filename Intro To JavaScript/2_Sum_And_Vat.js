'use strict';
function solve(arr) {
    let sum = 0, vat, total;
    arr.forEach(function (prices) {
            sum += Number(prices);
        }
    );
    vat = 0.2 * sum;
    total = sum + vat;
    console.log(`sum = ${sum}` + '\n' + `VAT = ${vat}` + '\n' + `total = ${total}`);
}
//Test the code
//sumAndVat(['1.2','2.6','3.50']);
//solve(['99.9999', '99.9999', '99.9999', '99.9999', '99.9999', '99.9999', '99.9999', '99.9999']);
