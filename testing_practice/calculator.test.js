import { calculator } from "./func";

test('Add', () => {
    expect(calculator.add(1,2)).toBe(3);
});

test('Add negatives', () => {
    expect(calculator.add(1,-2)).toBe(-1);
});

test('Subtract', () => {
    expect(calculator.subtract(10,6)).toBe(4);
});

test('Subtract negatives', () => {
    expect(calculator.subtract(4,-6)).toBe(10);
});

test('Divide', () => {
    expect(calculator.divide(10,2)).toBe(5);
});

test('Divide with decimal', () => {
    expect(calculator.divide(10,4)).toBe(2.5);
});

test('Divide with zero', () => {
    expect(calculator.divide(10,0)).toBe(Infinity);
});

test('Divide zero by zero', () => {
    expect(calculator.divide(0,0)).toBe(NaN);
});

test('Multiply', () => {
    expect(calculator.multiply(5,2)).toBe(10);
});

test('Multiply with zero', () => {
    expect(calculator.multiply(2,0)).toBe(0);
});

test('Multiply with decimal', () => {
    expect(calculator.multiply(2,2.25)).toBe(4.5);
})