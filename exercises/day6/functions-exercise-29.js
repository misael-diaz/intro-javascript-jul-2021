/*

source: functions-exercise-29.js
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


function sum (x, y)
// obtains the sum of the numbers `x' and `y'
{
	return (x + y);
}


// main:


// asks users to input two numbers and prints their sum on the console
rl.question("enter a number> ", function(x1) {
	rl.question("enter another number> ", function(x2) {

	// converts numeric input to floating-point numbers and adds them via sum()
	let total = sum( parseFloat(x1), parseFloat(x2) );

	console.log(`their sum is equal to ${total}`);

	rl.close();

	});
});
