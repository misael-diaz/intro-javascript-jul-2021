/*

source: index.js
author: @misael-diaz
date:   2023-02-07

Synopsis:
Creates a basic Representational State Transfer REST Application Programming Interface API


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
var express = require("express");
var bodyParser = require("body-parser");
var logger = require("../logs");
var db = require("../db");

db.connect();		// connects to the database

var app = express();	// instantiates app
const port = 3070;	// defines the service port for this app


// uses body parser so that the app can handle json requests
app.use( bodyParser.json() );


// displays `App works!' at root `/' route
app.get("/", (req, res) => {
	res.send("App works!");
});


// delegates the task of handling defined routes to the router app
app.use( "/api", require("../routes/routes") );



// handles undefined routes
app.get("*", (req, res) => {

	logger.info("undefined route");
	res.send("App works!");

});


// sets app to listen on specified service port
app.listen(port, () => {
	logger.info(`server running on port ${port}`);
});


/*

COMMENTS:
Execute the following commands in parent directory to install dependencies:

npm init
npm install express --save
npm install body-parser --save

and execute node in current directory to launch api:

node index.js

Then use your favorite browser and postman (or curl) to interact with the app.

*/
