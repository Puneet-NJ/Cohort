//  Mongoose helps connecting/interacting with mongoDB
const mongoose = require("mongoose");

mongoose.connect(
	"mongodb+srv://lpuneetnj:nIn1LCCPR208KFSZ@cluster0.geefcdf.mongodb.net/randomUserDB"
);

// Creating a model
const User = mongoose.model("Users", {
	email: String,
	password: String,
	name: String,
});

//  Creating
// const user = new User({
// 	email: "puneet@gmail.com",
// 	password: "random",
// 	name: "Puneet",
// });
// user.save();

//  Reading
const getUser = async () => {
	const requiredUser = await User.findOne({ email: "puneet@gmail.com" });
	console.log(requiredUser);
};
getUser();
