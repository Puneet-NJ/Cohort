const express = require("express");
const userRouter = require("./routes/user");
const app = express();
const cors = require("cors");

app.use(cors());
app.use(express.json());

app.use("/api/v1", userRouter);

app.listen(3000);
