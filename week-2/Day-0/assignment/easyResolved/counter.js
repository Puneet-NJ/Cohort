let count = 0;
const countFunc = () => {
	count++;
	console.log(count);
};

setInterval(countFunc, 1000);
