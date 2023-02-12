/*

source: handler.js
author: @misael-diaz
date:   2023-02-10

Synopsis:
Exports the Handler.


Copyright (c) 2023 Misael Diaz-Maldonado
This file is released under the GNU General Public License as published
by the Free Software Foundation, either version 3 of the License, or
(at your option) any later version.


References:
[0] API: https://www.ibm.com/topics/api
[1] NODEJS REST API: https://medium.com/bb-tutorials-and-thoughts/how-to-write-production-ready-node-js-rest-api-javascript-version-db64d3941106
[2] POST with curl: stackoverflow.com/questions/7172784/how-do-i-post-json-data-with-curl
[3] mongodb: https://kb.objectrocket.com/mongo-db/simple-mongoose-and-node-js-example-1007
[4] mongodb: https://codeforgeek.com/insert-a-document-into-mongodb-using-mongoose/
[5] controller: https://github.com/jestrade/api-twitter

*/


// imports dependencies
const model  = require("../routes/model");
const logger = require("../logs");
let handler = {};


handler.add = function(users) {
// adds user(s) to the database db (NOTE: does not check if the data is already in the db)

	if (users instanceof Array)
	{
		model.insertMany(users, (err, obj) => {

			if (err)
				logger.error(`failed to insert users to the database`);
			else
				logger.info(`inserted users to the database`);
		});
	}
	else
	{

		const user = new model(users);
		user.save( (err, obj) => {

			if (err)
				logger.error(`failed to save user in the database`);
			else
				logger.info(`saved user in the database`);
		});
	}
};


handler.find = function(req, res, key = {userName: req.params.userName}) {
// fetches user(s) matching username in the database by default

	model.find(key, (err, obj) => {

		if (err)
		{
			res.send(err);
			logger.error(`failed to find user(s) in database`);
		}
		else
		{
			res.send(obj);
			logger.info(`found user(s) in database successfully!`);
		}

	});

};


// exports handler
module.exports = handler;
