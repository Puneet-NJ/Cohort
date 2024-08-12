"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.userSignin = exports.userSignup = void 0;
const routes_1 = require("../routes");
const user_1 = require("../zod/user");
const client_1 = require("@prisma/client");
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const dotenv_1 = __importDefault(require("dotenv"));
const userSignup = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const prisma = new client_1.PrismaClient();
        const body = req.body;
        const validInput = user_1.userSignupSchema.safeParse(body);
        if (!validInput.success)
            return res.status(routes_1.STATUS_CODES.INVALID_INPUTS).json({
                msg: routes_1.RESPONSE_MESSAGES.INVALID_INPUTS,
            });
        // Check if the user already doesn't exists
        const userExists = yield prisma.user.findFirst({
            where: {
                username: body.username,
            },
        });
        if (userExists)
            return res.status(routes_1.STATUS_CODES.INVALID_INPUTS).json({
                msg: "User already exists",
            });
        const response = yield prisma.user.create({
            data: {
                name: body.name,
                username: body.username,
                password: body.password,
            },
        });
        // Generate token
        dotenv_1.default.config({ path: "./.env" });
        const token = jsonwebtoken_1.default.sign({ id: response.id }, process.env.JWT_PASSWORD || "");
        return res.json({
            msg: "User created successfully!!",
            token,
            user: response,
        });
    }
    catch (err) {
        return res
            .status(routes_1.STATUS_CODES.INTRENAL_ERROR)
            .json({ msg: routes_1.RESPONSE_MESSAGES.INTRENAL_ERROR });
    }
});
exports.userSignup = userSignup;
const userSignin = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const prisma = new client_1.PrismaClient();
        const body = req.body;
        const validInput = user_1.userSigninSchema.safeParse(body);
        if (!validInput.success)
            return res
                .status(routes_1.STATUS_CODES.INVALID_INPUTS)
                .json({ msg: routes_1.RESPONSE_MESSAGES.INVALID_INPUTS });
        const response = yield prisma.user.findFirst({
            where: {
                username: body.username,
                password: body.password,
            },
        });
        if (!response)
            return res
                .status(routes_1.STATUS_CODES.INVALID_INPUTS)
                .json({ msg: "User not found" });
        dotenv_1.default.config({ path: "./.env" });
        const token = jsonwebtoken_1.default.sign({ id: response.id }, process.env.JWT_PASSWORD || "");
        return res.json({ msg: "Sign in successfully", token });
    }
    catch (err) {
        return res
            .status(routes_1.STATUS_CODES.INTRENAL_ERROR)
            .json({ msg: routes_1.RESPONSE_MESSAGES.INTRENAL_ERROR });
    }
});
exports.userSignin = userSignin;
