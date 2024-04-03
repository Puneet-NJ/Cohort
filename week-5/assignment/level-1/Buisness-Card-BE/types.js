const zod = require("zod");

const adminSchema = zod.object({
	username: zod.string(),
	password: zod.string(),
});

const cardSchema = zod.object({
	name: zod.string(),
	description: zod.string(),
	interests: zod.array(zod.string()),
	socials: zod.array(
		zod.object({
			name: zod.string(),
			link: zod.string(),
		})
	),
});

module.exports = {
	cardSchema,
	adminSchema,
};
