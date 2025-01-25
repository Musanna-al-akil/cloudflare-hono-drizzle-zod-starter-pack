import { Hono } from "hono";
import { createDB } from "../db/connection";
import { randomInsertSchema } from "../db/schema";
import { getRandom, insertRandom } from "../services/random.service";

export const accessDBRouter = new Hono()
    .post("/", async (c) => {
        const random = await c.req.json();

        const parsed = randomInsertSchema.parse(random);
        const db = createDB(c.env);

        const data = await insertRandom(db, {
            name: parsed.name,
            age: parsed.age,
            random: Math.random(),
        });

        return c.json(data);
    })
    .get("/:id", async (c) => {
        const db = createDB(c.env);
        const id = c.req.param("id");

        const data = await getRandom(db, id);
        return c.json(data);
    });
