const express = require("express");
const { route } = require("./routes/user");
const app = express();

app.use("/", route);
// app.get("/", (req, res) => {
// 	console.log("Hi");
// });

app.listen(3000);
