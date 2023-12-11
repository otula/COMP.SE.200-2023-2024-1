import toNumber from '../../src/toNumber.js';

describe('toNumber', () => {
    it('should return the number when the input is a number', () => {
        expect(toNumber(3)).toBe(3);
    });

    it('should return NaN when the input is a symbol', () => {
        const symbol = Symbol('test');
        expect(toNumber(symbol)).toBeNaN();
    });

    it('should return the number representation when the input is an object with valueOf function', () => {
        const object = {
            valueOf: () => 5
        };
        expect(toNumber(object)).toBe(5);
    });

    it('should return the number representation when the input is an object without valueOf function', () => {
        const object = {
            toString: () => '5'
        };
        expect(toNumber(object)).toBe(5);
    });

    it('should return the number when the input is a string representing a number', () => {
        expect(toNumber('3')).toBe(3);
    });

    it('should return the number when the input is a string representing a binary number', () => {
        expect(toNumber('0b11')).toBe(3);
    });

    it('should return the number when the input is a string representing an octal number', () => {
        expect(toNumber('0o10')).toBe(8);
    });

    it('should return NaN when the input is a string representing a bad hexadecimal number', () => {
        expect(toNumber('0x1g')).toBeNaN();
    });

    it('should return the number when the input is a string representing a hexadecimal number', () => {
        expect(toNumber('0x1f')).toBe(31);
    });
});