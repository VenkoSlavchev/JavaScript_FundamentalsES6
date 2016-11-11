'use strict';
function solve(arr) {
    let stringResult = '<table>\n',
        firstObj = JSON.parse(arr[0]),
        secondObj = JSON.parse(arr[1]);

    stringResult += ` <tr><th>${Object.keys(firstObj)[0]}</th><th>${Object.keys(firstObj)[1]}</th></tr>\n`;
    stringResult += ` <tr><th>${escapeHtml(firstObj.name)}</th><th>${firstObj.score}</th></tr>\n`;
    stringResult += ` <tr><th>${escapeHtml(secondObj.name)}</th><th>${secondObj.score}</th></tr>\n`;
    stringResult += '</table>';

    console.log(stringResult);

    function escapeHtml(unsafe) {
        return unsafe
            .replace(/&/g, "&amp;")
            .replace(/</g, "&lt;")
            .replace(/>/g, "&gt;")
            .replace(/"/g, "&quot;")
            .replace(/'/g, "&#039;");
    }
}
//Test the code
//solve(['{"name":"Pesho & Kiro","score":479}', '{"name":"Gosho, Maria & Viki","score":205}']);