describe('addString', () => {

    let num1;
    let num2;

    afterEach(() => {
        num1 = num2 = null;
    });

    it('should add strings 1 + 2', () => {
        num1 = '1';
        num2 = '2';
        expect(addStrings(num1, num2)).toEqual('3');
    });

    it('should add strings 0 + 0', () => {
        num1 = '0';
        num2 = '0';
        expect(addStrings(num1, num2)).toEqual('0');
    });

    it('should add strings 1010 + 15', () => {
        num1 = '1010';
        num2 = '15';
        expect(addStrings(num1, num2)).toEqual('1025');
    });

    it('should add strings 10211 + 322', () => {
        num1 = '10211';
        num2 = '322';
        expect(addStrings(num1, num2)).toEqual('10533');
    });

});

