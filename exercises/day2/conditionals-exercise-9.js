/*

source: conditionals-exercise-9.js
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

*/


// NOTE: prompt() method does not work with nodejs
const readline = require("readline");
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});


/*

asks users to input a number and informs them if the number is equal to, greater to, or
less than ten:

*/
rl.question("write a number: ", function(num) {

	let n = parseFloat(num);	// converts string into a floating-point number

	// checks if the number is equal, greater, or less than 10
	if (n == 10)
	{
		console.log(`The number (${n}) is equal to 10`);
	}
	else if (n < 10)
	{
		console.log(`The number (${n}) is less than 10`);
	}
	else
	{
		console.log(`The number (${n}) is greater than 10`);
	}

	rl.close();
});
