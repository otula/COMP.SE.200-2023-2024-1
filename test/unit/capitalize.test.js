import capitalize from '../../src/capitalize.js'

describe('capitalize', () => {
    it('should capitalize the first character of a string', () => {
        expect(capitalize('hello')).toBe('Hello')
    })

    it('should convert the remaining characters to lower case', () => {
        expect(capitalize('MiXEdCaSe')).toBe('Mixedcase')
    })

    it('should handle spaces in string', () => {
        expect(capitalize('string with multiple spaces')).toBe('String with multiple spaces')
    })

    it('should handle empty string', () => {
        expect(capitalize('')).toBe('')
    })

    it('should handle non-string values', () => {
        expect(capitalize(123)).toBe('123')
        expect(capitalize(null)).toBe('Null')
        expect(capitalize(undefined)).toBe('Undefined')
        expect(capitalize(true)).toBe('True')
        expect(capitalize(false)).toBe('False')
        expect(capitalize([])).toBe('')
        expect(capitalize([1, 2, 3])).toBe('1,2,3')
        expect(capitalize({})).toBe('[object object]')
        expect(capitalize(Symbol("foo"))).toBe('Symbol(foo)');
    })
})

