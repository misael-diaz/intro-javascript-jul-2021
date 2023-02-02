/*

source: oop-exercise-37.js
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


// classes:


class Product
{
	constructor (name, id)
	{
		this.name = name;
		this.id = id;
	}
}



// implementations:


function searchProduct (products, id)
// returns the product that matches the given ID, otherwise returns NULL
{
	let pos = search(products, id);
	if (pos < 0)
	{
		return null;
	}
	else
	{
		return products[pos];
	}
}


function search (products, id)
// implements linear search for an array of product objects
{
	let pos = -1;
	for (let i = 0; i != products.length; ++i)
	{
		if (products[i].id == id)
		{
			pos = i;
			return pos;
		}
	}

	return pos;
}


// main:


numel = 4;
products = new Array(numel);
for (let i = 0; i != numel; ++i)
{
	let id = i;
	let name = String.fromCharCode(i + 65);
	products[i] = new Product(name, id);
}


// prints the info of the existing product
p = searchProduct(products, 0);
if (p != null)
{
	console.log(`name: ${p.name} id: ${p.id}`);
}
else
{
	console.log(`${p}`);
}


// prints NULL on the console because there is no such product
p = searchProduct(products, -1);
if (p != null)
{
	console.log(`name: ${p.name} id: ${p.id}`);
}
else
{
	console.log(`${p}`);
}
