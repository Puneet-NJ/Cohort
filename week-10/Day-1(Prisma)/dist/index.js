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
Object.defineProperty(exports, "__esModule", { value: true });
const client_1 = require("@prisma/client");
const prisma = new client_1.PrismaClient();
const insertUser = (email, password, firstName, lastName) => __awaiter(void 0, void 0, void 0, function* () {
    const response = yield prisma.users.create({
        data: {
            email,
            password,
            firstName,
            lastName,
        },
        select: {
            id: true,
            firstName: true,
        },
    });
    console.log(response);
});
insertUser("some@gamil222.com", "pass", "Some", "Guy");
const updateUser = (email_1, _a) => __awaiter(void 0, [email_1, _a], void 0, function* (email, { firstName, lastName }) {
    const response = yield prisma.users.update({
        where: {
            email,
        },
        data: {
            firstName,
            lastName,
        },
    });
    console.log(response);
});
// updateUser("some@gamil2.com", { firstName: "asdf", lastName: "jkl" });
const getUser = (email) => __awaiter(void 0, void 0, void 0, function* () {
    const response = yield prisma.users.findMany({
        where: {},
    });
    console.log(response);
});
// getUser("some@gamil2.com");
