/*

Retro Game API							February 12, 2023

source: index.js
author: @misael-diaz

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
const express = require("express");
const http = require("./http");
const db = require("./db");

db.connect();	// connects to the database
http.start();	// launches the web application
