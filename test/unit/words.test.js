import words from '../../src/words.js';

describe('words', () => {
    it('should return an array of words when the input is a string without pattern', () => {
        const string = 'The quick brown fox jumps over the lazy dog';
        expect(words(string)).toEqual(['The', 'quick', 'brown', 'fox', 'jumps', 'over', 'the', 'lazy', 'dog']);
    });

    it('should return an array of words that match the pattern when the input is a string with pattern', () => {
        const string = 'The quick brown fox jumps over the lazy dog';
        const pattern = /\w{4,}/g;
        expect(words(string, pattern)).toEqual(['quick', 'brown', 'jumps', 'over', 'lazy']);
    });

    it('should return an empty array when the input is an empty string', () => {
        const string = '';
        expect(words(string)).toEqual([]);
    });
});