/*

source: oop-exercise-35.js
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

*/


// creates an object literal
let user = {
	name: "Peter Parker",
	age: 30,
	active: true,
	hobbies: ["webdev", "squash", "piano"]
};


// adds `height' property to object literal user
user.height = 1.8;

// deletes `active' property from object literal user
delete user.active;

// prints the value of the age property of the object literal user
console.log(`age: ${user.age}`);

// prints the object literal `user' properties and their respective values
for (var p in user)
{
	console.log(`${p}: ${user[p]}`);
}
