"use strict";
// interface User {
// 	name: string;
// 	age: number;
// }
// const familyInfo: Record<family, memberInfo> = {
// 	father: { name: "Jake", age: 45 },
// 	mother: { name: "Lily", age: 40 },
// 	son: { name: "Glen", age: 10 },
// };
// console.log(familyInfo);
// Map
// A better way to deal with such objects is using Map(a JS concept)
const map = new Map();
map.set("father", { name: "Jake", age: 45 });
map.set("son", { name: "Glen", age: 10 });
console.log(map);
const checkAnimal = (item) => {
    console.log(item);
};
checkAnimal("dog");
// checkAnimal("trees"); // ERROR
