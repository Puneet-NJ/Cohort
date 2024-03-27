// fetch("https://fakestoreapi.com/products/1")
// 	.then((response) => {
// 		return response.json();
// 	})
// 	.then((json) => {
// 		console.log(json);
// 	});

const ALL_USERS = [
	{
		username: "harkirat@gmail.com",
		password: "123",
		name: "harkirat singh",
	},
	{
		username: "raman@gmail.com",
		password: "123321",
		name: "Raman singh",
	},
	{
		username: "priya@gmail.com",
		password: "123321",
		name: "Priya kumari",
	},
];

function userExists(username, password) {
	// write logic to return true or false if this user exists
	// in ALL_USERS array

	const transformFunction = (user) => {
		if (user.username === username) return true;
	};

	return ALL_USERS.some(transformFunction);
}
console.log(userExists("harkiraat@gmail.com"));
