/*

source: oop-exercise-38.js
author: @misael-diaz
date:   2023-02-02

Synopsis:
Objected-Oriented Programming OOP Exercise.


Copyright (c) 2023 Misael Diaz-Maldonado
This file is released under the GNU General Public License as published
by the Free Software Foundation, either version 3 of the License, or
(at your option) any later version.


References:
[0] Getting input from user via nodejs:
	stackoverflow.com/questions/61394928/get-user-input-through-node-js-console
[1] string to numeric methods:
www.w3docs.com/snippets/javascript/how-to-convert-string-to-number-in-javascript.html
[2] OOP: developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Working_with_Objects
[3] traversing properties:
stackoverflow.com/questions/4366104/traverse-through-javascript-object-properties
[4] checking if property exist:
stackoverflow.com/questions/135448/how-do-i-check-if-an-object-has-a-specific-property-in-javascript
*/


// implementations:


function decypherMessage (msg, key)
// decyphers passed message
{
	let str = new String();
	// concatenates decyphered characters into new string
	for (let i = 0; i != msg.length; ++i)
	{
		str += decypher(msg[i], key);
	}

	return str;
}


function decypher (c, key)
// decyphers character with key
{
	if ( key.hasOwnProperty(c) )
	{
		return key[c];	// accounts for objects with numeric fields
	}
	else
	{
		return c;
	}
}


// main:


// creates object literal keys
let firstKey = {};
// creates numeric properties for this particular key
firstKey['0'] = 'o';
firstKey['4'] = 'a';

let secondKey = {};
secondKey.y = 'e';
secondKey.z = 's';

let thirdKey = {};
thirdKey.h = 'n';


// decyphers requested messages with given keys
console.log(`${decypherMessage("h0l4", firstKey)}`);		// hola
console.log(`${decypherMessage("pyrmizo", secondKey)}`);	// permiso
console.log(`${decypherMessage("igual", thirdKey)}`);		// igual
