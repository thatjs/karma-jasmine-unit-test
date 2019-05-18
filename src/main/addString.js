// Given two non negative integers represented as strings, return the sum as a string
// both can only contain 0-9
// no leading zeros

function addStrings(num1, num2) {

    function stringToInt(str) {
        let tens = 1;
        let num = 0;

        for (let i = 0, len = str.length; i < len; i++) { // O(n)
            let digit = str[len - 1 - i];
            num += (digit - 0) * tens;
            tens *= 10;
        }
        return num;
    }

    let sum = stringToInt(num1) + stringToInt(num2); // O(n + m)
    return sum.toString();
}

// test
// let num1;
// let num2;

// num1 = '1';
// num2 = '2';
// // '3'
// console.log('strings 1 + 2 = ', addStrings(num1, num2));

// num1 = '0';
// num2 = '0';
// // '0'
// console.log('strings 0 + 0 = ', addStrings(num1, num2));

// num1 = '1010';
// num2 = '15';
// // '1025'
// console.log('strings 1010 + 25 = ', addStrings(num1, num2));

// num1 = '10211';
// num2 = '322';
// // '10533'
// console.log('strings 10211 + 322 = ', addStrings(num1, num2));

// this works because:
// 10211 = 10000 + 0000 + 200 + 10 + 1

