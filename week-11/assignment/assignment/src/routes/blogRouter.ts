import { Hono } from "hono";
import { getAllBlogs } from "../controller/blogController";

export const blogRoute = new Hono();

blogRoute.get("/posts", getAllBlogs);
