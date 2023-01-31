/*

source: conditionals-exercise-10.js
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
[1] string to numeric methods:
www.w3docs.com/snippets/javascript/how-to-convert-string-to-number-in-javascript.html
[2] conditionals: www.w3schools.com/js/js_if_else.asp

*/


// NOTE: prompt() method does not work with nodejs
const readline = require("readline");
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});


// asks users for their weight and height
rl.question("input your weight in kilograms: ", function(w) {
	rl.question("input your height in meters: ", function(h) {
	// calculates the BMI of the user
	let BMI = w / (h * h);

	if (BMI < 18.5)
	{
		console.log(`underweight (BMI: ${BMI})`);
	}
	else if (BMI >= 18.5 && BMI < 25)
	{
		console.log(`normal (BMI: ${BMI})`);

	}
	else if (BMI >= 25 && BMI < 30)
	{
		console.log(`overweight (BMI: ${BMI})`);

	}
	else // otherwise prints obese for the user has a BMI >= 30
	{
		console.log(`obese (BMI: ${BMI})`);

	}

	rl.close();
	});
});
