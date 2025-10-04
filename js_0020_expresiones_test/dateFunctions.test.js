const {
    getCurrentDate,
    getYear,
    getMonth,
    getDayOfMonth,
    changeYear,
    addDays,
    getDayOfWeek,
    formatDate,
    isBefore,
    isAfter
} = require('./dateFunctions');

test('get the current date', () => {
    const now = new Date();
    expect(getCurrentDate()).toEqual(expect.any(Date));
});

test('get the year of a date', () => {
    const date = new Date('2024-01-01');
    expect(getYear(date)).toBe(2024);
});

test('get the month of a date', () => {
    const date = new Date('2024-01-01');
    expect(getMonth(date)).toBe(1);
});

test('get the day of the month', () => {
    const date = new Date('2024-01-15');
    expect(getDayOfMonth(date)).toBe(15);
});

test('change the year of a date', () => {
    const date = new Date('2024-01-01');
    expect(changeYear(date, 2025).getFullYear()).toBe(2025);
});

test('add days to a date', () => {
    const date = new Date('2024-01-01');
    expect(addDays(date, 30).getDate()).toBe(31);
});

test('get the day of the week', () => {
    const date = new Date('2024-01-01'); // This is a Monday
    expect(getDayOfWeek(date)).toBe(1);
});

test('format a date as dd/mm/yyyy', () => {
    const date = new Date('2024-01-01');
    expect(formatDate(date)).toBe('1/1/2024');
});

test('check if one date is before another', () => {
    const date1 = new Date('2024-01-01');
    const date2 = new Date('2024-01-02');
    expect(isBefore(date1, date2)).toBe(true);
});

test('check if one date is after another', () => {
    const date1 = new Date('2024-01-02');
    const date2 = new Date('2024-01-01');
    expect(isAfter(date1, date2)).toBe(true);
});
