"use client";
import { signIn, signOut, useSession } from "next-auth/react";

export default function () {
	const session = useSession();

	return (
		<div>
			<button
				onClick={() => {
					signIn();
				}}
			>
				Sign in
			</button>

			<button
				onClick={() => {
					signOut();
				}}
			>
				Log out
			</button>

			{JSON.stringify(session)}
		</div>
	);
}
