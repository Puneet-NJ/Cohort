import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const insertUser = async (
	email: string,
	password: string,
	firstName: string,
	lastName: string
) => {
	const response = await prisma.users.create({
		data: {
			email,
			password,
			firstName,
			lastName,
		},
		select: {
			id: true,
			firstName: true,
		},
	});

	console.log(response);
};

// insertUser("some@gamil2.com", "pass", "Some", "Guy");

interface updateUserSchema {
	firstName: string;
	lastName: string;
}

const updateUser = async (
	email: string,
	{ firstName, lastName }: updateUserSchema
) => {
	const response = await prisma.users.update({
		where: {
			email,
		},
		data: {
			firstName,
			lastName,
		},
	});

	console.log(response);
};
// updateUser("some@gamil2.com", { firstName: "asdf", lastName: "jkl" });

const getUser = async (email: string) => {
	const response = await prisma.users.findMany({
		where: {},
	});

	console.log(response);
};
getUser("some@gamil2.com");
