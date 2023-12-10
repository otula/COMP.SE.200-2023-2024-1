// FILEPATH: /G:/repositories/COMP.SE.200-assignment/test/unit/drop.test.js

import drop from '../../src/drop.js';

describe('drop', () => {
    it('should return the array as is when n is 0', () => {
        const array = [1, 2, 3];
        expect(drop(array, 0)).toEqual([1, 2, 3]);
    });

    it('should drop the first n elements when n is less than the array length', () => {
        const array = [1, 2, 3];
        expect(drop(array, 2)).toEqual([3]);
    });

    it('should return an empty array when n is equal to the array length', () => {
        const array = [1, 2, 3];
        expect(drop(array, 3)).toEqual([]);
    });

    it('should return an empty array when n is more than the array length', () => {
        const array = [1, 2, 3];
        expect(drop(array, 4)).toEqual([]);
    });

    it('should drop the first element when n is not provided', () => {
        const array = [1, 2, 3];
        expect(drop(array)).toEqual([2, 3]);
    });

    it('should return an empty array when the input array is null or undefined', () => {
        expect(drop(null)).toEqual([]);
        expect(drop(undefined)).toEqual([]);
    });
});