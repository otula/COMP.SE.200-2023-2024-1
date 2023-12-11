import get from '../../src/get.js';

describe('get', () => {
    it('should return the value at path of object', () => {
        const object = { 'a': [{ 'b': { 'c': 3 } }] };
        expect(get(object, 'a[0].b.c')).toBe(3);
    });

    it('should return undefined if value at path of object does not exist', () => {
        const object = { 'a': [{ 'b': { 'c': 3 } }] };
        expect(get(object, 'a[0].b.d')).toBeUndefined();
    });

    it('should return default value if value at path of object does not exist and default value is provided', () => {
        const object = { 'a': [{ 'b': { 'c': 3 } }] };
        expect(get(object, 'a[0].b.d', 4)).toBe(4);
    });

    it('should return undefined if object is null or undefined', () => {
        expect(get(null, 'a.b.c')).toBeUndefined();
        expect(get(undefined, 'a.b.c')).toBeUndefined();
    });

    it('should return default value if object is null or undefined and default value is provided', () => {
        expect(get(null, 'a.b.c', 5)).toBe(5);
        expect(get(undefined, 'a.b.c', 5)).toBe(5);
    });
});