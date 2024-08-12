import { Request, Response } from "express";
import { RESPONSE_MESSAGES, STATUS_CODES } from "../routes";
import { userSignupSchema } from "../zod/user";
import { PrismaClient } from "@prisma/client";
import jwt from "jsonwebtoken";
import dotenv from "dotenv";

export const userSignup = async (req: Request, res: Response) => {
	try {
		const prisma = new PrismaClient();

		const body = req.body;

		const validInput = userSignupSchema.safeParse(body);
		if (!validInput.success)
			return res.status(STATUS_CODES.INVALID_INPUTS).json({
				msg: RESPONSE_MESSAGES.INVALID_INPUTS,
			});

		// Check if the user already doesn't exists
		const userExists = await prisma.user.findFirst({
			where: {
				username: body.username,
			},
		});
		if (userExists)
			return res.status(STATUS_CODES.INVALID_INPUTS).json({
				msg: "User already exists",
			});

		const response = await prisma.user.create({
			data: {
				name: body.name,
				username: body.username,
				password: body.password,
			},
		});

		// Generate token
		dotenv.config({ path: "./.env" });

		const token = jwt.sign({ id: response.id }, process.env.JWT_PASSWORD || "");

		return res.json({
			msg: "User created successfully!!",
			token,
			user: response,
		});
	} catch (err) {
		return res
			.status(STATUS_CODES.INTRENAL_ERROR)
			.json({ msg: RESPONSE_MESSAGES.INTRENAL_ERROR });
	}
};
