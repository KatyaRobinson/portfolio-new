var mongoose = require("mongoose");

var projectSchema = new mongoose.Schema({
	id: Number,
	featured: Boolean,
	name: String,
	image: String,
	shortDescription: String,
	description: String,
	tools: String,
	demo: String,
	code: String
});

module.exports = mongoose.model("Project", projectSchema);