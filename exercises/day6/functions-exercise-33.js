/*

source: functions-exercise-33.js
author: @misael-diaz
date:   2023-02-01

Synopsis:
Functions Exercise.


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
[5] to upper case: https://www.w3schools.com/jsref/jsref_toUpperCase.asp
[6] switch:
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/switch
[7] ASCII Table: https://www.asciitable.com/

*/


// NOTE: prompt() method does not work with nodejs
const readline = require("readline");
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});


function capitalize (str)
// capitalizes given string
{
	let sw = true;	// sets the switch to true to uppercase the first letter
	let msg = new String();
	// concatenates the transformed message into a new empty string
	for (let i = 0; i != str.length; ++i)
	{
		if (sw)
		{
			msg += str[i].toUpperCase();
			// toggle the switch for the next pass so that we continue
			// printing letters as they are in the original message
			sw = false;
		}
		else
		{
			// prints letters as they are in the original message
			msg += str[i];
		}

		if (str[i] == ' ')
		// toggles the switch on to uppercase the next letter (if any)
		{
			sw = true;
		}
	}

	return msg;
}


// ask the user to input a message, then modifies it in accordance to the requirements


rl.question("enter a phrase> ", function(msg) {

	// prints the capitalized message on the console
	console.log(`${capitalize(msg)}`);

	rl.close();
});

/*
 * COMMENTS:
 * We could have used regular expressions `regexs' to match other kinds of whitespace
 * in a more involved exercise.
 *
 */
