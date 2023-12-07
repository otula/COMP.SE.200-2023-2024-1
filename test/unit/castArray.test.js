import castArray from '../../src/castArray.js';

describe('castArray', () => {
    it('should cast a non-array value to an array', () => {
        expect(castArray(1)).toEqual([1]);
        expect(castArray({ 'a': 1 })).toEqual([{ 'a': 1 }]);
        expect(castArray('abc')).toEqual(['abc']);
        expect(castArray(null)).toEqual([null]);
        expect(castArray(undefined)).toEqual([undefined]);
        expect(castArray()).toEqual([]);
    });

    it('should return the same array if already an array', () => {
        const array = [1, 2, 3];
        expect(castArray(array)).toBe(array);
    });

    // Note: This behaviour can be subject to change in the future.
    it('should cast only first given argument to array', () => {
        expect(castArray(1, {'a': 1}, 'abc', null, undefined)).toEqual([1]);
    });
});
