/*

source: functions-exercise-31.js
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


function BMI (w, h)
// computes the Body Mass Index BMI given the users weight (kg) and height (m).
{
	return ( w / (h * h) );
}


// main:


// asks users for their weight and height and prints their BMI
rl.question("input your weight in kilograms> ", function(w) {
	rl.question("input your height in meters> ", function(h) {

	// calculates and reports the BMI of the users
	console.log(`your BMI is ${BMI(w, h)}`)

	rl.close();

	});
});
