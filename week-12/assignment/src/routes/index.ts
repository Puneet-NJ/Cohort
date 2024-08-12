import express from "express";
import { userRouter } from "./user";
import { todoRouter } from "./todo";

export const router = express();

export enum STATUS_CODES {
	NOT_FOUND = 404,
	INVALID_INPUTS = 403,
	INTRENAL_ERROR = 500,
}

export enum RESPONSE_MESSAGES {
	NOT_FOUND = " Not found",
	INVALID_INPUTS = "Invalid inputs",
	INTRENAL_ERROR = "Internal server error",
}

router.use("/user", userRouter);
router.use("/todo", todoRouter);
