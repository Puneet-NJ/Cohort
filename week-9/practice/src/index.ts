// // problem 1
// function greetUser(firstName: string) {
// 	console.log(`Hello ${firstName}`);
// }

// greetUser("Puneet");

// // problem 2
// const findSum = (a: number, b: number): number => {
// 	return a + b;
// };
// console.log("The sum is: " + findSum(1, 10));

// // problem 3
// const isLegal = (age: number): boolean => {
// 	return age > 18;
// };
// console.log(isLegal(2));

// // problem 4
// const runAnotherFunc = (func: () => void): void => {
// 	setTimeout(func, 1000);
// };
// runAnotherFunc(() => {
// 	console.log("After 1 sec");
// });

// interface Person {
// 	name: string;
// 	age: number;
// 	isMarried: boolean;
// 	greet: (name: string) => void;
// }

// const isLegal2 = (user: Person) => {
// 	user.greet(user.name);
// 	return user.age > 18;
// };

// console.log(
// 	isLegal2({
// 		name: "Puneet",
// 		age: 22,
// 		isMarried: false,
// 		greet(name) {
// 			console.log(`Hello, ${name}`);
// 		},
// 	})
// );

// Implementing interfaces as class
// class Manager implements Person {
// 	name: string;
// 	age: number;
// 	isMarried: boolean;

// 	constructor(n: string, a: number, m: boolean) {
// 		this.name = n;
// 		this.age = a;
// 		this.isMarried = m;
// 	}

// 	greet = (name: string) => {
// 		console.log(`Hello, ${name}`);
// 	};
// }

// const raghav = new Manager("Raghav", 34, true);
// raghav.greet(raghav.name);

// type

type strOrNum = string | number;

const take = (ip: strOrNum) => {
	console.log(ip);
};
take(1);
take("dfs");

type Dog = {
	name: string;
	legs: number;
};

type Cat = {
	name: string;
	speaks: string;
};

type Animal = Dog & Cat;

const shout = (animal: Animal) => {
	console.log(animal.speaks);
};
shout({ name: "Rex", legs: 4, speaks: "Bhow Bhow!!" });
