import { Hono } from "hono";
import { accessDBRouter, helloRouter } from "./routes";

export type Bindings = {
    SECRET_KEY: string;
    DB_URL: string;
};

const app = new Hono<{ Bindings: Bindings }>();

app.basePath("/api").route("/", helloRouter);
app.basePath("/api").route("/data-from-db", accessDBRouter);

export default app;
