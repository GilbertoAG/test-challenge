
/* 2. Write a function that takes in a DNA string (for example 'CTAGGGTA') and returns a new string with any non-canonical DNA base values removed. Canonical base values are single characters: 'C', 'T', 'A', and 'G' only. Make the function case sensitive - meaning 'c' (lower case) should be removed from the string, but 'C' (upper case) is a good value and should remain. If the DNA string is empty, just return an empty string. */

function dna(dnaString){
    const canonicalBases = ['C', 'T', 'A', 'G'];
    let newString = '';
    
    for (let i = 0; i < dnaString.length; i++) {
        const canonicalBase = dnaString[i];
        if (canonicalBases.includes(canonicalBase.toUpperCase())) {
            newString += canonicalBase;
        }
    }
    return newString;
}



module.exports = dna;