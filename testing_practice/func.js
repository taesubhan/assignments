export function capitalize(text) {
    return text ? text.charAt(0).toUpperCase() + text.slice(1) : text;
}

export function reverseString(text) {
    return text ? text.split('').reverse().join('') : text;
    
}

export const calculator = {
    add(num1, num2) {
        return num1 + num2;
    },

    subtract(num1, num2) {
        return num1 - num2;
    },

    divide(num1, num2) {
        return num1 / num2;
    },

    multiply(num1, num2) {
        return num1 * num2;
    }
}

function getNewCode(code, max, min) {
    return String.fromCharCode(code > max ? min + (code - max - 1) : code);
}

export function caesarCipher(text, key) {
    const UpperAlphaMin = 65;
    const UpperAlphaMax = 90;
    const LowerAlphaMin = 97;
    const LowerAlphaMax = 122;
    let result = '';
    for (let i = 0; i < text.length; i++) {
        const code = text.charCodeAt(i);
        let newCode = code + key;

        if (code >= UpperAlphaMin && code <= UpperAlphaMax) {
            result += getNewCode(newCode, UpperAlphaMax, UpperAlphaMin);
        } else if (code >= LowerAlphaMin && code <= LowerAlphaMax) {
            result += getNewCode(newCode, LowerAlphaMax, LowerAlphaMin);
        } else {
            result += text.charAt(i);
        }
    }
    return result;
}

export function analyzeArray(arr) {
    return {
        average: arr.reduce((accumulator, current) => accumulator + current, 0) / arr.length,
        max: Math.max(...arr),
        min: Math.min(...arr),
        length: arr.length
    };
}