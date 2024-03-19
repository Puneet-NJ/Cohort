// Puneet lets see what async programming is in JS
// Personal note

// Callbacks

const getName = () => {
	let person;

	setTimeout(() => {
		person = "Puneet";
	}, 1000);

	return person;
};

const greetName = (name) => {
	console.log("Hello " + name);
};

// const person = getName(greetName);
// console.log(person);
// greetName(person);

// I see that I don't get result as desired as the getName function is an async function

const getName2 = (greet) => {
	let person;

	setTimeout(() => {
		person = "Puneet";
		greet(person);
	}, 1000);
};

const greetName2 = (name) => {
	console.log("Hello " + name);
};

// getName2(greetName2);
// This is the power of callbacks

// The issue with callbacks is callback hell i.e.
// getName3(() => {
// 	greet3(() => {
// 		sayGoodMrng(() => {
// 			askPersonQuestion();
// 		});
// 	});
// });

// Hence a syntactic sugar is Promises

// What promise says is that it will excute an async funtion and only after it is
// run successfully it will run one more funtion .then()

const getName4 = () => {
	const promise = new Promise((resolve, reject) => {
		setTimeout(() => {
			resolve("Puneet");
		}, 1000);
	});

	return promise;
};

const greetName4 = (person) => {
	const promise = new Promise((resolve, reject) => {
		setTimeout(() => {
			console.log("Hello " + person);
			resolve(person);
		}, 1000);
	});

	return promise;
};

// getName4().then((person) => greetName4(person));

// Fetch returns promise by default
// Callback hell?

sayGoodMrng = (person) => {
	const promise = new Promise((resolve, reject) => {
		setTimeout(() => {
			console.log("Good Morning " + person);
			resolve(person);
		}, 2000);
	});

	return promise;
};
askPersonQuestion = (person) => {
	const promise = new Promise((resolve, reject) => {
		setTimeout(() => {
			console.log("How are you doing " + person);
			resolve(person);
		}, 2000);
	});

	return promise;
};

// Promise Chaining
// getName4()
// 	.then((person) => greetName4(person))
// 	.then((person) => sayGoodMrng(person))
// 	.then((person) => askPersonQuestion(person));

// Promise.all
Promise.all([
	greetName4("Riya"),
	sayGoodMrng("Riya"),
	askPersonQuestion("Riya"),
]).then((result) => console.log(result));
// .then is excuted after all of the promises are resolved
// Here result is array of response value of all promises
