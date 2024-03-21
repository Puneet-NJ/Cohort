const express = require("express");
const app = express();

app.use(express.json());

const users = [
	{ name: "Preet", kidneys: [{ healthy: true }, { healthy: false }] },
	{ name: "Ritik", kidneys: [{ healthy: false }, { healthy: false }] },
	{ name: "Prem", kidneys: [{ healthy: true }, { healthy: true }] },
];

const searchUser = (user) => {
	let userIndex;

	users.find((eachUser, index) => {
		if (eachUser.name === user) {
			userIndex = index;
		}
	});

	return userIndex;
};

const noUnhealthyKidneys = (user) => {
	const userIndex = searchUser(user);

	return users[userIndex].kidneys.every((kidney) => kidney.healthy);
};

app.get("/", (req, res) => {
	const user = req.query.user;
	const userIndex = searchUser(user);

	let healthyKidneys = users[userIndex].kidneys.filter(
		(kidney) => kidney.healthy
	);

	healthyKidneys = healthyKidneys.length;
	const unhealthyKidneys = users[userIndex].kidneys.length - healthyKidneys;

	res.json({
		totalKidneys: users[userIndex].kidneys.length,
		healthyKidneys: healthyKidneys,
		unhealthyKidneys: unhealthyKidneys,
	});
});

app.post("/", (req, res) => {
	const kidneyStatus = req.body.kidneyStatus;
	const user = req.body.user;

	const userIndex = searchUser(user);
	users[userIndex].kidneys.push({ healthy: kidneyStatus });

	console.log(users[userIndex]);

	res.json("Done");
});

app.put("/", (req, res) => {
	const user = req.body.user;
	if (noUnhealthyKidneys(user)) {
		return res.status(411).json({
			msg: "No unhealthy kidneys",
		});
	}

	const userIndex = searchUser(user);

	users[userIndex].kidneys.map((kidney) => (kidney.healthy = true));
	console.log(users[userIndex]);

	res.json("Updated!!");
});

// Remove all their unHealthy kidneys
app.delete("/", (req, res) => {
	const user = req.body.user;
	if (noUnhealthyKidneys(user)) {
		return res.status(411).json({
			msg: "No unhealthy kidneys",
		});
	}

	const userIndex = searchUser(user);

	users[userIndex].kidneys = users[userIndex].kidneys.filter(
		(kidney) => kidney.healthy
	);

	console.log(users[userIndex]);

	res.json("Deleted!!");
});

app.listen(3001);
