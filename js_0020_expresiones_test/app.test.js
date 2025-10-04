// mathExpressions.test.js

const {
    add,
    subtract,
    multiply,
    divide,
    modulus,
    exponent,
    squareRoot,
    cube,
    absolute,
    sine
} = require('./app.js');

test('adds 1 + 2 to equal 3', () => {
    expect(add(1, 2)).toBe(3);
});

test('subtracts 5 - 2 to equal 3', () => {
    expect(subtract(5, 2)).toBe(3);
});

test('multiplies 2 * 3 to equal 6', () => {
    expect(multiply(2, 3)).toBe(6);
});

test('divides 8 / 4 to equal 2', () => {
    expect(divide(8, 4)).toBe(2);
});

test('modulus 10 % 4 to equal 2', () => {
    expect(modulus(10, 4)).toBe(2);
});

test('exponent 2 ^ 3 to equal 8', () => {
    expect(exponent(2, 3)).toBe(8);
});

test('square root of 9 to equal 3', () => {
    expect(squareRoot(9)).toBe(3);
});

        
