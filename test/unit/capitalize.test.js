import capitalize from '../../src/capitalize.js'

describe('capitalize', () => {
    test('should capitalize the first character of a string', () => {
        expect(capitalize('hello')).toBe('Hello')
    })

    test('should convert the remaining characters to lower case', () => {
        expect(capitalize('MiXEdCaSe')).toBe('Mixedcase')
    })

    test('should handle spaces in string', () => {
        expect(capitalize('string with multiple spaces')).toBe('String with multiple spaces')
    })

    test('should handle empty string', () => {
        expect(capitalize('')).toBe('')
    })

    test('should handle non-string values', () => {
        expect(capitalize(123)).toBe('123')
        expect(capitalize(null)).toBe('Null')
        expect(capitalize(undefined)).toBe('Undefined')
        expect(capitalize(true)).toBe('True')
        expect(capitalize(false)).toBe('False')
        expect(capitalize([])).toBe('')
        expect(capitalize([1, 2, 3])).toBe('1,2,3')
        expect(capitalize({})).toBe('[object object]')
    })
})

