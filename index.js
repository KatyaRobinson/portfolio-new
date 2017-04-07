var express = require("express"),
    app = express(),
    cool = require('cool-ascii-faces');


 app.set('views', __dirname + '/views');
 app.set("view engine", "ejs");

 app.set('port', (process.env.PORT || 5000));
 app.use(express.static(__dirname + "/public"));

app.get("/home", function(req, res){
 	res.render("home");
 });

 app.get("/", function(req, res){
 	res.redirect("/home");
 });

 

 app.get("/portfolio", function(req, res){
 	res.render("portfolio");
 });


 app.get('/cool', function(req, res){
 	res.send(cool());
 });




 app.listen(app.get('port'), function(){
 	console.log( 'Node app is running on port', app.get('port'));
 });