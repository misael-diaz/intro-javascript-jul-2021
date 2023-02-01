/*

source: strings-exercise-24.js
author: @misael-diaz
date:   2023-02-01

Synopsis:
String Exercise.


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
[6] ASCII Table: https://www.asciitable.com/

*/

// NOTE: prompt() method does not work with nodejs
const readline = require("readline");
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// asks users for a message, then prints the number of a's present in it

rl.question("enter a phrase> ", function(msg) {

	let count = 0;
	for (let i = 0; i != msg.length; ++i)
	// counts the number of `a' instances in the string by traversing it
	{
		if (msg[i] == 'a')
		// Note: we could have checked the ASCII code (msg.charCodeAt(i) == 97)
		{
			++count;
		}
	}

	console.log(`number of a\'s: ${count}`);

	rl.close();
});
