import express from "express";
import { userSignup } from "../controllers/user";

export const userRouter = express();

userRouter.post("/signup", userSignup);
