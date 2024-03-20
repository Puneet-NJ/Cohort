const express = require("express");
const bodyParser = require("body-parser");
const port = 3000;
const app = express();

app.use(bodyParser.json());
app.get("/", (req, res) => {
	res.send("Hello Puneet!!");
});

app.post("/", (req, res) => {
	console.log(req.headers.greet);

	res.send("Data Recieved");
});

app.post("/body", (req, res) => {
	console.log(req.body);

	res.send("Data Recieved");
});

app.listen(port);
