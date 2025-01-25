import { Hono } from "hono";

export const helloRouter = new Hono().get("/", (c) => {
    return c.text("Hello Hono!");
});
