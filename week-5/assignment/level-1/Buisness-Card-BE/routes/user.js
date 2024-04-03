const { Router } = require("express");
const { card } = require("../db/db");
const router = Router();

router.get("/cards", async (req, res) => {
	const cards = await card.find({});

	res.json({ cards });
});

module.exports = router;
