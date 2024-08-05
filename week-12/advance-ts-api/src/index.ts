// interface User {
// 	name: string;
// 	age: number;
// }

// const sumOfAge = (user1: User, user2: User) => {
// 	return user1.age + user2.age;
// };

// console.log(sumOfAge({ name: "Suresh", age: 42 }, { name: "Ramya", age: 30 }));

// Pick
// Lets you choose only subset of fields from an existing type
// interface User {
// 	id: string;
// 	name: string;
// 	age: number;
// 	email: string;
// 	password: string;
// }

// interface FieldsToUpdate {
// 	name: string;
// 	age: number;
// 	password: string;
// }
// The above thing is possible but what if I change the datatype of one field
// in the orignal User interface, I have to change it in the subset interface
// aswell so hence Pick

// type fieldsToUpdate = Pick<User, "name" | "age" | "password">;

// const updateUser = (fields: fieldsToUpdate) => {
// 	// update the 3 fields
// 	console.log(fields);
// };

// updateUser({ name: "Trisha", age: 20, password: "pass" });

// Partial
// If I have to make the properties optional then Partial
// type fieldsToUpdate = Pick<User, "name" | "age" | "password">;
// type fieldsToUpdateOptional = Partial<fieldsToUpdate>;

// const updateUser = (fields: fieldsToUpdateOptional) => {
// 	// update the 3 fields
// 	console.log(fields);
// };

// updateUser({ name: "Trisha" });

// Readonly, readonly
// You might have seen you can change values of properties of an object(also array)
// but what if I don't want to? => Readonly, readonly

// interface Mobile {
// 	name: string;
// 	readonly price: number;
// 	is5g: boolean;
// }

// const iqoo: Readonly<Mobile> = {
// 	name: "iqoo7",
// 	price: 1000,
// 	is5g: true,
// };

// iqoo.name = "hdjf"
// iqoo.price = 800

// const obj = {
// 	name: "some",
// 	age: 21,
// };

// Record
// How to construct object type whose keys are of some sort of data-type
// or
// How to construct key-value pairs

type family = "father" | "mother" | "son";
interface memberInfo {
	name: string;
	age: number;
}

// const familyInfo: Record<family, memberInfo> = {
// 	father: { name: "Jake", age: 45 },
// 	mother: { name: "Lily", age: 40 },
// 	son: { name: "Glen", age: 10 },
// };
// console.log(familyInfo);

// Map
// A better way to deal with such objects is using Map(a JS concept)
const map = new Map<family, memberInfo>();
map.set("father", { name: "Jake", age: 45 });
map.set("son", { name: "Glen", age: 10 });

console.log(map);

// When you want to exclude some type from a type
type Nature = "dog" | "trees" | "cat" | "plants" | "snake";

type Animal = Exclude<Nature, "trees" | "plants">;

const checkAnimal = (item: Animal) => {
	console.log(item);
};
checkAnimal("dog");
// checkAnimal("trees"); // ERROR
