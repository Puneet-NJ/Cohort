import express, { Request, Response } from "express";
import { user } from "@repo/common/config";

const app = express();

console.log(user);

app.get("/", (req: Request, res: Response) => {
	return res.json({ msg: "healthy" });
});

app.listen(5555);
