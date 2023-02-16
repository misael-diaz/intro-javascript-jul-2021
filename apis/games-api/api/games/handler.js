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
[7] https://towardsdatascience.com/build-a-rest-api-with-node-express-and-mongodb-937ff95f23a5
[8] chaining callbacks: https://stackoverflow.com/questions/3884281/what-does-the-function-then-mean-in-javascript/31453579#31453579
[9] async/await: http://thecodebarbarian.com/80-20-guide-to-async-await-in-node.js.html
[A] promises: https://mongoosejs.com/docs/promises.html
[B] promises: https://masteringjs.io/tutorials/mongoose/promise
[C] mongoose exec(): https://stackoverflow.com/questions/31549857/mongoose-what-does-the-exec-function-do/31550321#31550321
[D] empty objects: https://stackoverflow.com/questions/11480769/how-can-i-check-if-a-json-is-empty-in-nodejs/11480826#11480826

*/


// imports dependencies
const model = require("../../api/games/model");
//const logger = require("../logs");
let handler = {};


handler.rm = async () => {
// removes all the games from the database
	await model.deleteMany({}).exec();	// exec() returns promise (refs [9] & [C])
}


handler.add = async (req, res, games) => {
// adds game(s) to the database db (NOTE: does not check if the data is already in the db)

	if (games instanceof Array)
	{
		await model.insertMany(games).then( (gms) => {

			console.info(`inserted games to the database`);

		}).catch( (err) => {

			console.error(`failed to insert games to the database`);

		});
	}
	else
	{

		// checks first if the game exist to avoid document duplication in db:


		const key = { name: req.body.name };
		// Note: model.findOne().exec() returns a Promise
		await model.findOne(key).exec().then( async (gm) => {

			if (gm != null)
			{
				console.info(`game exist in db`);
				res.send('there is a game with the same name in the db');
			}
			else
			{
				const game = new model(games);
				// Note: game.save() returns a Promise
				await game.save().then( (g) => {
					console.info(`saved game in db`);
					res.send(g);
				});
			}

		});

	}
};


handler.find = async (req, res, key = {name: req.params.name}) => {
// fetches game(s) matching name in the database by default

	// Note: model.find().exec() returns a Promise
	await model.find(key).exec().then( (game) => {

		if (Object.keys(game).length != 0)	// note: based on ref[D]
		{
			console.info(`found game(s) in database successfully!`);
			res.send(game);
		}
		else // (find() returned an empty object `game' because it doesn't exist)
		{
			console.info(`game is not in the database`);
			res.send('game is not in the database');
		}

	}).catch( (error) => {

		console.error(`error while searching for game(s)`);
		error.stack;
	});

};


handler.put = async (req, res, filter = {name: req.params.name}) => {
// updates the first game that matches the filter

	const update = req.body;
	await model.findOneAndUpdate(filter, update).exec();
	await model.findOne(filter).exec().then( () => {

		console.info(`updated game successfully!`);
		res.send('game has been updated successfully');

	}).catch( (error) => {

		console.error(`error while updating game!`);
		error.stack;

	});

};


handler.delete = async (req, res, filter = {name: req.params.name}) => {
// deletes the first game that matches the filter

	await model.findOneAndDelete(filter).exec().then( () => {

		console.info(`deleted game successfully!`);
		res.send('game has been deleted successfully');

	}).catch( (error) => {

		console.error(`error while deleting game!`);
		error.stack;

	});

};


// exports handler
module.exports = handler;


/*
 * TODO:
 * [x] add code to prevent adding a game with the same name as an existing game in the
 *     database. It seems that the exists() method inspects the game properties
 *     thoroughly so that if there is one mismatch it considers the game as new.
 * [x] double check async/await code
 *
 */
