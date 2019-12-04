describe('palindrome', () => {

    let input;

    afterEach(() => {
        input = null;
    });

    xit('should return true if the string is a palindrome', () => {
        input = 'A man, a plan, a canal: Panama';
        expect(isPalindrome(input)).toEqual(true);
    });


    it('should return false if the string is not a palindrome', () => {
        input = 'race a car';
        expect(isPalindrome(input)).toEqual(false);
    });


});
