import type { db } from "@/db/connection";

import { randomTable } from "@/db/schema";
import { eq } from "drizzle-orm";

export async function insertRandom(db: db, random: any) {
  return await db
    .insert(randomTable)
    .values(random)
    .returning({ insertedId: randomTable.id });
}

export async function getRandom(db: db, id: string) {
  return await db
    .select()
    .from(randomTable)
    .where(eq(randomTable.id, Number(id)));
}
