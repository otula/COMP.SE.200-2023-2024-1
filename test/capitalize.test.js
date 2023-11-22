import capitalize from "../src/capitalize.js";

describe('capitalize', function(){
    it('should turn the first letter of a lowercase string to uppercase', function() {
	expect(capitalize("example")).toBe("Example");
    });
    it('should capitalize lowercase strings despite them containing a special mark', function() {
	expect(capitalize("exam©le")).toBe("Exam©le");
    });
    it('should turn numbers into a string', function() {
	expect(capitalize(34)).toBe("34");
    });
    it('should leave it as it is when given an empty string', function() {
        expect(capitalize("")).toBe("");
    });
    it('should leave it as it is when given an undefined value', function() {
	expect(capitalize(undefined)).toBe(undefined);
    });
});
