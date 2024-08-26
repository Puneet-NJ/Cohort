import { NextRequest } from "next/server";
import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

export function GET() {
	return Response.json({
		name: "Puneet",
		email: "puneet@gmail.com",
	});
}

export async function POST(req: NextRequest) {
	const body = await req.json();

	await prisma.user.create({
		data: {
			username: body.username,
			password: body.password,
		},
	});

	return Response.json({
		body,
	});
}
