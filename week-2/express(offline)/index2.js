const express = require("express");
const app = express();

const sum = (n) => {
	let sum = 0;

	for (let i = 1; i <= n; i++) {
		sum += i;
	}

	return sum;
};

app.get("/", (req, res) => {
	const n = req.query.n;
	const sumAnswer = sum(n);
	res.send("Hi Puneet, your sum is: " + sumAnswer);
});

app.listen(3000);
