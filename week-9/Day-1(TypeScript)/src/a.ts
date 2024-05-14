// function sum(a: number, b: number) {
// 	let sum = a + b;
// 	return sum;
// }

// const val = sum(1, 2);
// console.log(val);

// const above18 = (age: number): boolean => {
// 	if (age > 18) return true;
// 	else return false;
// };

// console.log(above18(17));

// const runFunc = (func: () => void) => {
// 	setTimeout(func, 1000);
// };

// runFunc(() => {
// 	console.log("Hello world");
// });

// Interface
// interface User {
// 	firstName: string;
// 	lastName: string;
// 	age: number;
// 	email?: string; // ? => optional field
// }

// const isLegal = (user: User): boolean => {
// 	if (user.age > 18) return true;
// 	else return false;
// };

// const greet = (user: User): void => {
// 	console.log("Hello " + user.firstName);
// };

// console.log(isLegal({ firstName: "puneet", lastName: "NJ", age: 21 }));
// greet({
// 	firstName: "puneet",
// 	lastName: "NJ",
// 	age: 21,
// 	email: "puneet@gmail.com",
// });

// Implementing Interfaces
// interface Animal {
// 	name: string;
// 	legs: number;
// 	speak(phrase: string): void;
// }

// class Dog implements Animal {
// 	name: string;
// 	legs: number;

// 	constructor(name: string, legs: number) {
// 		(this.name = name), (this.legs = legs);
// 	}

// 	speak = (phrase: string): void => {
// 		console.log(phrase);
// 	};
// }

// types
type Animal = {
	name: string;
	legs: number;
	speak?(phrase: string): void;
};

// const greet = (animal: Animal): void => {
// 	console.log("Hi " + animal.name);
// };

// greet({ name: "Dog", legs: 4 });

interface Man {
	intelligent: true;
}

type All = Animal & Man;

const doAll = (all: All): void => {
	console.log(`${all.name} ${all.intelligent}`);
};

doAll({ name: "Man", legs: 2, intelligent: true });

// type could be something like
type abc = number | string;
const func = (a: abc) => {
	console.log(a);
};
func(2);
func("s");

// WRONG
// type def = number & string
// const func2 = (d: def): void => {
// 	console.log(d);

// }
// func2(2)
// func2("d")

// interface?
// interface xyz string
// Nope, XD

// Arrays
// let array: number[];
// array = [2];

interface User {
	firstName: string;
	lastName?: string;
	age: number;
}

const isLegal = (users: User[]): User[] => {
	return users.filter((user) => user.age > 18);
};

console.log(
	isLegal([
		{ firstName: "Puneet", lastName: "NJ", age: 21 },
		{ firstName: "Smith", age: 12 },
		{ firstName: "Rose", age: 24 },
	])
);
