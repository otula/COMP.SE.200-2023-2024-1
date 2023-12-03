import capitalize from "../src/capitalize.js";

describe('capitalize', function() {
    it('should turn the first letter of a lowercase string to uppercase', function() {
	expect(capitalize("example")).toBe("Example");
    });
    
    it('should capitalize undefined value as a string', function() {
	expect(capitalize(undefined)).toBe("Undefined");
    });
    
    it('should turn all uppercase letters to lowercase except the first one', function() {
	expect(capitalize("FRED")).toBe("Fred");
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
    
    it('should capitalize the first element of an array and use , as a separator', function() {
	expect(capitalize(["fiRST", "SECOND", "ThirD"])).toBe("First,second,third");
    });

    it('should use the usual notation for objects', function() {
	expect(capitalize({"a": 1, "b": 2, 3: null})).toBe("[object object]");
    });
});
