import { caesarCipher } from "./func";

test('Caesar Cipher', () => {
    expect(caesarCipher('abc', 3)).toBe('def');
});

test('Alphabet wrapping', () => {
    expect(caesarCipher('xyz', 3)).toBe('abc');
});

test('Different case', () => {
    expect(caesarCipher('HeLLo', 3)).toBe('KhOOr');
});

test('Punctuations', () => {
    expect(caesarCipher('Hello, World!', 3)).toBe('Khoor, Zruog!');
});