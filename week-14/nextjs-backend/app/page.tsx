import { PrismaClient } from "@prisma/client";

// You could do this, but you see that your nextjs server is sending request
// from server to server i.e. inhouse
// const getUserData = async () => {
// 	const response = await axios({
// 		method: "GET",
// 		url: "http://localhost:3000/api/user",
// 	});

// 	return response.data;
// };

// Instead make the db call here itself
const prisma = new PrismaClient();

const getUserData = async () => {
	const response = await prisma.user.findFirst({});
	return response;
};

export default async function Home() {
	const userData = await getUserData();

	return (
		<div className="flex flex-col justify-center h-screen">
			<div className="flex justify-center">
				<div className="border p-8 rounded">
					<div>Name: {userData?.username}</div>

					{userData?.password}
				</div>
			</div>
		</div>
	);
}
