const fs = require("fs");

let hobbies = ["Coding", "Working out", "Singing", "Watching YT"];
hobbies = hobbies.join(", ");
fs.writeFile("./hobbies.txt", hobbies, (err) => {
	if (err) console.log(err);
	else {
		console.log("File written sucessfully");

		fs.readFile("./hobbies.txt", "utf-8", (err, data) => {
			console.log(data);
		});
	}
});
