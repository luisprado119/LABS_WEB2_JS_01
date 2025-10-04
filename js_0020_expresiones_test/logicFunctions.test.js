const {
    isEven,
    isGreater,
    isLessOrEqual,
    isInRange,
    areEqual,
    areNotEqual,
    eitherOr,
    neitherNor,
    bothAnd,
    exclusiveOr
} = require('./logicFunctions');

test('checks if 4 is even', () => {
    expect(isEven(4)).toBe(true);
});

test('checks if 5 is greater than 3', () => {
    expect(isGreater(5, 3)).toBe(true);
});

test('checks if 3 is less than or equal to 5', () => {
    expect(isLessOrEqual(3, 5)).toBe(true);
});

test('checks if 10 is in range between 1 and 20', () => {
    expect(isInRange(10, 1, 20)).toBe(true);
});

test('checks if two numbers are equal', () => {
    expect(areEqual(5, 5)).toBe(true);
});

test('checks if two numbers are not equal', () => {
    expect(areNotEqual(5, 4)).toBe(true);
});

test('either 5 is truthy or 0 is truthy', () => {
    expect(eitherOr(5, 0)).toBe(true);
});

test('neither 0 nor null is truthy', () => {
    expect(neitherNor(0, null)).toBe(true);
});


test('exclusive or between 5 and 0', () => {
    expect(exclusiveOr(5, 0)).toBe(true);
});
