var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");
var htmlRoutes = require("./app/routing/htmlroutes.js");
var apiRoutes = require("./app/routing/apiroutes.js");
var friends = require("./app/data/friends.js");
 

var app = express();
var PORT = process.env.PORT || 3000;
 

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: 'application/vnd.api+json' }));

// used to serve the static files (style.css, imgs, etc.)
app.use("/app/public", express.static(__dirname + "/app/public"));
app.use("/assets", express.static(__dirname + "/assets"));

 

// ****************************************************
// html view routing
// ****************************************************
var html = new htmlRoutes();
var api = new apiRoutes();

html.home(app, path);
html.survey(app, path);

// ****************************************************
// api routing
// ****************************************************
api.jsonFriends(app, friends);
api.postUser(app, friends);

app.listen(process.env.PORT ||PORT, function() {
    console.log("server listening on port: " + PORT);
});