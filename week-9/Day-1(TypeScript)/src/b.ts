function sub(a: number, b: number) {
	return a - b;
}

// console.log(sub(2, 1));

const findLeapYear = (year: number) => {
	if (year % 100 === 0) {
		if (year % 400 === 0) return true;

		return false;
	}

	if (year % 4 === 0) return true;

	return false;
};

// console.log(findLeapYear(2009));
