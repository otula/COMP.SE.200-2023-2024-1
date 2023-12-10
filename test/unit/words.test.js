// FILEPATH: /G:/repositories/COMP.SE.200-assignment/test/unit/words.test.js

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

    it('should return an array of words that match the pattern when the input is a string with special characters', () => {
        const string = 'The_quick-brown.fox jumps_over the_lazy dog';
        const pattern = /\w+/g;
        expect(words(string, pattern)).toEqual(['The', 'quick', 'brown', 'fox', 'jumps', 'over', 'the', 'lazy', 'dog']);
    });

    it('should return an array of words when the input is a string with unicode characters', () => {
        const string = 'The quick brown 🦊 jumps over the lazy 🐶';
        expect(words(string)).toEqual(['The', 'quick', 'brown', 'jumps', 'over', 'the', 'lazy']);
    });
});