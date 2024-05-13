"use strict";
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
const runFunc = (func) => {
    setTimeout(func, 1000);
};
runFunc(() => {
    console.log("Hello world");
});
