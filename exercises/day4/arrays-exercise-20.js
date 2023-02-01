/*

source: arrays-exercise-20.js
author: @misael-diaz
date:   2023-02-01

Synopsis:
Arrays and Loops Exercise.


Copyright (c) 2023 Misael Diaz-Maldonado
This file is released under the GNU General Public License as published
by the Free Software Foundation, either version 3 of the License, or
(at your option) any later version.


References:
[0] Getting input from user via nodejs:
	stackoverflow.com/questions/61394928/get-user-input-through-node-js-console
[1] string to numeric:
www.w3docs.com/snippets/javascript/how-to-convert-string-to-number-in-javascript.html
[2] loops: https://www.w3schools.com/js/js_loop_for.asp
[3] arrays: https://www.geeksforgeeks.org/arrays-in-javascript/
[4] strings:
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String

*/


// creates (a constant) array of names (devs recommend their usage whenever possible)
const names = [
  ["Pablo", "Maria", "Pedro"],
  ["Diana", "Juan", "Federico"],
  ["Roberto", "Daniel", "Sandra"]
];


// outputs the names in the requested format
// NOTE: As in Java we can query the dimensions of the second-rank array to traverse it
for(let i = 0; i != names.length; ++i)
{
	console.log(`Group ${i + 1}:`);
	for(let j = 0; j != names[0].length; ++j)
	{
		console.log(`  ${names[i][j]}`);
	}
}
