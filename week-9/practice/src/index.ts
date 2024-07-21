// problem 1
function greetUser(firstName: string) {
	console.log(`Hello ${firstName}`);
}

greetUser("Puneet");

// problem 2
const findSum = (a: number, b: number): number => {
	return a + b;
};
console.log("The sum is: " + findSum(1, 10));

// problem 3
const isLegal = (age: number): boolean => {
	return age > 18;
};
console.log(isLegal(2));

// problem 4
const runAnotherFunc = (func: () => void): void => {
	setTimeout(func, 1000);
};
runAnotherFunc(() => {
	console.log("After 1 sec");
});
