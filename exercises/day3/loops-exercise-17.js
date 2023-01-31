/*

source: conditionals-exercise-7.js
author: @misael-diaz
date:   2023-01-31

Synopsis:
Prompt Exercise.

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
[4] stackoverflow.com/questions/24464404/how-to-readline-infinitely-in-node-js

*/


// NOTE: prompt() method does not work with nodejs
const readline = require("readline");
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});


// sets the lower limit and upper (exclusive) limit
const min = 1
const max = 11
// generates a uniformly distributed floating-point number in [0, 1)
const urand = Math.random()
// generates a uniformly distributed integer in the asymmetric range [0, 11)
const r = min + Math.floor( urand * (max - min) )


var recursiveReadLine = function ()
// implements a recursive method to emulate an infinite loop
{
	// asks users to input a number from one to ten
	rl.question("write any number from one to ten: ", function(num) {

		let n = parseInt(num);	// converts string into an integer

		if (n == r)
		// lets the users know that they have guessed it
		{
			console.log(`you guessed it (${r})`);
			rl.close();	// we are done so close readline
		}
		else
		// prompts again the user for another number
		{
			recursiveReadLine();
		}

	});
}


// launch the method that ask users to guess a number from one to ten until they get it
recursiveReadLine();


/*

COMMENTS:
Tried nesting a while loop to the original source (exercise 7) but it won't wait for the
user input. Sought stackoverflow for possible solutions and found an elegant one, see
reference [4]. My solution is based on it.

*/
