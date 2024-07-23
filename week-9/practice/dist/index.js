"use strict";
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
// type strOrNum = string | number;
// const take = (ip: strOrNum) => {
// 	console.log(ip);
// };
// take(1);
// take("dfs");
// type Dog = {
// 	name: string;
// 	legs: number;
// };
// type Cat = {
// 	name: string;
// 	speaks: string;
// };
// type Animal = Dog & Cat;
// const shout = (animal: Animal) => {
// 	console.log(animal.speaks);
// };
// shout({ name: "Rex", legs: 4, speaks: "Bhow Bhow!!" });
// Arrays
// const returnMaxVal = (array: number[]) => {
// 	let maxNum = array[0];
// 	array.map((num) => {
// 		if (num > maxNum) maxNum = num;
// 	});
// 	return maxNum;
// };
// const array: number[] = [1, 2, 3, 2, 10, 2, 1];
// console.log(returnMaxVal(array));
// interface User {
// 	name: string;
// 	age: number;
// 	isMarried: boolean;
// }
// const findLegalUsers = (users: User[]) => {
// 	const callbackFunc = (user: User) => user.age > 18;
// 	return users.filter(callbackFunc);
// 	// return legalUsers;
// };
// const users = [
// 	{ name: "Puneet", age: 22, isMarried: false, isGood: true },
// 	{ name: "Pranav", age: 17, isMarried: false },
// 	{ name: "Riya", age: 29, isMarried: true },
// 	{ name: "Riya2", age: 29, isMarried: true },
// 	{ name: "Riya3", age: 29, isMarried: true },
// ];
// console.log(findLegalUsers(users));
// Enums
// enum Direction {
// 	Up = 10,
// 	Down = 19,
// 	Right,
// 	Left,
// }
// const doSomething = (key: Direction) => {
// 	console.log(key);
// };
// doSomething(Direction.Right);
// // Can i not use type? you can
// type Directions = "up" | "down" | "right" | "left";
// const doSomething2 = (key: Directions) => {
// 	console.log(key);
// };
// doSomething2("up");
// Generics
// type strOrNum = string | number;
// const returnFirstVal = (array: strOrNum[]) => {
// 	return array[0];
// };
// console.log(returnFirstVal([1, 2, "3"]));
// console.log(returnFirstVal(["a", "b"]));
const returnFirstVal2 = (array) => {
    return array[0];
};
console.log(returnFirstVal2([2, 3, 4]));
console.log(returnFirstVal2(["hi", "hi2", "hi3"]).toUpperCase());
