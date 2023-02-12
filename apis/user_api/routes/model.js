/*

source: model.js
author: @misael-diaz
date:   2023-02-10

Synopsis:
Exports the users model.


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
const collection = "users";

const stencil = {
	firstName: String,
	lastName: String,
	userName: String
};

const schema = mongoose.Schema(stencil);
const model = mongoose.model(collection, schema);

module.exports = model;
