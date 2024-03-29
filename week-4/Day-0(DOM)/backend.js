const express = require("express");
const app = express();
const cors = require("cors");

app.use(cors());

app.get("/sum", (req, res) => {
	const a = parseInt(req.query.a);
	const b = parseInt(req.query.b);

	const sum = a + b;
	res.status(200).send(sum.toString());
});

app.get("/interest", (req, res) => {
	const p = parseInt(req.query.p);
	const t = parseInt(req.query.t);
	const r = parseInt(req.query.r);

	const interest = (p * t * r) / 100;
	const total = p + interest;

	res.status(200).json({
		total: total,
		interest: interest,
	});
});

app.listen(3003);
