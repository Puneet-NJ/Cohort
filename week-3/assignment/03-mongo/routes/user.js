const { Router } = require("express");
const router = Router();
const userMiddleware = require("../middleware/user");
const { User, Course } = require("../db");

// User Routes
router.post("/signup", (req, res) => {
	// Implement user signup logic

	const username = req.body.username;
	const password = req.body.password;

	User.create({
		username,
		password,
	});

	res.json({ message: "User created successfully" });
});

router.get("/courses", async (req, res) => {
	// Implement listing all courses logic

	const courses = await Course.find({});

	res.json({ courses });
});

router.post("/courses/:courseId", userMiddleware, async (req, res) => {
	// Implement course purchase logic
	const courseId = req.params.courseId;
	const username = req.headers.username;

	await User.updateOne(
		{ username: username },
		{
			$push: {
				purchasedCourses: courseId,
			},
		}
	);

	res.json({
		msg: "Course added succesfully",
	});
});

router.get("/purchasedCourses", userMiddleware, async (req, res) => {
	// Implement fetching purchased courses logic

	const username = req.headers.username;
	const password = req.headers.password;

	const user = await User.findOne({ username, password });

	const courses = user.purchasedCourses;
	// const modifiedCourses = [];

	// for (let i = 0; i < courses.length; i++) {
	// 	const course = courses[i];

	// 	modifiedCourses.push(await Course.findOne({ _id: course }));
	// }

	// OR HARKIRAT'S APPROACH:
	const modifiedCourses = await Course.find({ _id: { $in: courses } });

	res.json({ courses: modifiedCourses });
});

module.exports = router;
