/*

Retro Games API						February 12, 2023

source: handler.js
author: @misael-diaz

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
[6] update: https://mongoosejs.com/docs/tutorials/findoneandupdate.html
[7] towardsdatascience.com/build-a-rest-api-with-node-express-and-mongodb-937ff95f23a5

*/


// imports dependencies
const model = require("../../api/games/model");
//const logger = require("../logs");
let handler = {};


handler.rm = async function () {
// removes all the games from the database
	await model.deleteMany({});
}


handler.add = async function(games) {
// adds game(s) to the database db (NOTE: does not check if the data is already in the db)

	if (games instanceof Array)
	{
		await model.insertMany(games, (err, obj) => {

			if (err)
				console.error(`failed to insert games to the database`);
			else
				console.info(`inserted games to the database`);
		});
	}
	else
	{

		// checks first if the game exist to avoid document duplication in db:

		// Note:
		// Waits until checking is done to determine if the game is to be saved
		// or if there is nothing to do because it is already in the database.
		// The method then() enable us to achive just that.
		const g = await model.exists(games).then( (g) => {

			if (g != null)
			{
				console.log(`game exist in db`);
			}
			else
			{
				const game = new model(games);
				game.save( (err, obj) => {

					if (err)
						console.error(`save game in db failed`);
					else
						console.log(`saved game in db`);
				});
			}
		});

	}
};


handler.find = function(req, res, key = {name: req.params.name}) {
// fetches game(s) matching name in the database by default

	model.find(key, (err, obj) => {

		if (err)
		{
			res.send(err);
			console.error(`failed to find game(s) in database`);
		}
		else
		{
			res.send(obj);
			console.info(`found game(s) in database successfully!`);
		}

	});

};


handler.put = async function(req, res, filter = {name: req.params.name}) {
// updates the first game that matches the filter

	const update = req.body;
	await model.findOneAndUpdate(filter, update).then( () => {

		model.findOne(filter).then( (g) => {

			res.send(g);
			console.info(`updated game successfully!`);

		});

	});

};


// exports handler
module.exports = handler;


/*
 * TODO:
 * [ ] add code to prevent adding a game with the same name as an existing game in the
 *     database. It seems that the exists() method inspects the game properties
 *     thoroughly so that if there is one mismatch it considers the game as new.
 *
 */
