const fs = require("fs");

fs.readFile("./a.txt", "utf-8", (err, data) => {
	const arr = data.split(" ");

	let ans = "";
	for (let i = 0; i < arr.length; i++) {
		if (arr[i] !== "") ans = ans + arr[i] + " ";
	}

	fs.writeFile("./a.txt", ans, (err) => {
		if (err) console.log(err);
		else {
			console.log("Written to the file!!");
		}
	});
});
