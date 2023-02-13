/*

Retro Game API							February 12, 2023

source: index.js
author: @misael-diaz

Synopsis:
Exports app start method.


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

const express = require("express");
const bodyParser = require("body-parser");
const api = require("../api");
const app = express();
const port = 8080

// configure the app
app.use(bodyParser.json());
app.get("/", (req, res) => {
	res.send("App works!");
});
app.use("/api", api);
app.get("*", (req, res) => {
	res.send("undefined route");
});

const start = () => {
	app.listen(port, () => {
		//logger.info(`server running at http://${host}:${port}`);
		console.log(`server running at http://localhost:${port}`);
	});
};

module.exports = { start };
