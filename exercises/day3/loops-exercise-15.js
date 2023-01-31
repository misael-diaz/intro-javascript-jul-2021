/*

source: loops-exercise-15.js
author: @misael-diaz
date:   2023-01-31

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

*/


// NOTE: prompt() method does not work with nodejs
const readline = require("readline");
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});


// asks the user to input an integral number, then sums the numbers in [1, `number']:
rl.question("enter a integral number greater than zero: ", function(num) {

	// defines the (inclusive) ending value of the for-loop that follows
	const n = parseInt(num)

	let sum = 0;
	// sums the numbers in the symmetric range [i, n]
	for (let i = 1; i <= n; ++i)
	{
		sum += i;
	}

	console.log(`total: ${sum}`);
	rl.close();

});
