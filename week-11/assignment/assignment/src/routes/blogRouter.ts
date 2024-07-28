import { Hono } from "hono";
import {
	createBlog,
	deleteBlog,
	getAllBlogs,
	getBlog,
	updateBlog,
} from "../controller/blogController";
import { userAuthMiddleware } from "../middleware/user";

export const blogRoute = new Hono();

blogRoute.get("/posts", getAllBlogs);
blogRoute.post("/posts", userAuthMiddleware, createBlog);
blogRoute.get("/posts/:id", getBlog);
blogRoute.put("/posts/:id", userAuthMiddleware, updateBlog);
blogRoute.delete("/posts/:id", userAuthMiddleware, deleteBlog);
