let counter = 0;

const count = () => {
	counter++;
	console.log(counter);
};

setInterval(() => {
	count();
}, 1000);
