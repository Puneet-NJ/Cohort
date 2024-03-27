// I need a way to make calls to backend from frontend
// I can do it using url bar but to use API in frontend we need a mechanism
// Hence Fetch

const fetchUser = () => {
	// This fetch is an async operation and by default it returns a promise
	fetch("https://fakerapi.it/api/v1/persons")
		.then((response) => {
			// this repsonse could be in any format, hence you need to specify that
			//it is json format
			// And also .json() is an async operation
			return response.json();
		})
		.then((json) => {
			console.log(json);
		});
};

// fetchUser();

//  OR ELSE
// async await

const fetchUser2 = async () => {
	const users = await fetch("https://fakerapi.it/api/v1/persons");
	const json = await users.json();
	console.log(json);
};
fetchUser2();
