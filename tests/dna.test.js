const dna = require ('../dna');

test('returns a new string with any non-canonical DNA base values removed',() => {
    expect(dna('CTAGGGA')).toBe('CTAGGGA');
})

test('Make the function case sensitive - meaning c (lower case) should be removed from the string, but C (upper case) is a good value and should remain',() => {
    expect(dna('cCTAGggaA')).toBe('cCTAGggaA');
})

test('If the DNA string is empty, just return an empty string.',() => {
    expect(dna('')).toBe('');
})