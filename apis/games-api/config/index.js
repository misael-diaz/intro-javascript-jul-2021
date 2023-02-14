/*

Retro Games API							February 14, 2023

source: index.js
author: @misael-diaz

Synopsis:
Configures the app service port and database connection.


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

// imports dependencies
const dotenv = require("dotenv");
// imports environment variables from the specified .env file
dotenv.config();


// configures the app settings (http host and port, and database connection string)
const config = {

	http: {
		host: process.env.HTTP_HOST || "0.0.0.0",
		port: process.env.PORT || process.env.HTTP_PORT,
	},

	db: {
		connectionString: String(process.env.DB_CONNECTION_STRING),
	}
};

// exports the configuration
module.exports = config;
