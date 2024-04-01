const { Router } = require("express");
const router = Router();
const userMiddleware = require("../middleware/user");
const { User, Course } = require("../db/index");
const jwt = require("jsonwebtoken");
const { JWT_SECRET } = require("../config");

// User Routes
router.post("/signup", async (req, res) => {
	// Implement user signup logic

	const username = req.body.username;
	const password = req.body.password;

	await User.create({
		username,
		password,
	});

	res.json({ message: "User created successfully" });
});

router.post("/signin", async (req, res) => {
	// Implement admin signup logic

	const username = req.body.username;
	const password = req.body.password;

	const user = await User.find({
		username,
		password,
	});

	if (user) {
		const token = jwt.sign({ username }, JWT_SECRET);

		res.json({ token });
	} else {
		res.json({
			msg: "Invalid user",
		});
	}
});
// eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6InVzZXIxQGdtYWlsLmNvbSIsImlhdCI6MTcxMTk5OTU4Mn0.IpcKjjrA3wh2i5gMrK-V91ncyfmmXD_7vsDqawg5Q8w
router.get("/courses", async (req, res) => {
	// Implement listing all courses logic

	const courses = await Course.find({});

	res.json({
		courses,
	});
});

router.post("/courses/:courseId", userMiddleware, async (req, res) => {
	// Implement course purchase logic

	const courseId = req.params.courseId;
	const username = req.username;

	await User.updateOne(
		{ username },
		{
			$push: {
				purchasedCourses: courseId,
			},
		}
	);

	res.json({ message: "Course purchased successfully" });
});

// Google prompt: "How to find on mongoose on array"
router.get("/purchasedCourses", userMiddleware, async (req, res) => {
	// Implement fetching purchased courses logic

	const username = req.username;
	const user = await User.findOne({ username });

	const courses = user.purchasedCourses;

	const modifiedCourses = await Course.find({ _id: { $in: courses } });

	res.json({ modifiedCourses });
});

module.exports = router;
