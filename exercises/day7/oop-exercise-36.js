/*

source: oop-exercise-36.js
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


function greet (user)
// greets user in accordince with the existing properties of the object literal `user'
{
	if ( user.hasOwnProperty('age') )
	{
		const msg = new String(
			"Hello " + user.name + ", you are " + user.age + " years old"
		);
		return msg;
	}
	else
	{
		const msg = new String("Hello " + user.name);
		return msg;
	}
}


// main:


// creates requested object literals
const peter = {name: "Peter", age: 23};
const mary  = {name: "Mary",  age: 35};
const john  = {name: "John"};


// displays a personalized greeting on the console
console.log(`${greet(peter)}`);
console.log(`${greet(mary)}`);
console.log(`${greet(john)}`);
