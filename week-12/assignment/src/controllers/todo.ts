import { Request, Response } from "express";
import { RESPONSE_MESSAGES, STATUS_CODES } from "../routes";
import { PrismaClient } from "@prisma/client";
import { addTodoSchema } from "../zod/todo";
import { AuthenticatedRequest } from "../middleware/userAuth";

const prisma = new PrismaClient();

export const addTodo = async (req: Request, res: Response) => {
	try {
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

export const getTodos = async (req: Request, res: Response) => {
	try {
		const userId = (req as AuthenticatedRequest).id;
		if (!userId)
			return res
				.status(STATUS_CODES.INVALID_INPUTS)
				.json({ msg: "No ID found in token" });

		const response = await prisma.todo.findMany({
			where: {
				userId,
			},
		});

		return res.json({ msg: "Got all Todos successfully", data: response });
	} catch (err) {
		return res
			.status(STATUS_CODES.INTRENAL_ERROR)
			.json({ msg: RESPONSE_MESSAGES.INTRENAL_ERROR });
	}
};

export const updateTodo = async (req: Request, res: Response) => {
	try {
		const todoId = parseInt(req.params.id);
		const userId = (req as AuthenticatedRequest).id;

		if (!todoId || !userId)
			return res
				.status(STATUS_CODES.INVALID_INPUTS)
				.json({ msg: "User ID or Todo ID not found" });

		const existingTodo = await prisma.todo.findFirst({
			where: {
				id: todoId,
				userId,
			},
			select: {
				done: true,
			},
		});
		if (!existingTodo)
			return res
				.status(STATUS_CODES.INVALID_INPUTS)
				.json({ msg: "Todo not found" });

		const updateTodo = await prisma.todo.update({
			where: {
				id: todoId,
				userId,
			},
			data: {
				done: !existingTodo.done,
			},
		});

		return res.json({ msg: "Todo updated", data: updateTodo });
	} catch (err) {
		return res
			.status(STATUS_CODES.INTRENAL_ERROR)
			.json({ msg: RESPONSE_MESSAGES.INTRENAL_ERROR });
	}
};

export const deleteTodo = async (req: Request, res: Response) => {
	try {
		const todoId = parseInt(req.params.id);

		const userId = (req as AuthenticatedRequest).id;
		if (!userId || !todoId)
			return res
				.status(STATUS_CODES.INVALID_INPUTS)
				.json({ msg: "Used or Todo ID not found" });

		const response = await prisma.todo.delete({
			where: {
				id: todoId,
				userId,
			},
		});

		return res.json({ msg: "Deleted todo successfully", data: response });
	} catch (err) {
		return res
			.status(STATUS_CODES.INTRENAL_ERROR)
			.json({ msg: RESPONSE_MESSAGES.INTRENAL_ERROR });
	}
};
