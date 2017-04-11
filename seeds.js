var mongoose = require("mongoose");
var Project = require("./models/project");
var Comment = require("./models/comment");
var data = [
			{
				id: 1,
				featured: true,
				name: "Movement Source",
				image: "/images/movement-source.png",
				shortDescription: "A web application that uses Wikipedia API to search for articles",
				description: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur",
				tools: "Bootstrap, jQuery, PHP, MySQL"
			},
			{
				id: 2,
				featured: true,
				name: "Wikipedia Viewer",
				image: "/images/wiki-viewer.png",
				shortDescription: "A web application that uses Wikipedia API to search for articles",
				description: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur",
				tools: "Bootstrap, jQuery, Wikipedia API"
			},
			{
				id: 3,
				featured: true,
				name: "Random Quote Generator",
				image: "/images/quotes.png",
				shortDescription: "A web application that pulls random quote from http://quotesondesign.com API",
				description: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur",
				tools: "Bootstrap, jQuery, QuotesOnDesign API"
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