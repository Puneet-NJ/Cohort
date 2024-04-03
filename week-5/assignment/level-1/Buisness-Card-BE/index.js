const express = require("express");
const adminRouter = require("./routes/admin");
const userRouter = require("./routes/user");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

app.use("/admin", adminRouter);
app.use("/user", userRouter);

app.listen(3000);
