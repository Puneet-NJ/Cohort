import { Hono } from "hono";
import { route } from "./routes";
import { PrismaClient } from "@prisma/client/edge";
import { withAccelerate } from "@prisma/extension-accelerate";
import { cors } from "hono/cors";

const app = new Hono();

app.use("/api/v1/*", cors());
app.route("/api/v1", route);

export default app;
