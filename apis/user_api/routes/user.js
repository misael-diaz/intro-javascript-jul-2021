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

*/


// imports dependencies
var express = require("express");
var logger = require("../logs");


// instantiates user app
var app = express();


// initializes an array of user (objects)
let users = [{firstName:"fnam1",lastName:"lnam1",userName:"username1"}];


// answers GET request to get all the users
app.get("/users", (req, res) => {
	logger.info("users route");
	res.json(users);
});


// answers GET request to get info of all users that match `userName'
app.get("/users/:userName", (req, res) => {

	// example: http://localhost:${port}/users/username1 yields info about user1
	let usrs = users.filter( user => (req.params.userName == user.userName) );
	logger.info("filtered users by username");
	res.json(usrs);

});



// answers user POST requests:


/*

Example: /user POST Request via curl

curl --header "Content-Type: application/json" --request POST \
--data '{"firstName":"John", "lastName":"Cook", "userName":"jcook"}' \
http://localhost:3070/api/user/user

*/


app.post("/user", (req, res) => {

	// inserts new user at the back of the array of users
	users.push(req.body);
	logger.info("stored new user");
	res.json(users);

});


// exports user app
module.exports = app;
