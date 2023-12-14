const clock = () => {
	const currentTime = new Date();

	let hours = String(currentTime.getHours()).padStart(2, "0");
	const minutes = String(currentTime.getMinutes()).padStart(2, "0");
	const seconds = String(currentTime.getSeconds()).padStart(2, "0");
	console.log(hours + ":" + minutes + ":" + seconds);

	if (Number(hours) > 12) {
		hours = String(Number(hours) % 12).padStart(2, "0");
		console.log(hours + ":" + minutes + ":" + seconds + " PM");
	} else {
		console.log(hours + ":" + minutes + ":" + seconds + " AM");
	}

	console.log("---------------------------------");
};

setInterval(() => clock(), 1000);
