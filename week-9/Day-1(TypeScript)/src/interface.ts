// find legal age
interface User2 {
	firstName: string;
	lastName: string;
	age: number;
}

const isLegal2 = (user: User2) => {
	if (user.age > 18) return true;
	return false;
};

const user1 = {
	firstName: "Puneet",
	lastName: "NJ",
	age: 122,
};

// console.log(isLegal2(user1));

// todos
interface todo {
	title: string;
	description: string;
}

function displayTodos(todos: todo[]) {
	todos.map((todo) => console.log(todo));
}

const allTodos = [
	{
		title: "Todo1",
		description: "Description1",
	},
	{
		title: "Todo2",
		description: "Description2",
	},
	{
		title: "Todo3",
		description: "Description3",
	},
];
// displayTodos(allTodos);

// IMPLEMENTING INTERFACE

interface CommonAnimal {
	name: string;
	legs: number;
	carnivorous: boolean;
	speak(): void;
}

class Dog implements CommonAnimal {
	name: string;
	legs: number;
	carnivorous: boolean;

	constructor(name: string, legs: number, carnivorous: boolean) {
		this.name = name;
		this.legs = legs;
		this.carnivorous = carnivorous;
	}

	speak = (): void => {
		console.log("bhow bhow!!");
	};
}

class Cat implements CommonAnimal {
	name: string;
	legs: number;
	carnivorous: boolean;

	constructor(name: string, legs: number, carnivorous: boolean) {
		this.name = name;
		this.legs = legs;
		this.carnivorous = carnivorous;
	}

	speak = (): void => {
		console.log("meow meow!!");
	};
}

const dog1 = new Dog("Brownie", 4, true);
console.log(dog1.name);
dog1.speak();

const cat1 = new Cat("Linda", 4, true);
console.log(cat1.name);
cat1.speak();
