import { Request, Response } from "express";
import { RESPONSE_MESSAGES, STATUS_CODES } from "../routes";
import { PrismaClient } from "@prisma/client";
import { addTodoSchema } from "../zod/todo";
import { AuthenticatedRequest } from "../middleware/userAuth";

export const addTodo = async (req: Request, res: Response) => {
	try {
		const prisma = new PrismaClient();

		const body = req.body;
		const userId = (req as AuthenticatedRequest).id;
		if (!userId)
			return res
				.status(STATUS_CODES.INVALID_INPUTS)
				.json({ msg: "No ID found in token" });

		const validInput = addTodoSchema.safeParse(body);
		if (!validInput.success)
			return res
				.status(STATUS_CODES.INVALID_INPUTS)
				.json({ msg: RESPONSE_MESSAGES.INVALID_INPUTS });

		const response = await prisma.todo.create({
			data: {
				title: body.title,
				description: body.description,
				userId: userId,
			},
		});

		return res.json({ msg: "Todo created successfully", data: response });
	} catch (err) {
		return res
			.status(STATUS_CODES.INTRENAL_ERROR)
			.json({ msg: RESPONSE_MESSAGES.INTRENAL_ERROR });
	}
};
