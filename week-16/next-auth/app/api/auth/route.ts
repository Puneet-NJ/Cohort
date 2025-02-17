import { NEXT_AUTH } from "@/app/lib/auth";
import { getServerSession } from "next-auth";
import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {
	const session = await getServerSession(NEXT_AUTH);

	return NextResponse.json({ session });
}
