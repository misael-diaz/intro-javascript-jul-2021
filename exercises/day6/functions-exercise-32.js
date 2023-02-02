/*

source: functions-exercise-32.js
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

*/


// NOTE: prompt() method does not work with nodejs
const readline = require("readline");
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});


// implementations:


function color (i)
// maps integer to a color-indicating string
{
	let c = new String();
	switch (i)
	{
		case 1:
			c += "black";
			break;
		case 2:
			c += "white";
			break;
		case 3:
			c += "blue";
			break;
		default:
			c += "green";
	}

	return c;
}


// main:


// asks users to input a number and prints on the console the respective color
rl.question("enter a number> ", function(num) {

	// converts input to numeric so that it gets interpreted correctly by color()
	const n = parseInt(num);
	console.log(`color: ${color(n)}`);

	rl.close();

});


/*
 * COMMENTS:
 * Implemented the color() function with a switch case because I prefer to use it
 * when there are more than three possible outcomes.
 *
 */
