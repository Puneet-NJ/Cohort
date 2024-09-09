"use server";

import prisma from "@repo/db/client";
import { getServerSession } from "next-auth";
import { authOptions } from "../lib/auth";

export default async function (phone: string, amount: number) {
	const session = await getServerSession(authOptions);
	if (!session?.user?.id) {
		return { msg: "User unauthorized" };
	}

	const fromUser = Number(session.user.id);

	const to = await prisma.user.findUnique({
		where: {
			number: phone,
		},
	});
	const toUser = to?.id;
	if (!toUser) {
		return { msg: "Used not found" };
	}

	await prisma.$transaction(async (tx) => {
		await tx.$queryRaw`SELECT * FROM "Balance" WHERE "userId"=${fromUser} FOR UPDATE`;

		const balance = await tx.balance.findUnique({
			where: {
				userId: fromUser,
			},
		});

		if (!balance?.amount || balance?.amount < amount) {
			return {
				msg: "Insufficient balance",
			};
		}

		await tx.balance.update({
			where: {
				userId: fromUser,
			},
			data: {
				amount: { decrement: amount },
			},
		});

		await tx.balance.update({
			where: {
				userId: toUser,
			},
			data: {
				amount: { increment: amount },
			},
		});

		await tx.p2pTransfer.create({
			data: {
				amount,
				timestamp: new Date(),
				fromUsedId: fromUser,
				toUserId: toUser,
			},
		});
	});

	return {
		msg: "Transfer done",
	};
}
