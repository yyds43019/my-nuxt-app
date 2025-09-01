import { drizzle } from "drizzle-orm/d1";
import { person } from '~~/server/schema/schema'

export default defineEventHandler(async (event) => {
    const body = await readBody<{ name: string, age: number }>(event);

    const db = drizzle(event.context.cloudflare.env.DB)

    const result = await db.insert(person).values({ name: body.name, age: body.age }).returning({ insertedId: person.id })
    return Response.json(result)
})
