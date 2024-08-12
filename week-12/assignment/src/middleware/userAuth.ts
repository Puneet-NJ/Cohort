import { NextFunction, Request, Response } from "express";
import jwt from "jsonwebtoken";
import dotenv from "dotenv";
import { RESPONSE_MESSAGES, STATUS_CODES } from "../routes";

// Extend the Request interface to include `id`
export interface AuthenticatedRequest extends Request {
	id?: number;
}

dotenv.config({ path: "./.env" });

export const userAuth = (
	req: AuthenticatedRequest,
	res: Response,
	next: NextFunction
) => {
	try {
		const token = req.headers.authorization?.split(" ")[1];

		if (!token) {
			return res
				.status(STATUS_CODES.INVALID_INPUTS)
				.json({ msg: "No token provided, authorization denied" });
		}

		const jwtPassword = process.env.JWT_PASSWORD || "";

		try {
			const verifyToken = jwt.verify(token, jwtPassword) as jwt.JwtPayload;

			req.id = verifyToken.id; // Assuming `id` is a part of the token payload
			next();
		} catch (err) {
			return res
				.status(STATUS_CODES.INVALID_INPUTS)
				.json({ msg: "Invalid token" });
		}
	} catch (err) {
		console.error(err);
		return res
			.status(STATUS_CODES.INTRENAL_ERROR)
			.json({ msg: RESPONSE_MESSAGES.INTRENAL_ERROR });
	}
};
