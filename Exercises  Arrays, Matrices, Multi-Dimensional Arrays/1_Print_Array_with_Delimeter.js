"use strict";
function solve(arr) {
    let delimeter = arr.splice([arr.length - 1], 1);

    console.log(arr.join(delimeter));
}
//Test the code
// solve(['One', 'Two','Three', 'Four', 'Five','-']);