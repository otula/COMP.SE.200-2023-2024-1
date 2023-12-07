import isObject from '../../src/isObject.js';

describe('isObject', () => {
    it('should return true for objects', () => {
        expect(isObject({})).toBe(true);
        expect(isObject([])).toBe(true);
        expect(isObject(new RegExp())).toBe(true);
        expect(isObject(new Number(0))).toBe(true);
        expect(isObject(new String(''))).toBe(true);
    });

    it('should return true for functions', () => {
        expect(isObject(() => {})).toBe(true);
        expect(isObject(function() {})).toBe(true);
        expect(isObject(class {})).toBe(true);
    });

    it('should return false for non-objects', () => {
        expect(isObject(null)).toBe(false);
        expect(isObject(undefined)).toBe(false);
        expect(isObject(0)).toBe(false);
        expect(isObject('')).toBe(false);
        expect(isObject(true)).toBe(false);
    });
});

