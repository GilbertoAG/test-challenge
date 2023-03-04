const { sum, substract, multiply, divide, power } = require('./calculator');

const calculator = require('./calculator');

test('adds a + b', () => {
    expect(calculator.sum(7, 7)).toBe(14);
    //
});

test('substracts a - b', () => {
    expect(calculator.substract(9, 6)).toBe(3);
   //
});

test('multiplies a * b', () => {
    expect(calculator.multiply(6, 6)).toBe(36);
    //
});

test('divides a / b', () => {
    expect(calculator.divide(25, 5)).toBe(5);
    // Consider decimals
})

test('Raises to power a ^ b', () => {
    expect(calculator.power(6, 2)).toBe(36);
    //
})

