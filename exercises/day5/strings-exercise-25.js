/*

source: strings-exercise-25.js
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


// asks users for a message, then transforms the message in accordance to the request:


rl.question("enter a phrase> ", function(str) {

	let msg = new String();
	// concatenates the transformed message into a new empty string
	for (let i = 0; i != str.length; ++i)
	{
		switch (str[i])
		{
			case 'a':
				msg += '4';
				break;
			case 'e':
				msg += '3';
				break;
			case 'i':
				msg += '1';
				break;
			case 'o':
				msg += '0';
				break;
			case ' ':
				break;
			default:
				msg += str[i].toUpperCase();
		}
	}

	console.log(`${msg}`)
	rl.close();
});
