const request = require("supertest");
const assert = require("assert");
const express = require("express");
const app = express();

let numberOfRequestsForUser = {};
setInterval(() => {
	numberOfRequestsForUser = {};
}, 1000);

const countRequestsMiddleware = (req, res, next) => {
	const userId = req.headers.user;
	console.log(user);

	if (!numberOfRequestsForUser?.user) {
		numberOfRequestsForUser.userId = {
			requests: 0
		}
	}
		if (numberOfRequestsForUser?.user?.requests === 5) res.sendStatus(404);
	numberOfRequestsForUser.user = {
		requests: !numberOfRequestsForUser
			? 0
			: numberOfRequestsForUser?.user?.requests + 1,
	};

	next();
};

// const restrictUserMiddleware = (req, res, next) => {
// 	if (numberOfRequestsForUser.requests === 6) res.sendStatus(404);

// 	next();
// };

app.use(countRequestsMiddleware);
// app.use(restrictUserMiddleware);
app.get("/user", function (req, res) {
	res.status(200).json({ name: "john" });
});

app.post("/user", function (req, res) {
	res.status(200).json({ msg: "created dummy user" });
});

app.listen(3000);
