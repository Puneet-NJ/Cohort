// A website which has 2 endpoints -

//POST /signin
// Body - {
// username: string
// password: string
// }
// Returns a json web token with username encrypted

// GET /users
// Headers -
// Authorization header
// Returns an array of all users if user is signed in (token is correct)
// Returns 403 status code if not

const users = [
	{
		id: 1,
		firstname: "Marty",
		lastname: "Nolan",
		email: "grimes.curt@yahoo.com",
		phone: "+6388534484468",
		birthday: "1994-06-18",
		gender: "male",
		address: [Object],
		website: "http://nader.org",
		image: "http://placeimg.com/640/480/people",
	},
	{
		id: 2,
		firstname: "Jack",
		lastname: "Langworth",
		email: "jalyn42@mcclure.com",
		phone: "+9622669458453",
		birthday: "1970-12-26",
		gender: "male",
		address: [Object],
		website: "http://friesen.com",
		image: "http://placeimg.com/640/480/people",
	},
	{
		id: 3,
		firstname: "Mercedes",
		lastname: "Stiedemann",
		email: "olson.cecil@yahoo.com",
		phone: "+2113550549922",
		birthday: "2007-06-21",
		gender: "female",
		address: [Object],
		website: "http://padberg.net",
		image: "http://placeimg.com/640/480/people",
	},
	{
		id: 4,
		firstname: "Piper",
		lastname: "Block",
		email: "ward.rasheed@dooley.com",
		phone: "+9762677651815",
		birthday: "1948-09-28",
		gender: "female",
		address: [Object],
		website: "http://sporer.org",
		image: "http://placeimg.com/640/480/people",
	},
	{
		id: 5,
		firstname: "Alfreda",
		lastname: "Miller",
		email: "felton58@hotmail.com",
		phone: "+6989691513848",
		birthday: "1993-02-22",
		gender: "female",
		address: [Object],
		website: "http://auer.com",
		image: "http://placeimg.com/640/480/people",
	},
	{
		id: 6,
		firstname: "Columbus",
		lastname: "Rath",
		email: "jeremie.wyman@quigley.com",
		phone: "+4666691719698",
		birthday: "1938-08-13",
		gender: "male",
		address: [Object],
		website: "http://wuckert.org",
		image: "http://placeimg.com/640/480/people",
	},
	{
		id: 7,
		firstname: "Lenna",
		lastname: "Leuschke",
		email: "lilla49@stamm.org",
		phone: "+2692008465202",
		birthday: "1951-11-16",
		gender: "female",
		address: [Object],
		website: "http://zieme.biz",
		image: "http://placeimg.com/640/480/people",
	},
	{
		id: 8,
		firstname: "Katrine",
		lastname: "Bauch",
		email: "jensen.auer@hartmann.com",
		phone: "+9741685019516",
		birthday: "1977-04-25",
		gender: "female",
		address: [Object],
		website: "http://green.com",
		image: "http://placeimg.com/640/480/people",
	},
	{
		id: 9,
		firstname: "Nash",
		lastname: "Lang",
		email: "brayan.pfeffer@kohler.com",
		phone: "+7704543397696",
		birthday: "2020-07-24",
		gender: "male",
		address: [Object],
		website: "http://dach.org",
		image: "http://placeimg.com/640/480/people",
	},
	{
		id: 10,
		firstname: "Elyssa",
		lastname: "Nienow",
		email: "ardith.stiedemann@kerluke.com",
		phone: "+7341974339150",
		birthday: "1962-10-21",
		gender: "female",
		address: [Object],
		website: "http://rau.org",
		image: "http://placeimg.com/640/480/people",
	},
];

const express = require("express");
const jwt = require("jsonwebtoken");
const app = express();

const jwtPassword = "random";
app.use(express.json());

app.post("/signin", (req, res) => {
	const email = req.body.email;
	const password = req.body.password;

	// Create JWT
	const token = jwt.sign({ username: email }, jwtPassword);
	res.status(200).json({ token: token });
});

app.get("/users", (req, res) => {
	const token = req.headers.authorization;

	try {
		jwt.verify(token, jwtPassword);

		res.json(users);
	} catch (err) {
		res.status(403).json({
			msg: "Invalid token",
		});
	}
});

app.listen(3001);
