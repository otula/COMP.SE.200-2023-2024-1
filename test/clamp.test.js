import clamp from "../src/clamp.js";

describe('clamp', function() {
    it('should not change a number within the accepted range', function() {
	expect(clamp(4, -5, 5)).toEqual(4);
    });
    it('should not change a number which is on the lower bound', function() {
	expect(clamp(-5, -5, 5)).toBe(-5);
    });
    it('should not change a number which is on the upper bound', function() {
	expect(clamp(5, -5, 5)).toBe(5);
    });
    it('should return the lower bound for a smaller number', function() {
	expect(clamp(-10, -5, 5)).toBe(-5);
    });
    it('should return the upper bound for a larger number', function() {
	expect(clamp(10, -5, 5)).toBe(5);
    });
    it('should return null on the null value', function() {
	expect(clamp(null, -5, 5)).toBe(null);
    });
});
