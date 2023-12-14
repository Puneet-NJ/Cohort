const fs = require("fs");

let data = "Alag Aasmaan, Let her go, Hymn for the weekend, Snowman";
fs.writeFile("songs.txt", data, (err) => {
	if (err) console.log(err);
	else {
		console.log("File written succesfully");
		console.log("Added songs.txt");
	}
});

for (let i = 0; i < 10000000000; i++) {}
console.log("After loop");
