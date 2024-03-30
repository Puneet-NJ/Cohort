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

const user = new User({
	email: "harpreetsingh@gmail.com",
	password: "123456",
	name: "hsingh",
});
user.save();

//  Reading
const getUser = async () => {
	const requiredUser = await User.find({});
	console.log(requiredUser);
};
getUser();

// Updating
const updateUser = async () => {
	await User.updateOne({ name: "Puneet" }, { password: "newPassword" });
};
updateUser();

// Deleting
const deleteUser = async () => {
	await User.deleteMany({ name: "hsingh" });
};
deleteUser();
