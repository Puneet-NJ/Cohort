let count = 0;
const func = () => {
	count++;
	console.log(count);

	setTimeout(func, 1000);
};

func();
