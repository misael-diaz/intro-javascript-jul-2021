/*

source: conditionals-exercise-11.js
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

asks users to input a number, prints `bingbong' if the number is both a multiple of
three and five, prints `bing' if it is a multiple of three, prints `bong' if it is
a multiple of five, and prints the number otherwise.

*/
rl.question("enter an integral number: ", function(num) {

	let n = parseInt(num);	// converts string into an integer

	if (n % 3 == 0)
	// it is a multiple of three
	{
		if (n % 5 == 0)
		// it is a multiple of both three and five
		{
			console.log(`bingbong`);
		}
		else
		// it is a multiple of three but not of five
		{
			console.log(`bing`);
		}
	}
	else if (n % 5 == 0)
	// it is a multiple of five but not of three
	{
		console.log(`bong`);
	}
	else
	// it is a number whose multiples differ from both three and five
	{
		console.log(`given number is ${n}`);
	}

	rl.close();
});
