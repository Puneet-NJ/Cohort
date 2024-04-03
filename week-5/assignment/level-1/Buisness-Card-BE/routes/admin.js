const { Router } = require("express");
const router = Router();
const { admin, card } = require("../db/db.js");
const jwt = require("jsonwebtoken");
const { JWT_SECRET } = require("../config");
const adminMiddleware = require("../middlewares/adminMiddleware.js");
const cardMiddleware = require("../middlewares/cardMiddleware.js");
const adminTokenMiddleware = require("../middlewares/adminTokenMiddleware.js");

router.post("/signup", adminMiddleware, async (req, res) => {
	const username = req.body.username;
	const password = req.body.password;

	await admin.create({
		username,
		password,
	});

	res.json({
		msg: "Admin created successfully",
	});
});

router.post("/signin", adminMiddleware, async (req, res) => {
	const username = req.body.username;
	const password = req.body.password;

	const findAdmin = await admin.find({ username, password });
	if (!findAdmin) {
		return res.status(411).json({ msg: "No admin found" });
	}

	const token = jwt.sign({ username }, JWT_SECRET);
	res.json({
		token,
	});
});
/**
 * {
    "name": "test-user",
    "description": "does everything",
    "interests": ["cricket", "travel"],
    "socials": [{"name": "twitter", "link": "http:google.com/test"},{"name": "linkedin", "link": "http:google.com/test2"}]
}
 */
router.post(
	"/createCard",
	cardMiddleware,
	adminTokenMiddleware,
	async (req, res) => {
		const name = req.body.name;
		const description = req.body.description;
		const socials = req.body.socials;
		const interests = req.body.interests;

		const createdCard = await card.create({
			name,
			description,
			socials,
			interests,
		});

		res.json({ id: createdCard._id, msg: "Card created" });
	}
);

router.get("/cards", adminTokenMiddleware, async (req, res) => {
	const cards = await card.find({});

	res.json({ allcards: cards });
});

router.get("/card/:id", adminTokenMiddleware, async (req, res) => {
	const id = req.params.id;

	const retrivedCard = await card.find({ _id: id });

	res.json({ retrivedCard });
});

router.put(
	"/updateCard/:id",
	cardMiddleware,
	adminTokenMiddleware,
	async (req, res) => {
		const id = req.params.id;

		await card.updateOne({ _id: id }, req.body);

		res.json({ msg: "Card updated" });
	}
);

router.delete("/card/:id", adminTokenMiddleware, async (req, res) => {
	const id = req.params.id;

	await card.deleteOne({ _id: id });

	res.json({ msg: "Deleted card" });
});

module.exports = router;
