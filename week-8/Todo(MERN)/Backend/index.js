const express = require("express");
const userRoute = require("./routes/user");
const app = express();

app.use(express.json());

app.use("/api/v1/user", userRoute);

app.listen(3000);
