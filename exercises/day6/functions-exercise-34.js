/*

source: functions-exercise-34.js
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



// implementations:


function average (numbers)
// obtains the average of the elements that comprise the array
{
	let sum = 0;	// Note: In JS numbers are stored as 64-bit floating-point numbers
	for (let i = 0; i != numbers.length; ++i)
	{
		sum += numbers[i];
	}

	return (sum / numbers.length);
}


// main:


const numel = 256;
let numbers = new Array(numel);
// stores the sequence [0, 256) in the array
for (let i = 0; i != numel; ++i)
{
	numbers[i] = i;
}

// reports the average of the sequence on the console
console.log(`average: ${average(numbers)}`);	// test: OK (prints 127.5)
