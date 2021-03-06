var express = require("express"),
    app = express(),
    mongoose = require("mongoose"),
    Project = require("./models/project"),
    seedDB = require("./seeds");
   // nodemailer = require("nodemailer");


//mongoose.connect("mongodb://localhost/portfolio");
mongoose.connect("mongodb://katya:MyDream1$@ds157740.mlab.com:57740/portfolio-katya");

 app.set('views', __dirname + '/views');
 app.set("view engine", "ejs");

 app.set('port', (process.env.PORT || 5000));
 app.use(express.static(__dirname + "/public"));
 seedDB();


// Home route
 app.get("/home", function(req, res){
 	res.render("home");
 });

 app.get("/", function(req, res){
 	res.redirect("/home");
 });

// About me route - My Story
 app.get("/about", function(req, res){
 	res.render("about");
 });

// About Me - Hobbies Route

app.get("/hobbies", function(req, res){
	res.render("hobbies");
});

// About Me - Coding Challenges Route

app.get("/coding-challenges", function(req, res){
	res.render("coding-challenges");
});


// Portfolio route
 app.get("/portfolio", function(req, res){
 	res.render("portfolio");
 });

 //Contact route
 app.get("/contact", function(req, res){
 	res.render("contact");
 });



// INDEX show all projects
app.get("/projects", function(req, res){
// Get all projects from DB
Project.find({}, function(err, allprojects){
	if(err){
		console.log(err);
	} else {
		res.render("show", {project:allprojects});
	}
});
});

 //SHOW route
app.get("/projects/:id", function(req, res){
	// find project with provided id
	Project.findOne({id: req.params.id}, function(err, foundProject){
		if(err){
			console.log(err);
		}else {
		// render show template page
		res.render("projects/project", {project: foundProject});
		}
	});
	
});




 

 app.listen(app.get('port'), function(){
 	console.log( 'Node app is running on port', app.get('port'));
 });



