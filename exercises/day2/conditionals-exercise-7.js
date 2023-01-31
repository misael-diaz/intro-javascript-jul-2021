/*

source: conditionals-exercise-7.js
author: @misael-diaz
date:   2023-01-31

Synopsis:
Basic Prompt and Conditionals Exercise.

Copyright (c) 2023 Misael Diaz-Maldonado
This file is released under the GNU General Public License as published
by the Free Software Foundation, either version 3 of the License, or
(at your option) any later version.

References:
[0] Getting input from user via nodejs:
	stackoverflow.com/questions/61394928/get-user-input-through-node-js-console
[1] string to numeric:
www.w3docs.com/snippets/javascript/how-to-convert-string-to-number-in-javascript.html
[2] conditionals: www.w3schools.com/js/js_if_else.asp
[3] math: developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math

*/


// NOTE: prompt() method does not work with nodejs
const readline = require("readline");
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});


// asks users to input a number from one to ten
rl.question("write any number from one to ten: ", function(num) {

	// sets the lower limit and upper (exclusive) limit
	const min = 1
	const max = 11
	// generates a uniformly distributed floating-point number in [0, 1)
	const urand = Math.random()

	// generates a uniformly distributed integer in the asymmetric range [0, 11)
	const r = min + Math.floor( urand * (max - min) )

	let n = parseFloat(num);	// converts string into a floating-point number

	// checks if the number is equal to the random number
	if (n == r)
	{
		console.log(`you guessed it`);
	}
	else
	{
		console.log(`try again (${r})`);
	}

	rl.close();
});
