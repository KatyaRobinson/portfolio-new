var mongoose = require("mongoose");
var Project = require("./models/project");
var Comment = require("./models/comment");
var data = [
			{

				// featured projects
				// Movement Source Website
				id: 1,
				featured: true,
				name: "Movement Source",
				image: "/images/movement-source.png",
				shortDescription: "Website for a pilates studio",
				description: "A Bootstrap-powered website with PHP on backend. The objective for this project was creating a light-weight website with a simple and clean inteface that is easy to use and navigate. Users come to the website to learn about upcoming events, class schedules and to submit an appointment request.",
				tools: "Bootstrap, jQuery, PHP, MySQL",
				demo: "http://katyagurina.com/movement-source/",
				code: "https://github.com/KatyaRobinson/movement-source"
			},
			{
				//Wikiepedia Viever
				id: 2,
				featured: true,
				name: "Wikipedia Viewer",
				image: "/images/wiki-viewer.png",
				shortDescription: "A web application that uses Wikipedia API to search for articles",
				description: "I completed this project as a part of the FreeCodeCamp front end developer curriculum. When I first approached this challenge I knew nothing about APIs and how to make them work in web applications. To complete the user stories I had to research about APIs and do a few tutorials. After a while the concept clicked in my brain and I leaned to love APIs! Another big concept that I've learned about while working in this project is AJAX request. Every time user enteres a search query, an AJAX request is sent over to the API and response is returned back and displayed on the page without the page itself having to reload.",
				tools: "Bootstrap, jQuery, Wikipedia API",
				demo: "http://codepen.io/katyarobinson/full/qqRoZv/",
				code: "http://codepen.io/katyarobinson/pen/qqRoZv"
			},
			{
				// Random Quote Generator
				id: 3,
				featured: true,
				name: "Random Quote Generator",
				image: "/images/quotes.png",
				shortDescription: "A web application that pulls random quote from http://quotesondesign.com API",
				description: "This web app was a mandatory project to be completed to obtain a Front End Developer centification from FreeCodeCamp. I spent hours and hours trying to make sense of JSON objects and different random quote APIs documentation I've found on the internet. Working on this project made me a lot more comfortable reading API documentation and manipulating JSON data",
				tools: "Bootstrap, jQuery, QuotesOnDesign API",
				demo: "http://codepen.io/katyarobinson/full/XKKrmv/",
				code: "http://codepen.io/katyarobinson/pen/XKKrmv"
			},

			//pure css images

			{
				// Temporary page
				id: 4,
				featured: false,
				name: "Temporary Page",
				image: "/images/purecss/temp-page.png",
				shortDescription: "A Pure CSS webpage I've created to show at my personal website URL as I was working on the new version of my portfolio",
				description: "At some point I got so embarassed of the previous version of my personal website that I decided to go ahead and create some kind of placeholder to show the visitors instead, while I was working on the new and improved website",
				tools: "Pure CSS",
				demo: "http://codepen.io/katyarobinson/full/QdeLBK/",
				code: "http://codepen.io/katyarobinson/pen/QdeLBK"
			},

			{
				// Adopt don't shop
				id: 5,
				featured: false,
				name: "Adopt, Don't Shop",
				image: "/images/purecss/adopt.png",
				shortDescription: "A Pure CSS page I've created for the #DailyCSS challenge",
				description: "The prompt for that day of the challenge was 'Favorite animal'. I couldn't choose between cats and dogs and went with both",
				tools: "Pure CSS",
				demo: "http://codepen.io/katyarobinson/full/rjQEey",
				code: "http://codepen.io/katyarobinson/pen/rjQEey"
			},

			{

				// Beaver
				id: 6,
				featured: false,
				name: "Beaver",
				image: "/images/purecss/beaver.png",
				shortDescription: "A Pure CSS page I created for the #DailyCSS challenge",
				description: "Cute little CSS beaver",
				tools: "Pure CSS",
				demo: "http://codepen.io/katyarobinson/pen/LxrVza",
				code: "http://codepen.io/katyarobinson/full/LxrVza"
			},

			{
				// Elephant
				id: 7,
				featured: false,
				name: "Elephant",
				image: "/images/purecss/elephant.png",
				shortDescription: "A Pure CSS page I created for the #DailyCSS challenge",
				description: "",
				tools: "Pure CSS",
				demo: "http://codepen.io/katyarobinson/full/XpVORv",
				code: "http://codepen.io/katyarobinson/pen/XpVORv"
			},

			{
				// Bear
				id: 8,
				featured: false,
				name: "Bear",
				image: "/images/purecss/bear.png",
				shortDescription: "A Pure CSS page I created for the #DailyCSS challenge",
				description: "",
				tools: "Pure CSS",
				demo: "http://codepen.io/katyarobinson/full/wgpGNR",
				code: "http://codepen.io/katyarobinson/pen/wgpGNR"
			},

			{
				// Clock
				id: 9,
				featured: false,
				name: "Clock",
				image: "/images/purecss/clock.png",
				shortDescription: "A Pure CSS page I created for the #DailyCSS challenge",
				description: "The prompt was 'Animated object' ",
				tools: "Pure CSS",
				demo: "http://codepen.io/katyarobinson/pen/mWEPEg",
				code: "http://codepen.io/katyarobinson/full/mWEPEg"
			}

			];

function seedDB(){

	// remove all campgrounds

	Project.remove({}, function(err){
	if(err){
		console.log(err);
	}else{
	console.log("removed projects");
		// CREATE A FEW CAMPGROUNDS 	
	data.forEach(function(seed){
		Project.create(seed, function(err, project){
			if(err){
				console.log(err);
			}else {
				console.log("added a project");
				// create a comment
				
			}
		});
	});
}
	});

};

module.exports = seedDB;





