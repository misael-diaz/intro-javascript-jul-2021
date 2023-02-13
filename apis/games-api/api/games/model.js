/*

source: model.js
author: @misael-diaz
date:   2023-02-10

Synopsis:
Exports the games model.


Copyright (c) 2023 Misael Diaz-Maldonado
This file is released under the GNU General Public License as published
by the Free Software Foundation, either version 3 of the License, or
(at your option) any later version.


References:
[0] API: https://www.ibm.com/topics/api
[1] NODEJS REST API: https://medium.com/bb-tutorials-and-thoughts/how-to-write-production-ready-node-js-rest-api-javascript-version-db64d3941106
[2] POST with curl: stackoverflow.com/questions/7172784/how-do-i-post-json-data-with-curl

*/


// imports dependencies
const mongoose = require("mongoose");
const collection = "retro-games";

// defines the schema `stencil' (defines the types of the data fields)
const stencil = {
	name: String,		// name of game
	console: [ String ],	// console (Sega, Nintendo, etc.)
	genre: String,		// platformer, adventure, first-shooter, etc.
	release: Number		// release year
};

const schema = mongoose.Schema(stencil);
const model = mongoose.model(collection, schema);

module.exports = model;
