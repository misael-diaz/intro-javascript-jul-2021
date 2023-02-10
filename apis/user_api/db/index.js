/*

API Lab								February 09, 2023

source: index.js
author: @misael-diaz

Synopsis:
Exports methods for connecting to the database.


Copyright (c) 2023 Misael Diaz-Maldonado
This file is released under the GNU General Public License as published
by the Free Software Foundation, either version 3 of the License, or
(at your option) any later version.


References:
[0] API: https://www.ibm.com/topics/api
[1] NODEJS REST API: https://medium.com/bb-tutorials-and-thoughts/how-to-write-production-ready-node-js-rest-api-javascript-version-db64d3941106
[2] POST with curl: stackoverflow.com/questions/7172784/how-do-i-post-json-data-with-curl
[3] database: https://github.com/jestrade/api-twitter

*/

const mongoose = require("mongoose");

const connect = () => {
// attemps to connect to the database db
	const url = "mongodb://mongodb:27017/details";
	const opt = {
		useUnifiedTopology: true,
		useNewUrlParser: true
	};

	try
	{
		mongoose.connect(url, opt);
		console.log(`successful connection to the database!`);
	}
	catch (e)
	{
		console.error(`DB Error::code: ${e.code} info: ${e.message}`);
	}
};


const disconnect = () => {
// disconnects from the database
	mongoose.connection.close();
}


module.exports = { connect, disconnect };
