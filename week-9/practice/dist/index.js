"use strict";
// problem 1
function greetUser(firstName) {
    console.log(`Hello ${firstName}`);
}
greetUser("Puneet");
// problem 2
const findSum = (a, b) => {
    return a + b;
};
console.log("The sum is: " + findSum(1, 10));
// problem 3
const isLegal = (age) => {
    return age > 18;
};
console.log(isLegal(2));
// problem 4
const runAnotherFunc = (func) => {
    setTimeout(func, 1000);
};
runAnotherFunc(() => {
    console.log("After 1 sec");
});
