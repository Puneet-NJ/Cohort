class Calculator {
	constructor(result) {
		this.result = result;
	}

	add(num) {
		this.result = this.result + num;
	}

	subtract(num) {
		this.result = this.result - num;
	}

	multiply(num) {
		this.result = this.result * num;
	}

	divide(num) {
		this.result = this.result / num;
	}

	clear() {
		this.result = 0;
	}

	getResult() {
		return this.result;
	}
}

const cal = new Calculator(0);
cal.add(3);
console.log(cal.getResult());
cal.divide(2);
console.log(cal.getResult());
