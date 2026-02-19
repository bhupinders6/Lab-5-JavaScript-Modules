import multiply, { add, subtract} from './mathModule.js';
import { toUpperCase, toLowerCase } from './stringModule.js';
import { findMax, reverseArray } from './arrayModule.js';
import { addAndLogUpper } from './mathModule.js';

console.log('Add: ', add(9, 3));
console.log('Subtract: ', subtract(5, 3));
console.log('Uppercase: ', toUpperCase('hello'));
console.log('Lowercase: ', toLowerCase('PEOPLE'));
console.log('Multiply: ', multiply(4, 5));
console.log('Max: ', findMax([1, 2, 3, 4, 5]));  
console.log('Reversed: ', reverseArray([1, 2, 3]));  
addAndLogUpper(10, 20);

const numbers = [10, 45, 23, 70, 8,];
const max = findMax(numbers);
const multiplied = multiply(max, 3);
const result = toUpperCase(multiplied.toString());

console.log('Final Challenge Result: ', result);