const mongoose = require("mongoose");
const { Schema } = require("zod");

mongoose.connect(
	"mongodb+srv://lpuneetnj:nIn1LCCPR208KFSZ@cluster0.geefcdf.mongodb.net/todo-mern"
);

const User = mongoose.model("User", {
	name: String,
	username: String,
	password: String,
});

const Todos = mongoose.model("Todos", {
	userId: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
	todos: [
		{
			title: String,
			description: String,
			completed: Boolean,
		},
	],
});

module.exports = { User, Todos };
