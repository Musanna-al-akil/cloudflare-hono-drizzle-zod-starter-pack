import { eq } from "drizzle-orm";
import { db } from "../db/connection";
import { randomSelectSchema, randomTable } from "../db/schema";

export const insertRandom = async (db: db, random: any) => {
    return await db
        .insert(randomTable)
        .values(random)
        .returning({ insertedId: randomTable.id });
};

export const getRandom = async (db: db, id: string) => {
    return await db
        .select()
        .from(randomTable)
        .where(eq(randomTable.id, Number(id)));
};
