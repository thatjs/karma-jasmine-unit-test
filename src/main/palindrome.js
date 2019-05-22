// Given a string, determine if it is a palindrome, considering only alphanumeric characters and ignoring cases.

function isPalindrome(str) {
    let valid = false;
    str = str.toLowerCase(); // O(n)
    let parsed = str.replace(/[^0-9a-z]/g, ''); // O(nm)
    let reversed = parsed.split('').reverse().join('');

    if (parsed === reversed) {
        valid = true;
    }

    return valid;
}

// test
// let first = 'A man, a plan, a canal: Panama';
// console.log(first);
// console.log(isPalindrome(first));

// let second = 'race a car';
// console.log(second);
// console.log(isPalindrome(second));
