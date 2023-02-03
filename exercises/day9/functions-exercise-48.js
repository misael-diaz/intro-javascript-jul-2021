/*

source: functions-exercise-48.js
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


// defines the requested object literal `auto'
const auto = {
	velocity: 0,
	accelerate: function () { this.velocity += 1; },
	brake: function () { this.velocity -= 1; }
}


// test code:
console.log(`${auto.velocity}`);
auto.accelerate();
console.log(`${auto.velocity}`);
auto.brake();
console.log(`${auto.velocity}`);
