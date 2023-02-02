/*

source: strings-exercise-28.js
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


// implementations:


function distinct (msg)
/*

Synopsis:
Implements a Brute Force algorithm that finds distinct characters in a string.
Returns a string containing the distinct characters in the message `msg'.
The time complexity of the Brute Force Algorithm is quadratic with respect to the
number of characters in the string `msg'.

*/
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


	let str = new String();
	// appends the string with the distinct characters in `msg'
	for (let i = 0; i != msg.length; ++i)
	{
		if (partition[i] < 0)
		{
			str += msg[i];
		}
	}

	return str;
}


// main:


// reports the common characters in the messages input by the users


rl.question("enter a phrase> ", function (msg1) {

	rl.question("enter another phrase> ", function (msg2) {

		// creates strings from the messages
		let str1 = distinct(msg1);
		let str2 = new String(msg2);


		let counters = new Array(str1.length);
		// initializes the counters array (of characters) to zero, for we need to
		// count how many times each character in the first message appears in
		// the second message
		for (let i = 0; i != str1.length; ++i)
		{
			counters[i] = 0;
		}


		for (let i = 0; i != str1.length; ++i)
		// searches linearly to count the number of instances of the current
		// character str1[i]
		{
			for (let j = 0; j != str2.length; ++j)
			{
				if (str2[j] == str1[i])
				{
					++counters[i];
				}
			}
		}


		let sw = true;
		let msg = new String();
		// stores the common characters in a string
		for (let i = 0; i != str1.length; ++i)
		{
			if (counters[i] != 0)
			{
				if (sw)
				// we need to differentiate the first common character
				// from the rest, for it would look weird to have a
				// trailing comma when there is just one common character
				{
					msg += str1[i];
					sw = false;
				}
				else
				// appends a comma to the previous character to construct
				// human-readable list of characters
				{
					msg += (', ' + str1[i]);
				}
			}
		}

		// prints common characters or a message to indicate that there are none
		if (msg.length != 0)
		{
			console.log(`common characters: ${msg}`);
		}
		else
		{
			console.log(`no common characters have been found`);
		}

		rl.close();

	});
});


/*
 * COMMENTS:
 * The time complexity of this application is O(max(N1 * N1, N1 * N2)), where N1 is
 * the number of characters in the first message and N2 is the number of characters in
 * the second message, for the limiting process is the linear search. We could stop
 * searching as soon as an instance is found but that is not going to improve the
 * average time complexity of the application, the extra effort would not be worthwhile.
 *
 */
