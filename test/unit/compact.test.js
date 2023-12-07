import compact from '../../src/compact.js';

describe('compact', () => {
    it('should remove all falsey values from the array', () => {
        //const array = [0, 1, false, NaN, undefined, null, 2, '', 3];
        const array = [0, 1, false, 2, '', 3];
        const result = compact(array);
        console.log(result);
        expect(result).toEqual([1, 2, 3]);
    });

    it('should return an empty array if all values are falsey', () => {
        const array = [false, null, 0, '', undefined, NaN];
        const result = compact(array);
        expect(result).toEqual([]);
    });

    it('should return the same array if it contains no falsey values', () => {
        const array = [1, 'hello', true, [1, 2, 3], function() {}, new RegExp()];
        const result = compact(array);
        console.log(result);
        expect(result).toEqual(array);
    });
});

