/*

Retro Games API							February 07, 2023

source: index.js
author: @misael-diaz

Synopsis:
Defines the logger (object).


Copyright (c) 2023 Misael Diaz-Maldonado
This file is released under the GNU General Public License as published
by the Free Software Foundation, either version 3 of the License, or
(at your option) any later version.


References:
[0] API: https://www.ibm.com/topics/api
[1] NODEJS REST API: https://medium.com/bb-tutorials-and-thoughts/how-to-write-production-ready-node-js-rest-api-javascript-version-db64d3941106
[2] POST with curl: stackoverflow.com/questions/7172784/how-do-i-post-json-data-with-curl

*/


// constructs the logger utility as an (empty) object literal
var logger = {};


// defines the methods of the logger:


logger.info = function(logmsg) {	// logs informative message
	console.log(`${new Date()} info: ${logmsg}`);
};


logger.debug = function(logmsg) {	// logs debugging message
	console.log(`${new Date()} debug: ${logmsg}`);
};


logger.error = function(logmsg) {	// logs error message
	console.log(`${new Date()} error: ${logmsg}`);
};


// exports the logger utility
module.exports = logger;
