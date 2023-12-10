// FILEPATH: /G:/repositories/COMP.SE.200-assignment/test/unit/toString.test.js

import toString from '../../src/toString.js';

describe('toString', () => {
    it('should return the string when the input is a string', () => {
        expect(toString('test')).toBe('test');
    });

    it('should return the string representation when the input is a number', () => {
        expect(toString(3)).toBe('3');
    });

    it('should return the string representation when the input is a boolean', () => {
        expect(toString(true)).toBe('true');
    });

    it('should return the string representation when the input is null', () => {
        expect(toString(null)).toBe('');
    });

    it('should return the string representation when the input is undefined', () => {
        expect(toString(undefined)).toBe('');
    });

    it('should return the string representation when the input is an array', () => {
        expect(toString([1, 2, 3])).toBe('1,2,3');
    });

    it('should return the string representation when the input is an object', () => {
        const object = {
            toString: () => 'test'
        };
        expect(toString(object)).toBe('test');
    });

    it('should return the string representation when the input is a symbol', () => {
        const symbol = Symbol('test');
        expect(toString(symbol)).toBe(symbol.toString());
    });

    it('should return "-0" when the input is -0', () => {
        expect(toString(-0)).toBe('-0');
    });
});