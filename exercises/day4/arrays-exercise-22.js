/*

source: arrays-exercise-22.js
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
const nums = [1, 0, 1, 1, 1, 0, 0, 1, 0, 1, 1, 0, 0, 1, 0, 1, 0, 1, 1];


let sum = 0;
// outputs the number of ones present in the array on the console
for(let i = 0; i != nums.length; ++i)
{
	sum += nums[i];
}

console.log(`number of ones present in the arary: ${sum}`);

/*
 * COMMENTS:
 * Again, we could have asked the user to input an integral number with which we could use
 * to define the number of elements in the `nums' array. Then, we could sample numbers
 * from a uniform random number distribution (as we did in exercise-7) to fill the array.
 * Then we can process the elements of the array by computing the reminder of two to get
 * an array of zeros and ones. (Note that even numbers would yield zero and odd numbers
 * would yield one.) Then we could sum the elements of the array to obtain the number of
 * ones present in it and report on the console as we did above.
 *
 */
