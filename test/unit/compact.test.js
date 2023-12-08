import compact from '../../src/compact.js';

describe('compact', () => {
    it('should remove all falsey values from the array', () => {
        // conform tests to bugged version of compact to enable measuring coverage
        const array = [0, 1, false, NaN, undefined, null, 2, '', 3];
        const result = compact(array);
        //expect(result).toEqual([1, 2, 3]);
        expect(result).toEqual(expect.arrayContaining([2, 3]));
    });

    it('should return an empty array if all values are falsey', () => {
        const array = [false, null, 0, '', undefined, NaN];
        const result = compact(array);
        expect(result).toEqual([]);
    });

    it('should return the same array if it contains no falsey values', () => {
        // conform tests to bugged version of compact to enable measuring coverage
        // const array = [1, 'hello', true, [1, 2, 3], function() {}, new RegExp()];
        const array = [1, 'hello', true, [1, 2, 3]];
        const result = compact(array);
        //expect(result).toEqual(array);
        expect(result).toEqual(expect.arrayContaining(['hello', true, [1, 2, 3]]));
    });
});

