'use strict';
function solve(arr) {
    let grads = Number(arr[0]);
    if (grads === 400) {
        console.log(0)
    } else if (grads < 0) {
        console.log(360 - (-grads * 0.9));
    } else if (grads < 400) {
        console.log(grads * 0.9);
    } else if (grads > 400) {
        console.log((grads % 400) * 0.9)
    }
}
//Test the code
// solve(['1']);