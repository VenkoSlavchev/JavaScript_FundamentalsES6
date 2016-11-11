'use strict';
function solve(arr) {
    let input = arr.map(x => {
        let object = JSON.parse(x),
            tableRowString = `    <tr>\n`;
        for (let key in object) {
            if (object.hasOwnProperty(key)) {
                tableRowString += `        <td>${object[key]}</td>\n`;
            }
        }
        tableRowString += `    <tr>`;

        return tableRowString;
    });
    console.log('<table>');
    input.forEach(x => {
        x.split('\n');
        console.log(x);
    })
    console.log('</table>');
}
//Test the code
// solve(['{"name":"Pesho","position":"Promenliva","salary":100000}',
//     '{"name":"Teo","position":"Lecturer","salary":1000}',
//     '{"name":"Georgi","position":"Lecturer","salary":1000}'
// ]);