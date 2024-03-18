const time = () => {
	const time = new Date();

	let hours = String(time.getHours()).padStart(2, 0);
	const minutes = String(time.getMinutes()).padStart(2, 0);
	const seconds = String(time.getSeconds()).padStart(2, 0);

	console.log(hours + ":" + minutes + ":" + seconds);

	hours = parseInt(hours);
	if (hours <= 12) {
		hours = String(hours).padStart(2, 0);
		console.log(hours + ":" + minutes + ":" + seconds + " AM");
	} else {
		console.log(
			String(hours % 12).padStart(2, 0) + ":" + minutes + ":" + seconds + " PM"
		);
	}

	console.log("-------------------------------");
};

setInterval(time, 1000);
