/*

source: conditionals-exercise-8.js
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


// asks users to input a number
rl.question("input any number: ", function(num) {

	// checks if the number is divisible by five and reports the outcome
	if (num % 5 == 0)
	{
		console.log(`${num} is a multiple of 5`);
	}
	else
	{
		console.log(`${num} is not a multiple of 5`);
	}

	rl.close();
});
