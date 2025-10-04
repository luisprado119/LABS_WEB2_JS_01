const {
    roundNumber,
    ceilNumber,
    floorNumber,
    findMax,
    findMin,
    calculatePower,
    generateRandom,
    convertRadiansToDegrees,
    findSquareRoot,
    calculateLogarithm
} = require('./mathFunctions');

test('rounds 2.5 to 3', () => {
    expect(roundNumber(2.5)).toBe(3);
});

test('ceil 2.1 to 3', () => {
    expect(ceilNumber(2.1)).toBe(3);
});

test('floor 2.9 to 2', () => {
    expect(floorNumber(2.9)).toBe(2);
});

test('finds max in list of numbers', () => {
    expect(findMax(1, 2, 3, 4, 5)).toBe(5);
});

test('finds min in list of numbers', () => {
    expect(findMin(1, 2, 3, 4, 5)).toBe(1);
});

test('calculates power of 2^3 to 8', () => {
    expect(calculatePower(2, 3)).toBe(8);
});

test('generates random number is less than 1', () => {
    const random = generateRandom();
    expect(random).toBeGreaterThanOrEqual(0);
    expect(random).toBeLessThan(1);
});

test('converts PI radians to 180 degrees', () => {
    expect(convertRadiansToDegrees(Math.PI)).toBeCloseTo(180);
});

test('finds square root of 16 to 4', () => {
    expect(findSquareRoot(16)).toBe(4);
});

test('calculates natural logarithm of e^1 to 1', () => {
    expect(calculateLogarithm(Math.E)).toBeCloseTo(1);
});
