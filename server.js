var express = require('express');
var app = express();
var PORT = 3000;
console.log("Running on port "+PORT);


// app.use("/components",express.static(__dirname+"/bower_components"));
app.use("/libs",express.static(__dirname+"/static/js/libs/bower_components"));
app.use("/",express.static(__dirname+"/templates/"))




app.listen(PORT);