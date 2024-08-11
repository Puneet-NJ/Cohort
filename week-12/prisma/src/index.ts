import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const userInsert = async (
	username: string,
	password: string,
	firstName: string,
	lastName: string
) => {
	const response = await prisma.user.create({
		data: { username, password, firstName, lastName },
	});

	console.log(response);
};
// userInsert("username2", "passowrd2", "fname2", "lname2");

const createTodo = async (
	title: string,
	description: string,
	userId: number
) => {
	const response = await prisma.todos.create({
		data: {
			title,
			description,
			userId,
		},
	});

	console.log(response);
};
// createTodo("Title2", "Description2", 1);

const getTodos = async (userId: number) => {
	const response = await prisma.todos.findFirst({
		where: {
			userId,
		},
	});

	console.log(response);
};
// getTodos(1);

const getTodosAndUserDetails = async (userId: number) => {
	const response = await prisma.todos.findMany({
		where: {
			userId,
		},
		select: {
			title: true,
			description: true,
			done: true,
			user: true,
		},
	});

	console.log(response);
};
getTodosAndUserDetails(1);
