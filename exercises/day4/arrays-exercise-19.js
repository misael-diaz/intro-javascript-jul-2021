/*

source: arrays-exercise-19.js
author: @misael-diaz
date:   2023-02-01

Synopsis:
Basic Prompt Exercise.


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
[4] removing elements from an array:
https://www.geeksforgeeks.org/remove-elements-from-a-javascript-array/
[5] strings:
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String

*/


// NOTE: prompt() method does not work with nodejs
const readline = require("readline");
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});


/*

Ask users for an integral number `num' to generate an incrementing sequence that goes
from 1 to `num' and stores it in an array. Then, it creates another array that stores all
the elements in the first array but without the second element, and then prints the second
array on the console.

*/


rl.question("enter an integral number greater than one> ", function(num) {

	// caters invalid numeric inputs, if we don't do this we would eventually try
	// to allocate an array of zero elements (a catastrophic request)
	if (parseInt(num) <= 1)
	{
		console.log(`please enter a number greater than one ... `);
		console.log(`execution aborted ... `);
		rl.close();
	}
	else
	{
		// defines the arange [b, e) of the sequence of numbers to be computed
		const b = 1;
		const e = (parseInt(num) + 1);
		// calculates the number of elements in the sequence
		const numel = (e - b);


		// allocates a list to store exactly `numel' elements
		let list = new Array(numel);
		// loop-invariant: thus far we have written `i' elements of [b, e)
		for (let i = 0; i != numel; ++i)
		{
			list[i] = (b + i);
		}


		// allocates a new array with a capacity of one element less than list
		let numbers = new Array(numel - 1);


		// copies the first element (of list) into the new array
		numbers[0] = list[0];


		// Copies the elements (of list) in the arange [2, e) into the new array.
		// Note that we are effectively removing the second element from the list.
		for (let i = 2; i != numel; ++i)
		{
			numbers[i - 1] = list[i];
		}


		// prints the (requested) sequence of numbers on the console
		for (let i = 0; i != numbers.length; ++i)
		{
			console.log(`${numbers[i]}`);
		}

		rl.close();
	}
});


/*
 * COMMENTS:
 * There are many methods that the Array class provides for removing elements from an
 * array in Javascript: pop(), shift(), splice(), and filter(). I am not using any of
 * them because I guess that the idea of this exercise is to solve the problem without
 * the facilities provided by the Array class to gain some insights on how these are
 * implemented.
 *
 */
