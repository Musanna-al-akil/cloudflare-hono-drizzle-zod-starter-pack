import { neon } from "@neondatabase/serverless";
import { drizzle } from "drizzle-orm/neon-http";

export const createDB = (ctx: any) => {
    const sql = neon(ctx.DB_URL!);
    const db = drizzle(sql);

    return db;
};

export type db = ReturnType<typeof createDB>;
