import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

const handler = NextAuth({
	providers: [
		CredentialsProvider({
			name: "Email",
			credentials: {
				email: { label: "Email", placeholder: "Email", type: "text" },
				password: {
					label: "Password",
					placeholder: "Password",
					type: "password",
				},
			},

			async authorize(credentials) {
				console.log(credentials);

				return {
					id: "user1",
				};
			},
		}),
	],
});

export const GET = handler;
export const POST = handler;
