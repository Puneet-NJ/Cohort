const fs = require("fs");

fs.readFile("dummy.txt", "utf-8", (err, data) => {
	const array = data.split(" ");

	const filteredArray = array.filter((word) => word !== "");

	const finalStr = filteredArray.join(" ");
	console.log(finalStr);
});
