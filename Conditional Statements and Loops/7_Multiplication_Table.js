'use strict';
function solve(arr) {
    let number = +(arr[0]),
        stringFormat = ' <tr><th>';
    console.log(`<table border="1">`)
    for (let count = 0; count <= 1; count++) {
        if (count === 0) {
            stringFormat += `x</th>`;
            for (let firstRowElements = 1; firstRowElements <= number; firstRowElements++) {
                if (firstRowElements === number) {
                    stringFormat += `<th>${firstRowElements}</th></tr>\n`;
                } else
                    stringFormat += `<th>${firstRowElements}</th>`;
            }
        } else {
            for (let nextRows = 1; nextRows <= number; nextRows++) {
                stringFormat += ` <tr><th>${nextRows}</th>`;
                for (var nextRowsElements = 1; nextRowsElements <= number; nextRowsElements++) {
                    if (nextRowsElements === number) {
                        if (nextRows === number) {
                            stringFormat += `<td>${nextRowsElements * nextRows}</td></tr>`;
                        } else
                            stringFormat += `<td>${nextRowsElements * nextRows}</td></tr>\n`;
                    } else
                        stringFormat += `<td>${nextRowsElements * nextRows}</td>`;

                }

            }
        }
        if (count === 1) {
            console.log(stringFormat);
            console.log(`</table>`);
        }

    }
}
//Test the code
//solve(['10']);