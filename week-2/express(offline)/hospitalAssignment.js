const { log } = require("console");
const express = require("express");
const app = express();

// It is like a global Database
const users = [{ name: "John", kidneys: [{ healthy: false }] }];

app.use(express.json());

app.get("/", (req, res) => {
	const johnKidneys = users[0].kidneys;
	const totalKidneys = johnKidneys.length;

	const healthyKidneys = johnKidneys.filter((kidney) => kidney.healthy);
	const totalHealthyKidneys = healthyKidneys.length;
	const totalUnhealthyKidneys = totalKidneys - totalHealthyKidneys;

	res.json({ totalKidneys, totalHealthyKidneys, totalUnhealthyKidneys });
});

app.post("/", (req, res) => {
	// User shuold be able to add new kidney
	const isHealthy = req.body.isHealthy;
	users[0].kidneys.push({ healthy: isHealthy });

	res.json({
		message: "Done!!",
	});
});

app.put("/", (req, res) => {
	// Update all of the kidneys to be healthy
	users[0].kidneys.map((kidney) => (kidney.healthy = true));

	res.json({});
});

app.delete("/", (req, res) => {
	// Delete all the unhealthy kidneys
	if (noUnhealthyKidneys()) {
		res.json({ msg: "No unhealthy kidneys" });
	} else {
		const newKidneys = users[0].kidneys.filter((kidney) =>
			kidney.healthy ? users[0].kidneys : null
		);
		// console.log(newKidneys);
		users[0].kidneys = newKidneys;
		res.json({});
	}
});

const noUnhealthyKidneys = () => {
	return users[0].kidneys.every((kidney) => kidney.healthy === true);
};

app.listen(3000);
