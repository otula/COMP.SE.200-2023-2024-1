import ceil from '../../src/ceil.js';
import { toBeOneOf } from 'jest-extended';
expect.extend({ toBeOneOf });

describe('ceil', () => {
    it('should round up a number to the nearest integer', () => {
        expect(ceil(4.006)).toBe(5);
        expect(ceil(6.004)).toBe(7);
        expect(ceil(6040)).toBe(6040);
    });

    it('should round up a negative number to the nearest integer', () => {
        expect(ceil(-4.006)).toBe(-4);
        expect(ceil(-6.004)).toBe(-6);
        expect(ceil(-6040)).toBe(-6040);
    });

    it('should round up a number to the specified precision', () => {
        expect(ceil(6.004, 2)).toBe(6.01);
        expect(ceil(6.004, 5)).toBe(6.00400);
        expect(ceil(6.004, 3)).toBe(6.004);
    });

    it('should round up a number correctly with negative precision given', () => {
        expect(ceil(6040, -2)).toBe(6100);
        expect(ceil(6040, -3)).toBe(7000);
        expect(ceil(6040, -5)).toBe(100000);
    });

    it('should return NaN or 0 for non-numeric values', () => {
        expect(ceil('abc')).toBeOneOf([NaN, 0]);
        expect(ceil(null)).toBeOneOf([NaN, 0]);
        expect(ceil(undefined)).toBeOneOf([NaN, 0]);
        expect(ceil({})).toBeOneOf([NaN, 0]);
        expect(ceil([])).toBeOneOf([NaN, 0]);
        expect(ceil(() => {})).toBeOneOf([NaN, 0]);
    });
});
