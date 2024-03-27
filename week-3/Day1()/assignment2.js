const express = require("express");
const app = express();
const mongoose = require("mongoose");

app.use(express.json());

mongoose.connect(
	"mongodb+srv://lpuneetnj:nIn1LCCPR208KFSZ@cluster0.geefcdf.mongodb.net/userappnew"
);

const User = mongoose.model("Users", {
	name: String,
	email: String,
	password: String,
});

app.post("/signin", async (req, res) => {
	const email = req.body.email;
	const password = req.body.password;
	const name = req.body.name;

	const existingUser = await User.findOne({ email: email });
	if (existingUser) return res.status(400).json("User already exists");

	const user = new User({
		name: name,
		email: email,
		password: password,
	});
	user.save();

	res.json({ msg: "User created sucessfully" });
});
