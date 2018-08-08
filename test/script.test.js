var simple = require('../libs/script');

test('should return false', () => {
    expect(simple.math(0)).toBe(false);
});
test('should return true', () => {
    expect(simple.math(1)).toBe(true);
});
test('should return null', () => {
    expect(simple.math(2)).toBe(null);
});