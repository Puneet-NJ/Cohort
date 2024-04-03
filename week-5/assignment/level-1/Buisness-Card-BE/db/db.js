const mongoose = require("mongoose");

mongoose.connect(
	"mongodb+srv://lpuneetnj:nIn1LCCPR208KFSZ@cluster0.geefcdf.mongodb.net/buisness-card"
);

const admin = mongoose.model("Admin", {
	username: String,
	password: String,
});

const card = mongoose.model("Cards", {
	name: String,
	description: String,
	interests: [String],
	socials: [
		{
			name: String,
			link: String,
		},
	],
});

module.exports = { admin, card };
