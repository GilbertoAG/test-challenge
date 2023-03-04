const factorial = require ('../factorial')

test('el factorial de 0 debe ser 1', () => {
    expect(factorial(0)).toBe(1);
})

test('el factorial de 1 debe ser 1', () => {
    expect(factorial(1)).toBe(1);
})

test('el factorial de 2 debe ser 2', () => {
    expect(factorial(2)).toBe(2);
})
test('el factorial de 3 debe ser 6', () => {
    expect(factorial(3)).toBe(6);
})
test('el factorial de 4 debe ser 24', () => {
    expect(factorial(4)).toBe(24);
})
test('el factorial de 5 debe ser 120', () => {
    expect(factorial(5)).toBe(120);
})