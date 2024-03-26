const express = require("express");
const app = express();
app.use(express.json());

const zod = require("zod");
const schema = zod.array(zod.number());

const validateLoginSchema = (obj) => {
	const loginSchema = zod.object({
		email: zod.string().email(),
		pass: zod.string().min(8),
	});

	const response = loginSchema.safeParse(obj);

	return response;
};

// app.get("/health-checkup", (req, res) => {
// 	const username = req.headers.username;
// 	const password = req.headers.password;
// 	const kidneyId = req.query.kidneyId;

// 	if (username === "puneet" && password === "pass") {
// 		if (kidneyId === 1 || kidneyId === 2) {
// 			res.send("Your kidney is fine!!");
// 		}
// 	}

// 	res.status(404).send("Input is wrong");
// });

app.post("/health-checkup", (req, res) => {
	const kidneys = req.body.kidneys;
	// const kidneyLength = kidneys.length;

	const response = schema.safeParse(kidneys);

	// res.send("you have " + kidneyLength + " kidneys");
	res.json(response);
});

app.post("/login", (req, res) => {
	const response = validateLoginSchema(req.body);

	if (response.success) {
		res.status(200).json(response.data);
	} else {
		res.status(411).send("Wrong inputs");
	}
});

// GLOBAL CATCHES
// app.use((err, req, res, next) => {
// 	res.status(500).send("Sorry something is wrong!!");
// });

app.listen(3002);
