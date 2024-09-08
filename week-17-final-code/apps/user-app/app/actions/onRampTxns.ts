"use server";

import prisma from "@repo/db/client";
import { getServerSession } from "next-auth";
import { authOptions } from "../lib/auth";

export const onRampTxns = async (provider: string, amount: number) => {
	try {
		const session = await getServerSession(authOptions);

		if (!session?.user || !session?.user?.id) {
			return {
				msg: "Unauthorized user",
			};
		}

		const userId = parseInt(session.user.id);
		const token = Math.random().toString();

		const response = await prisma.onRampTransaction.create({
			data: {
				status: "Processing",
				token,
				provider,
				amount,
				startTime: new Date(),
				userId,
			},
		});

		return {
			data: response,
		};
	} catch (err) {
		return {
			msg: "Error while creating transaction",
			status: 411,
		};
	}
};
