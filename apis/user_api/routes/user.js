/*

source: index.js
author: @misael-diaz
date:   2023-02-07

Synopsis:
Exports App that Handles HTTP GET and POST Requests.


Copyright (c) 2023 Misael Diaz-Maldonado
This file is released under the GNU General Public License as published
by the Free Software Foundation, either version 3 of the License, or
(at your option) any later version.


References:
[0] API: https://www.ibm.com/topics/api
[1] NODEJS REST API: https://medium.com/bb-tutorials-and-thoughts/how-to-write-production-ready-node-js-rest-api-javascript-version-db64d3941106
[2] POST with curl: stackoverflow.com/questions/7172784/how-do-i-post-json-data-with-curl
[3] mongodb: https://kb.objectrocket.com/mongo-db/simple-mongoose-and-node-js-example-1007
*/


// imports dependencies
var express   = require("express");
const logger  = require("../logs");
const model   = require("../routes/model");
const handler = require("../routes/handler");


// instantiates user app
var app = express();


// initializes an array of user (objects)
let users = [{firstName:"fnam1",lastName:"lnam1",userName:"username1"}];
// inserts users to the database (NOTE: handler.add() needs revision to avert redundancy)
handler.add(users);



// answers GET request to get all the users
app.get("/users", (req, res) => {
// fetches all users from the database

	logger.info("all users route");
	handler.find(req, res, {});

});


// answers GET request to get info of all users that match `userName'
app.get("/users/:userName", (req, res) => {

	// example: http://localhost:${port}/users/username1 yields info about user1
	handler.find(req, res);
	logger.info("filtered users by username");
});



// answers user POST requests:


/*

Example: /user POST Request via curl

curl --header "Content-Type: application/json" --request POST \
--data '{"firstName":"John", "lastName":"Cook", "userName":"jcook"}' \
http://localhost:3070/api/user/user

*/


app.post("/user", (req, res) => {

	const user = req.body;
	handler.add(user);
	logger.info("stored new user");
	res.json(user);
});


// exports user app
module.exports = app;


/*
 * TODO:
 * [x] udpate POST so that the user gets added to the database
 * [ ] modify the code so that there are no duplicate users
 *
 */
