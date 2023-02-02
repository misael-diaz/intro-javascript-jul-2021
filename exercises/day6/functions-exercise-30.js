/*

source: functions-exercise-30.js
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

*/


// NOTE: prompt() method does not work with nodejs
const readline = require("readline");
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});


// implementations:


function greet (str)
// greets the user in accordance with the specifications of this exercise
{
	const msg = new String("Hello " + str + "!");
	console.log(`${msg}`);
}


// main:


// asks users to input their name and greets them as indicated in the problem
rl.question("enter your name> ", function(nm) {

	greet(nm);

	rl.close();
});
