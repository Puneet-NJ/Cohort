import express from "express";
import { userSignin, userSignup } from "../controllers/user";

export const userRouter = express();

userRouter.post("/signup", userSignup);
userRouter.post("/signin", userSignin);
