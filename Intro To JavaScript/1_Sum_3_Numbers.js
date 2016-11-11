'use strict';
function sumNumbers() {
    let sum = 0;
    arguments[0].forEach(function (numbers) {
            sum += Number.parseFloat(numbers);
        }
    );
    console.log(sum);
}

//Test the code
// sumNumbers(['1.5', '1.5', '-1']);