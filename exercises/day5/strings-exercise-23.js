/*

source: strings-exercise-23.js
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
[6] ASCII Table: https://www.asciitable.com/

*/

// implementations:

// possible implementation of the String toUpperCase() method:
function toUpperCase (c)
// transforms lower case characters [a-z] into their upper case counterpart [A-Z]
{
	// gets the ASCII code of the character
	let asciiCode = c.charCodeAt();
	if (asciiCode >= 97 && asciiCode <= 122)
	// if the code in the range of [a, z] it shifts it to the range [A, Z]
	{
		// shifts to uppercase
		asciiCode -= 32;
		// returns just the uppercased character
		return (String.fromCharCode(asciiCode)[0]);
	}
	else
	// returns the character unchanged, for it is not a lower case letter
	{
		return c;
	}
}


// main:


// prints the given string with upper case letters:


const str = "hello world";	// defines the given string as a constant


// creates a new empty string object
let msg = new String();
// concatenates characters in string `str' into the new string message `msg':
for (let i = 0; i != str.length; ++i)
{
	msg += toUpperCase(str[i]);	// applies user-defined method to change case
}


// prints the uppercased message on the console
console.log(`${msg} (via user-defined toUpperCase() function)`)
console.log(`${str.toUpperCase()} (via String toUpperCase() method)`)


/*
 * COMMENTS:
 * My implementation of the toUpperCase() function is expected to work with strings
 * having characters with an ASCII code (8-bits). The right way to do it in production
 * is to use the toUpperCase() method of the String class.
 *
 */
