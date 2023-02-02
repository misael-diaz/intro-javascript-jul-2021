/*

source: oop-exercise-39.js
author: @misael-diaz
date:   2023-02-01

Synopsis:
Object-Oriented Programming OOP Exercise.


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


// implementations:


function frequency (message)
// displays the frequency of non-whitespace characters in message on the console
{

	// removes whitespace from the passed message to comply with the requirements
	const msg = removeWhiteSpace(message);

	let freq = {};
	const partition = distinct(msg);
	for (let i = 0; i != partition.length; ++i)
	{
		if (partition[i] < 0)
		{
			// creates a property named after the current (distinct) character
			// and assigns it the number of instances in the message; note
			// that the partition represents counts with negative numbers
			freq[(msg[i])] = (-partition[i]);
		}
	}

	// displays the frequency of non-whitespace characters on the console
	for (var p in freq)
	{
		console.log(`${p}: ${freq[p]}`);
	}
}


function distinct (msg)
// returns a partition array encoding the distinct characters in the passed message
{

	// initializes partition array
	let partition = new Array(msg.length);
	for (let i = 0; i != msg.length; ++i)
	{
		partition[i] = -1;
	}


	// traverses the message in search for duplicate characters (chars)
	for (let i = 0; i != (msg.length - 1); ++i)
	{
		for (let j = (i + 1); j != msg.length; ++j)
		{
			// checks the jth char if it has not been marked as a duplicate,
			// if it is unmarked, then it checks if it is a duplicate of the
			// ith char
			if (partition[j] == -1 &&  msg[j] == msg[i])
			{
				// sets the ith char as the parent of the jth char,
				// for the jth char is a duplicate of the ith char
				partition[j] = i;
				// increments the number of instances of the ith char
				--partition[i];
			}
		}
	}

	return partition;
}


function removeWhiteSpace (msg)
// returns a string without whitespace
{
	let str = new String();
	for (let i = 0; i != msg.length; ++i)
	{
		if (msg[i] != ' ')
		{
			str += msg[i];
		}
	}

	return str;
}


// main:


// reports the frequency of characters present in the message input by the user
rl.question("enter a phrase> ", function (msg) {

	frequency(msg);

	rl.close();
});
