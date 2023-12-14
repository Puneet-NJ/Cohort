const express = require("express");

const app = express();

const sumfunc = (n) => {
	let sum = 0;
	for (let i = 1; i <= n; i++) {
		sum += i;
	}

	return sum;
};

app.get("/", (req, res) => {
	const name = req.query.name;
	let sum = req.query.n;
	sum = sumfunc(sum);
	res.send(`Hi ${name}!! sum is ${sum}`);
});

app.listen(3000);
