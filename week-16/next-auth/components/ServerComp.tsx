import { NEXT_AUTH } from "@/app/lib/auth";
import { getServerSession } from "next-auth";

export default async function () {
	const session = await getServerSession(NEXT_AUTH);

	return <div>{JSON.stringify(session)}</div>;
}
