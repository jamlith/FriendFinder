/*
 *  (FriendFinder):
 *      server.js - The entry point for this marvel of modern technology
 * 
 */

var path = require('path');
var express = require('express');
var bp = require('body-parser');


var app = express();
var PORT = process.env.PORT || 3000;

app.use(bp.json());
app.use(bp.urlencoded({ extended: true }));
app.use(bp.text());
app.use(bp.json({ type: "application/vnd.api+json "}));
app.use(express.static(path.join(__dirname + "./app/public"))); 

require('./app/routing/apiRoutes.js')(app);
require('./app/routing/htmlRoutes.js')(app);

app.listen(PORT, () => {
    console.log('Listening from port ' + PORT);
});