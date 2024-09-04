import { NextRequest, NextResponse } from "next/server";

export function GET(req: NextRequest) {
	return NextResponse.json({ msg: "This is from /api/auth route" });
}
