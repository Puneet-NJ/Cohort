const { default: axios } = require("axios");

const get = async () => {
	const response = await axios.get("https://dummyjson.com/quotes");
	console.log(response.data.quotes[4]);
};

// get();

const post = async () => {
	await axios.post(
		"https://httpdump.app/dumps/d921dd52-92f4-4355-a9be-40e9b27e9fd2",
		{
			username: "Puneet",
			password: "random",
		},
		{
			headers: {
				Authorization: "Bearer 123",
			},
		}
	);
};
// post();

const postCleaner = async () => {
	await axios(
		"https://httpdump.app/dumps/d921dd52-92f4-4355-a9be-40e9b27e9fd2",
		{
			method: "PUT",
			headers: { Authorization: "Bearer 12345" },
			data: {
				username: "Puneet",
				password: "random",
			},
		}
	);
};
postCleaner();
