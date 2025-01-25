import { drizzle } from "drizzle-orm/node-postgres";

export const createDB = (ctx: any) => {
    const db = drizzle(ctx.DB_URL!);

    return db;
};

export type db = ReturnType<typeof createDB>;
