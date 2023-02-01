/*

source: arrays-exercise-21.js
author: @misael-diaz
date:   2023-02-01

Synopsis:
Arrays, Loops, and Conditionals Exercise.


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

*/


// creates (a constant) array of numbers (devs recommend their usage whenever possible)
const nums = [1, 23, 5, 8, 40, 12, 2, 67, 24, 9, 39];


// outputs the values greater than ten on the console
for(let i = 0; i != nums.length; ++i)
{
	if (nums[i] > 10)
	{
		console.log(`${nums[i]}`);
	}
}

/*
 * COMMENTS:
 * We could have asked the user to input an integral number with which we could use
 * to define the number of elements in the `nums' array. Then, we could sample numbers
 * from a uniform random number distribution (as we did in exercise-7) to fill the array.
 * And finally we can exclude the values that are less than or equal to ten as we are
 * doing in the for-loop above to print on the console the values of the array that are
 * greater than ten.
 *
 */
