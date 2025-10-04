const {
    getStringLength,
    toUpperCase,
    toLowerCase,
    includesSubstring,
    startsWithPrefix,
    endsWithSuffix,
    repeatString,
    replaceSubstring,
    trimString,
    concatenateStrings
} = require('./stringFunctions');

test('get length of "hello"', () => {
    expect(getStringLength("hello")).toBe(5);
});

test('convert "hello" to upper case', () => {
    expect(toUpperCase("hello")).toBe("HELLO");
});

test('convert "HELLO" to lower case', () => {
    expect(toLowerCase("HELLO")).toBe("hello");
});

test('"hello world" includes "world"', () => {
    expect(includesSubstring("hello world", "world")).toBe(true);
});

test('"hello" starts with "he"', () => {
    expect(startsWithPrefix("hello", "he")).toBe(true);
});

test('"hello" ends with "lo"', () => {
    expect(endsWithSuffix("hello", "lo")).toBe(true);
});

test('repeat "hi" 3 times', () => {
    expect(repeatString("hi", 3)).toBe("hihihi");
});

test('replace "world" with "there" in "hello world"', () => {
    expect(replaceSubstring("hello world", "world", "there")).toBe("hello there");
});

test('trim whitespace from " hello "', () => {
    expect(trimString(" hello ")).toBe("hello");
});

test('concatenate "hello" and " world"', () => {
    expect(concatenateStrings("hello", " world")).toBe("hello world");
});
