/*

source: functions-exercise-44.js
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
[5]: filter:
developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter

*/


// implementations:


function cheapProducts (prods)
// returns an array of products in accordance with the requirements of this exercise
{
	return prods.filter(p => (p.cost >= 5 && p.cost <= 10) );
}


// main:


let prods = [
  { name: "rice",   cost:  5 },
  { name: "bread",  cost:  3 },
  { name: "tomato", cost:  8 },
  { name: "milk",   cost: 15 }
];


// displays the cheap products on the console
let cheap = cheapProducts(prods);
cheap.forEach(p => {
	console.log(`${p.name}`);
});
