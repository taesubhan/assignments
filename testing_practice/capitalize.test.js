import { capitalize } from "./func.js";


test('Capitalize first letter', () => {
    expect(capitalize('hello')).toBe('Hello');
});

test('Only one character', () => {
    expect(capitalize('h')).toBe('H');
})

test('No value in argument', () => {
    expect(capitalize()).toBeUndefined();
});

test('Blank text in argument', () => {
    expect(capitalize('')).toBe('');
});

