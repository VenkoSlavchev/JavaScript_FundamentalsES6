'use strict';
function solve(arr) {
    let objNameProperty = arr[0],
        nameValue = arr[1],
        objAgeProperty = arr[2],
        ageValue = arr[3],
        objGenderProperty = arr[4],
        genderValue = arr[5],
        testObj = {
            [objNameProperty]: nameValue,
            [objAgeProperty]: ageValue,
            [objGenderProperty]: genderValue
        };

    console.log(testObj);
}
//Test the code
// solve(['name', 'Pesho', 'age', '23', 'gender', 'male']);