/*
  Implement a class `Todo` having below methods
    - add(todo): adds todo to list of todos
    - remove(indexOfTodo): remove todo from list of todos
    - update(index, updatedTodo): update todo at given index
    - getAll: returns all todos
    - get(indexOfTodo): returns todo at given index
    - clear: deletes all todos

  Once you've implemented the logic, test your code by running
*/
// import "mathjs";
class Todo {
	constructor() {
		this.todoList = [];
	}

	add(todo) {
		this.todoList.push(todo);
	}

	remove(indexOfTodo) {
		this.todoList.splice(indexOfTodo, 1);
		// delete this.todoList[indexOfTodo];
	}

	update(index, updatedTodo) {
		if (index >= this.todoList.length) return;
		this.todoList[index] = updatedTodo;
	}

	getAll() {
		return this.todoList;
	}

	get(indexOfTodo) {
		if (this.todoList[indexOfTodo] === undefined) return null;
		return this.todoList[indexOfTodo];
	}

	clear() {
		this.todoList = [];
	}
}

const todo = new Todo();
todo.add("Task1");
todo.add("Task2");
todo.add("Task3");

todo.update(1, "Updated task2");
console.log(todo.getAll());
todo.update(3, "Invalid task");
console.log(todo.getAll());
// console.log(todo.get(0));
// console.log(todo.get(2));
// console.log(todo.get(3));
const expr = "2 + 3 * 4 / 0";
console.log(eval(expr));
