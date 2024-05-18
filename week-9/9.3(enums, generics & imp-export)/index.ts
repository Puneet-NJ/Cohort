// enums
// These are the way to hold constants

// enum Keys {
// 	Up = "Hi",
// 	Down = "Hi2",
// 	Left = "Hi3",
// 	Right = "Hi4",
// }

// const doSomething = (key: Keys): Keys => {
// 	console.log(Keys);

// 	return key;
// };

// console.log(doSomething(Keys.Up));

// Common UseCase:
// enum ResponseCodes {
// 	notFound = 404,
// 	invalidInputs = 411,
// 	ok = 200,
// }

// app.get("/", (req, res) => {
// 	// ..
// 	// ...

// 	res.status(ResponseCodes.invalidInputs).send();
// });

// GENERICS
type func = number[] | string[];
function returnFirstEle<T>(arr: T[]): T {
	return arr[0];
}

console.log(returnFirstEle<number>([1, 2, 3]));
console.log(returnFirstEle<string>(["puneet", "rita"]).toUpperCase());

type random = {
	some: string;
};
type someThing = {
	greet1(name: string): random;
};
