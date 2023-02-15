/*

Retro Games API							Februrary 12, 2023

source: router.js
author: @misael-diaz

Synopsis:
Exports the games router.


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
const express = require("express");
const handler = require("../../api/games/handler");
const games = require("../../api/games/games");
// instantiates games app
const app = express();


// removes all existing games from the database (to avoid duplicating the games array)
handler.rm();


// inserts games to the database
handler.add(games);


// fetches all games from the database upon request
app.get("/games", (req, res) => {

	handler.find(req, res, {});
	console.log("on all games route");

});


// fetches all games from the database upon request
app.get("/games/:name", (req, res) => {

	handler.find(req, res);
	console.log("on queried game route");

});


/*

curl --header "Content-Type: application/json" --request POST \
--data \
'{"name":"Halo2", "console":["Xbox"], "genre":"First-Person Shooter", "release":"2004"}' \
http://localhost:8080/api/game/game

*/

app.post("/game", (req, res) => {

	const game = req.body;
	handler.add(game);
	res.json(game);

});


// handles PUT requests:


/*

curl --header "Content-Type: application/json" --request PUT \
--data '{"console":["PC","Xbox"]}' http://localhost:8080/api/game/update/Halo2

*/


app.put("/update/:name", (req, res) => {
	handler.put(req, res);
});


// handles DELETE requests:


/*

curl --request DELETE http://localhost:8080/api/game/delete/Halo2

*/


app.delete("/delete/:name", (req, res) => {
	handler.delete(req, res);
});


// exports games app
module.exports = app;
