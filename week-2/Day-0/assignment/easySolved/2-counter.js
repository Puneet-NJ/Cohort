let counter = 0;

const count = () => {
	counter++;
	console.log(counter);

	setTimeout(() => count(), 1000);
};

count();
