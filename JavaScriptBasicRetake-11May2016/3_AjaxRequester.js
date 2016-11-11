"use strict";
function solve(arr) {
    let hashPattern = arr.pop();

    for (let i = 0; i < arr.length; i += 3) {
        let method = arr[i],
            token = arr[i + 1],
            content = arr[i + 2],
            validFormat = true;
        let authenticationString = token.split(' ')[2];
        let specificMethod = method.split(': ')[1],
            specificToken = token.split(' ')[1];

        if (method !== 'Method: GET' && method !== 'Method: POST' && method !== 'Method: PUT' && method !== 'Method: DELETE') {
            validFormat = false;
        } else if (token.replace(/Credentials: Basic [gA-Za-z0-9]+|Credentials: Bearer [A-Za-z0-9]+/g, ' ') !== ' ') {
            validFormat = false;
        } else if (content.replace(/Content: [A-Za-z0-9.]+/g, ' ') !== ' ') {
            validFormat = false;
        }
        if (!validFormat) {
            console.log('Response-Code:400');
            continue;
        }


        if ((specificMethod === 'POST' && specificToken === 'Basic') || (specificMethod === 'PUT' && specificToken === 'Basic') ||
            (specificMethod === 'DELETE' && specificToken === 'Basic')) {
            validFormat = false;
        }
        if (!validFormat) {
            console.log(`Response-Method:${specificMethod}&Code:401`);
            continue;
        }


        for (let hashChar = 0; hashChar < hashPattern.length; hashChar += 2) {
            let digit = +hashPattern[hashChar],
                letter = hashPattern[hashChar + 1],
                arrayOfMatches = [],
                regExp = new RegExp(letter, 'g');
            arrayOfMatches = authenticationString.match(regExp);
            if (arrayOfMatches === null) {
                continue;
            }
            if (arrayOfMatches.length === digit) {
                validFormat = true;
                break;
            } else {
                validFormat = false;
            }
        }
        if (!validFormat) {
            console.log(`Response-Method:${specificMethod}&Code:403`);
            continue;
        }
        if (validFormat) {
            console.log(`Response-Method:${specificMethod}&Code:200&Header:${authenticationString}`);
        }


    }
}
//Test the code
// solve([
//     'Method: GET',
//     'Credentials: Bearer asd918721jsdbhjslkfqwkqiuwjoxXJIdahefJAB',
//     'Content: users.asd.1782452.278asd',
//     'Method: POST',
//     'Credentials: Basic 028591u3jtndkgwndsdkfjwelfqkjwporjqebhas',
//     'Content: Johnathan',
//     '0q'
// ]);

// solve([
// 'Method: PUT',
// 'Credentials: Bearer as9133jsdbhjslkfqwkqiuwjoxXJIdahefJAB',
// 'Content: users.asd/1782452$278///**asd123',
// 'Method: POST',
// 'Credentials: Bearer 028591u3jtndkgwndskfjwelfqkjwporjqebhas',
// 'Content: Johnathan',
// 'Method: DELETE',
// 'Credentials: Bearer 05366u3jtndkgwndssfsfgeryerrrrrryjihvx',
// 'Content: This.is.a.sample.content',
// '2e5g'
// ]);