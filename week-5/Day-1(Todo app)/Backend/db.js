const mongoose = require("mongoose");

mongoose.connect(put - mongo - link);

const todo = mongoose.model("Todos", {
	title: String,
	description: String,
	completed: Boolean,
});

module.exports = {
	todo,
};
