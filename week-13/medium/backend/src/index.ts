import { Hono } from "hono";
import { route } from "./routes";
import { PrismaClient } from "@prisma/client/edge";
import { withAccelerate } from "@prisma/extension-accelerate";

const app = new Hono();

app.route("/api/v1", route);

export default app;
