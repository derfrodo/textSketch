/*
Wir nutzen für diesen Sketch das Express.js Framework für Node
Mehr zum Framework findest Du unter: http://expressjs.com/
*/

var express = require("express");

var app = express();

app.use(express.static('public'));
app.use("/lib", express.static('node_modules/p5/lib'));
app.use("/lib", express.static('node_modules/p5/lib/addons'));

let port = process.env.PORT || 3000;

app.listen(port, function () {
    console.log("Express app is listening on port " + port + ". Visit it at http://localhost:" + port + " ");
});
