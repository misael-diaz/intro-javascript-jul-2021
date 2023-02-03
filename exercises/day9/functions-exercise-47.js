/*

source: functions-exercise-47.js
author: @misael-diaz
date:   2023-02-02

Synopsis:
Functions Exercise.


Copyright (c) 2023 Misael Diaz-Maldonado
This file is released under the GNU General Public License as published
by the Free Software Foundation, either version 3 of the License, or
(at your option) any later version.


References:
[0] Getting input from user via nodejs:
	stackoverflow.com/questions/61394928/get-user-input-through-node-js-console
[1] string to numeric methods:
www.w3docs.com/snippets/javascript/how-to-convert-string-to-number-in-javascript.html
[2] OOP: developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Working_with_Objects
[3] traversing properties:
stackoverflow.com/questions/4366104/traverse-through-javascript-object-properties
[4] for-each:
https://stackoverflow.com/questions/9329446/loop-for-each-over-an-array-in-javascript
[5] filter:
developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter
[6] arrow functions:
developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Arrow_functions
[7] destructuring assignments:
developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment

*/


numel = 16;
let numbers = new Array();
// pushes the sequence in the asymmetric range [0, 16) unto the back the array
for (let i = 0; i != numel; ++i)
{
        numbers.push(i);
}


// Note: the brackets `[]' are used for destructuring iterable objects
const [first, second, ...rest] = numbers;

console.log(`first: ${first}, second: ${second}`);


const person = {
	name: "Peter",
	age: 20
}


// Note: the braces `{}' are used for destructuring the components of an object
const {name, age, ...rem} = person;
console.log(`name: ${name}, age: ${age}`);
