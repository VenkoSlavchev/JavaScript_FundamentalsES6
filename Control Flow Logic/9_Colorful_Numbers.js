'use strict';
function solve(arr) {
    let lines = Number(arr[0]);
    console.log('<ul>');
    for (let count = 1; count <= lines; count++) {
        if (count % 2 === 0) {
            console.log(`  <li><span style='color:blue'>${count}</span></li>`);
        } else {
            console.log(`  <li><span style='color:green'>${count}</span></li>`);
        }
    }
    console.log('</ul>');

}
//Test the code
// solve(['20']);
