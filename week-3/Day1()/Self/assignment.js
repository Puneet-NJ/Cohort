const express = require("express");
const mongoose = require("mongoose");
const app = express();
const jwt = require("jsonwebtoken");
const jwtPassword = "123456";

app.use(express.json());

mongoose.connect(
	"mongodb+srv://lpuneetnj:nIn1LCCPR208KFSZ@cluster0.geefcdf.mongodb.net/randomUserDB"
);

// Creating a model
const User = mongoose.model("Users", {
	email: String,
	password: String,
	name: String,
});

app.post("/signin", (req, res) => {
	const email = req.body.email;
	const password = req.body.password;
	const name = req.body.name;

	// Check if the customer already exists
	const existingCustomer = User.find({ email: email });
	if (existingCustomer) {
		res.status(400).json({
			msg: "User already present",
		});
	}

	// Create token
	const token = jwt.sign({ username: email }, jwtPassword);
	res.status(200).json({
		token: token,
	});

	// Add the user on to the Database
	const user = new User({
		email: email,
		password: password,
		name: name,
	});
	user.save();
});

app.get("/users", async (req, res) => {
	const token = req.headers.authorization;

	// Verify token
	try {
		jwt.verify(token, jwtPassword);
		const users = await User.find({}, { password: 0 });
		res.status(200).json(users);
	} catch (err) {
		console.log(err);
	}
});

app.listen(500);
