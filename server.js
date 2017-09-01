/*
 *  (FriendFinder):
 *      server.js - The entry point for this marvel of modern technology
 * 
 */

var path = require('path');
var express = require('express');
var hndlbrs = require('express-handlebars');

var app = express();
var PORT = process.env.PORT || 3000;
console.log(`Server listening on port ` + port);

app.engine(hndlbrs({defaultLayout: "main"}))
app.set("view-engine", "handlebars")
app.use(bp.json());
app.use(bp.urlencoded({ extended: true }));
app.use(bp.text());
app.use(bp.json({ type: "application/vnd.api+json "}));
app.use(express.static(path.join(__dirname + "/app/public"))); 

