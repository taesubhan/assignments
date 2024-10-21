import { reverseString } from "./func.js";

test('Reverse string', () => {
    expect(reverseString('coder')).toBe('redoc');
});

test('No value as argument', () => {
    expect(reverseString()).toBeUndefined();
});

test('Empty string as argument', () => {
    expect(reverseString('')).toBe('');
})