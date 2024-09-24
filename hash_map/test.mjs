import {HashMap} from './hashMap.mjs';

const test = new HashMap();

test.set('apple', 'red')
test.set('banana', 'yellow')
test.set('carrot', 'orange')
test.set('dog', 'brown')
test.set('elephant', 'gray')
test.set('frog', 'green')
test.set('grape', 'purple')
test.set('hat', 'black')
test.set('ice cream', 'white')
test.set('jacket', 'blue')
test.set('kite', 'pink')
test.set('lion', 'golden')
// test.set('zebra', 'stripe')
// test.set('cherry', 'crimson');

// console.log(test.entries());
// console.log(test.keys());
// console.log(test.values());
// console.log(test.length());
// console.log(test.remove('lion'));
// console.log(test.clear());
// console.log(test.entries());
// console.log(test.length());
// console.log(test.has('hat'));
// console.log(test.get('jacket'));
console.log(test.capacity);
console.log(test);

