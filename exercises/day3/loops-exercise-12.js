/*

source: loops-exercise-12.js
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
[1] loops: https://www.w3schools.com/js/js_loop_for.asp
*/


// NOTE: prompt() method does not work with nodejs
const readline = require("readline");
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});


// asks the user to input a phrase and then it prints it ten times on the console:
rl.question("enter a phrase: ", function(msg) {

	// displays the message on the console ten times
	for (let i = 0; i != 10; ++i)
	{
		console.log(`${msg}`);
	}

	rl.close();
});
