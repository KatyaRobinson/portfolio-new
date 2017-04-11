var mongoose = require("mongoose");

var projectSchema = new mongoose.Schema({
	id: Number,
	name: String,
	image: String,
	description: String
});

module.exports = mongoose.model("Project", projectSchema);