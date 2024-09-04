import CredentialsProvider from "next-auth/providers/credentials";
import GoogleProvider from "next-auth/providers/google";
import GitHubProvider from "next-auth/providers/github";

export const NEXT_AUTH = {
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
					id: "1",
					name: "Puneet",
					email: "puneet@gmail.com",
				};
			},
		}),
		GoogleProvider({
			clientId: process.env.GOOGLE_CLIENT_ID || "",
			clientSecret: process.env.GOOGLE_CLIENT_SECRET || "",
		}),
		GitHubProvider({
			clientId: process.env.GITHUB_ID || "",
			clientSecret: process.env.GITHUB_SECRET || "",
		}),
	],
	secret: process.env.NEXTAUTH_SECRET,
	callbacks: {
		jwt: ({ token, user }: any) => {
			token.id = token.sub;
			console.log(token);

			return token;
		},
		session: ({ session, token }: any) => {
			session.user.id = token.sub;

			return session;
		},
	},
	pages: {
		signIn: "/signin",
	},
};
