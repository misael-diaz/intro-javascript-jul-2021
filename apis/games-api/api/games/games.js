/*

Retro Games API							Februrary 13, 2023

source: games.js
author: @misael-diaz

Synopsis:
Exports the games array.


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


const Sonic = {
	//name: "Sonic The Hedgehog",
	name: "Sonic",
	console: ["Sega Genesis"],
	genre: "Platformer",
	release: 1991
};

const Sonic2 = {
	//name: "Sonic The Hedgehog 2",
	name: "Sonic2",
	console: ["Sega Genesis"],
	genre: "Platformer",
	release: 1992
};

const Sonic3 = {
	//name: "Sonic The Hedgehog 3",
	name: "Sonic3",
	console: ["Sega Genesis"],
	genre: "Platformer",
	release: 1994
};

const SonicAndKnuckles = {
	//name: "Sonic & Knuckles",
	name: "SK",
	console: ["Sega Genesis"],
	genre: "Platformer",
	release: 1994
};

const SuperMetroid = {
	//name: "Super Metroid",
	name: "SuperMetroid",
	console: ["Super Nintendo"],
	genre: "Platformer",
	release: 1994
};

const Halo = {
	//name: "Halo: Combat Evolved",
	name: "Halo",
	console: ["PC", "Xbox"],
	genre: "First-Person Shooter",
	release: 2001
};


const CallOfDuty = {
	//name: "Call of Duty: Modern Warfare",
	name: "CoD",
	console: ["PC", "Xbox", "Playstation"],
	genre: "First-Person Shooter",
	release: 2019
};

const games = [Sonic, Sonic2, Sonic3, SonicAndKnuckles, SuperMetroid, Halo, CallOfDuty];

module.exports = games;

/*
 * TODO:
 * [x] add support for non console-exclusive games (example Call of Duty).
 * [ ] resolve issue with game names with spaces
 *
 */
