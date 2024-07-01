const mongoose = require("mongoose");

mongoose.connect(
	"mongodb+srv://lpuneetnj:nIn1LCCPR208KFSZ@cluster0.geefcdf.mongodb.net/todo-mern"
);

const User = mongoose.model("User", {
	name: String,
	username: String,
	password: String,
});

module.exports = { User };
