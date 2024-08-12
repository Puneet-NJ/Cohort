"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.userAuth = void 0;
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const dotenv_1 = __importDefault(require("dotenv"));
const routes_1 = require("../routes");
dotenv_1.default.config({ path: "./.env" });
const userAuth = (req, res, next) => {
    var _a;
    try {
        const token = (_a = req.headers.authorization) === null || _a === void 0 ? void 0 : _a.split(" ")[1];
        if (!token) {
            return res
                .status(routes_1.STATUS_CODES.INVALID_INPUTS)
                .json({ msg: "No token provided, authorization denied" });
        }
        const jwtPassword = process.env.JWT_PASSWORD || "";
        try {
            const verifyToken = jsonwebtoken_1.default.verify(token, jwtPassword);
            req.id = verifyToken.id; // Assuming `id` is a part of the token payload
            next();
        }
        catch (err) {
            return res
                .status(routes_1.STATUS_CODES.INVALID_INPUTS)
                .json({ msg: "Invalid token" });
        }
    }
    catch (err) {
        console.error(err);
        return res
            .status(routes_1.STATUS_CODES.INTRENAL_ERROR)
            .json({ msg: routes_1.RESPONSE_MESSAGES.INTRENAL_ERROR });
    }
};
exports.userAuth = userAuth;
