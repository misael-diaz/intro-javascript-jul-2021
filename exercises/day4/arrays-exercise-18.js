/*

source: arrays-exercise-18.js
author: @misael-diaz
date:   2023-02-01

Synopsis:
Basic Prompt Exercise.


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


// NOTE: prompt() method does not work with nodejs
const readline = require("readline");
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});


// creates (a constant) array of names (devs recommend their usage whenever possible)
const names = ["Peter", "Paul", "Mary", "John", "Dayane"];


/*

Asks the user to input two names, the first name is pushed at the back of a new array
of names, and the second name is written at the third position of the new array ("Mary"
gets replaced).

*/


rl.question("enter a name> ", function(first) {

	// creates a new array with the given name at the back of the array:

	/*

	NOTE:
	We are doing what the push() method would do for us if it had to resize the
	original array. The difference is that we are doing the work elsewhere instead
	of in-place.

	*/

	// allocates a new array of names with the needed storage capacity
	let nms = new Array(names.length + 1);

	// copies names in the original array into the new array:
	for (let i = 0; i != names.length; ++i)
	{
		nms[i] = names[i];
	}


	// pushes the given name at the back of the array:


	// instantiates a string at the back (otherwise we get `undefined' there)
	nms[names.length] = new String();
	// writes the name at the back (now the type is known and the assignment works)
	nms[names.length] = first;


	// asks the user for another name
	rl.question("enter another name> ", function(second) {

		// replaces the third entry (preceeded by two entries) with the 2nd name
		nms[2] = second;

		// prints the names on the console
		for (let i = 0; i != nms.length; ++i)
		{
			console.log(`${nms[i]}`);
		}

		rl.close();

	});

});
