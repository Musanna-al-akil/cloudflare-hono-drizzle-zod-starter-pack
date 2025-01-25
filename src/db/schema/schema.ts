import { integer, pgTable, varchar } from "drizzle-orm/pg-core";
import {
  createInsertSchema,
  createSelectSchema,
  createUpdateSchema,
} from "drizzle-zod";

export const randomTable = pgTable("randomTable", {
  id: integer().primaryKey().generatedAlwaysAsIdentity(),
  name: varchar({ length: 255 }).notNull(),
  age: integer().notNull(),
  random: varchar({ length: 255 }),
});

export const randomSelectSchema = createSelectSchema(randomTable);
export const randomInsertSchema = createInsertSchema(randomTable);
export const userUpdateSchema = createUpdateSchema(randomTable);
