import { integer, sqliteTable, text } from "drizzle-orm/sqlite-core";

export const person = sqliteTable('person', {
    id: integer('id').primaryKey(),
    name: text('name'),
    age: integer('age')
})