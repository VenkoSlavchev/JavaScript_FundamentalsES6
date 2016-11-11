'use strict';
function solve(arr) {
    let stringTemplate = `<?xml version="1.0" encoding="UTF-8"?>
<quiz>\n`;
    for (let i = 0; i < arr.length; i += 2) {
        stringTemplate += `  <question>
    ${arr[i]}
  </question>
  <answer>
    ${arr[i + 1]}
  </answer>\n`
    }

    stringTemplate += `</quiz>`;

    console.log(stringTemplate);
}
//Test the code
// solve(["Who was the forty-second president of the U.S.A.?",
// "William Jefferson Clinton",'ala bala ','ne ne ne i ne ne nei']
// );