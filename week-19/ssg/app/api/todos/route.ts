import { NextResponse } from "next/server";

export function GET() {
	const todos = [
		{ title: "Todo1", description: "This is todo1" },
		{ title: "Todo2", description: "This is todo2" },
		{ title: "Todo3", description: "This is todo3" },
		{ title: "Todo4", description: "This is todo4" },
		{ title: "Todo5", description: "This is todo5" },
	];

	return NextResponse.json({ todo: todos[Math.floor(Math.random() * 5)] });
}
