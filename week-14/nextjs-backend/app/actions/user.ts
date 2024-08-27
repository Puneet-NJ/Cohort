"use server";
import prisma from "@/db";

export const signup = async (username: string, password: string) => {
	try {
		await prisma.user.create({
			data: {
				username,
				password,
			},
		});

		return true;
	} catch (error) {
		console.log(error);

		return false;
	}
};
